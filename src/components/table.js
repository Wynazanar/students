function Table(
    columns = [],
    data = [],
    pagination = true,
    pageSize = 5,
    pageNumber=1
) {

    const totalPage = Math.ceil(data.length / pageSize);
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const table = document.createElement("table");

    table.appendChild(getTableHeader(columns));
    table.appendChild(getTableBody(columns, data));

    return table.outerHTML;
}

function getTableHeader(columns) {
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");

    for (let column of columns) {
        const th = document.createElement("th");
        th.textContent = column.name;
        th.id = column.key;
        tr.appendChild(th);
    }

    thead.appendChild(tr);
    return thead;
}

function getTableBody(columns, json) {
    const tbody = document.createElement("tbody");

    if (json.length == 0) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.colSpan = 100;
        td.textContent = "Нет данных для отображения";
        td.style.textAlign = "center";
        tr.appendChild(td);
        tbody.appendChild(tr);
        return tbody;
    }

    for (const item of json) {
        const tr = document.createElement("tr");

        for (const col of columns) {
            const td = document.createElement("td");
            const val = col.value;

            if (typeof val === "string") {
                if (val.includes("<")) {
                    td.innerHTML = val;
                } else if (val in item) {
                    td.textContent = item[val];
                } else {
                    td.textContent = val;
                }
            } else if (val instanceof Node) {
                td.appendChild(val.cloneNode(true));
            } else {
                td.textContent = "";
            }

            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }

    return tbody;
    getPadinations();
}

function getPadinations(totalPages, currentPage, id) {
    const paginationDiv = document.querySelector(id);
    paginationDiv.innerHTML = "";

    const maxButtons = 7;

    let startPage = Math.max(currentPage - Math.floor(maxButtons / 2), 1);
    let endPage = Math.min(startPage + maxButtons - 1, totalPages);

    if (endPage > totalPages) {
        startPage -= (endPage - totalPages);
        endPage = totalPages;
    }


    for (let p = startPage; p <= endPage; p++) {
        const button = document.createElement("button");
        button.textContent = p;
        button.dataset.pageNum = p;

        button.addEventListener("click", () => {
            handlePageClick(p);
        });

        paginationDiv.appendChild(button);
    }

    const prevBtn = document.querySelector('#pag-btn-prev'+id);
    const nextBtn = document.querySelector('#pag-btn-next'+id);

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage >= totalPages;
    prevBtn.onclick = () => handlePageClick(currentPage - 1);
    nextBtn.onclick = () => handlePageClick(currentPage + 1);

    if (totalPages == 1) {
        let pagition = document.querySelector(id);
        pagition.style.display = "none";
    }

    highlightActivePage(currentPage, id);
}

function handlePageClick(pageNumber, id) {
    renderSubStudTable(pageNumber);
    highlightActivePage(pageNumber, id);
}

function highlightActivePage(activePage, id) {
    const buttons = document.querySelectorAll(".pagition-btn-numbers button"+id);
    buttons.forEach((btn) => {
        btn.classList.toggle("select", parseInt(btn.dataset.pageNum) === activePage);
    });
}