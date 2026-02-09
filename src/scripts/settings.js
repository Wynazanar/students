const _teachers = getLocalStorage("teachers");
const columns = [
    {
        key: "id",
        name: "ID",
        value: "id"
    },
    {
        key: "teacher",
        name: "Преподаватель",
        value: "teacher"
    },
    {
        key: "actions",
        name: "Действия",
        value: `<button>Удалить</button>`
    },
];

renderSubStudTable();


function renderSubStudTable(pageNumber = 1) {
    const table = document.querySelector("#settings_subject_students");
    table.innerHTML = Table(columns, _teachers);

    // const data = getLocalStorage("sub_stud");
    // const _groups = getLocalStorage("groups");
    // const _subjects = getLocalStorage("subjects");

    // const table_cells = 3;
    // const totalPage = Math.ceil(data.length / table_cells);
    // const startIndex = (pageNumber - 1) * table_cells;
    // const endIndex = startIndex + table_cells;

    // for (let i = startIndex; i < endIndex && i < data.length; i++) {
    //     const rowData = data[i];
    //     table.innerHTML +=
    //         `<tr>
    //             <td style="text-align: center;">${rowData.id}</td>
    //             <td>${_subjects.find(s => s.id == rowData.subject_id).subject}</td>
    //             <td>${_teachers.find(t => t.id == _subjects.find(s => s.id == rowData.subject_id).teacher_id).teacher}</td>
    //             <td style="text-align: center;">${_groups.find(g => g.id == rowData.group_id).group}</td>
    //             <td style="text-align: right;"><button onclick="openSubStudModal('${rowData.id}')">Изменить</button></td>
    //         </tr>`;

    // }

    // renderPagination(totalPage, pageNumber);
}

function renderPagination(totalPages, currentPage) {
    const paginationDiv = document.querySelector(".pagition-btn-numbers");
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

    const prevBtn = document.querySelector('#pag-btn-prev');
    const nextBtn = document.querySelector('#pag-btn-next');

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage >= totalPages;
    prevBtn.onclick = () => handlePageClick(currentPage - 1);
    nextBtn.onclick = () => handlePageClick(currentPage + 1);

    if (totalPages == 1) {
        let pagition = document.querySelector(".pagition");
        pagition.style.display = "none";
    }

    highlightActivePage(currentPage);
}

function handlePageClick(pageNumber) {
    renderSubStudTable(pageNumber);
    highlightActivePage(pageNumber);
}

function highlightActivePage(activePage) {
    const buttons = document.querySelectorAll(".pagition-btn-numbers button");
    buttons.forEach((btn) => {
        btn.classList.toggle("select", parseInt(btn.dataset.pageNum) === activePage);
    });
}







function openSubStudModal(id = null) {
    const modal = document.querySelector("#lessonSettings");

    const data = getLocalStorage("sub_stud");
    const _groups = getLocalStorage("groups");
    const _teachers = getLocalStorage("teachers");
    const _subjects = getLocalStorage("subjects");

    let _sub_stud = null;
    let _sub_stud_group_id = "";
    let _teacher = "";

    if (id != null) {
        _sub_stud = data.find(d => d.id == id);
        console.log(_sub_stud);
        _sub_stud_group_id = _sub_stud.group_id;
        _teacher = _teachers.find(t => t.id == _subjects.find(s => s.id == _sub_stud.subject_id).id);
        console.log(_teacher);
    }

    console.log(_teacher);

    modal.innerHTML =
        `<div class="form-header">
        <h2>${id == null ? "Создание" : "Редактирование"}</h2>
        <svg width="19px" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </div>
    <p class="form-description">
        ${id == null ?
            "Вы можете создавать новые занятия у групп. Выберите преподавателя, дисциплину и группу." :
            `Вы редактируете группу ${_groups.find(g => g.id == _sub_stud_group_id).group}. Измените преподавателя, дисциплину или группу.`
        }
    </p>
    <div class="form-section">
        <input value="${_teacher == "" ? "" : `${_teacher.teacher}`
        }" placeholder="Преподаватель" class="form-section-select" onchange="{setTeachersSubject()}" id="teacher_settings" list="teachers-list">
        <datalist id="teachers-list">
            ${loadAllTeachers(_teachers)
        }
        </datalist>
        <select class="form-section-select" id="subject_settings">
            ${id == null ?
            "<option selected disabled>Выберите дисциплину</option>" :
            setTeacherSubjects(_subjects, _teacher)}
        </select>
        <input placeholder="Группа" class="form-section-select" id="group_settings" list="groups-list" value="${_sub_stud_group_id}">
        <datalist id="groups-list">${setGoupDataList()}</datalist>
    </div>
            
    <button class="button primary" onclick="saveSubStud()" style="width: 100%">Создать/Сохранить</button>`;



    modal.classList.toggle("hide");
}

function loadAllTeachers(data) {
    let string = "";
    for (let d of data) {
        string += `<option value="${d.teacher}">${d.teacher}</option>`;
    }
    return string;
}

function setTeacherSubjects(data, teacher) {
    let str = "";
    const teacher_subjects = data.filter(d => d.teacher_id == teacher.id);
    console.log(teacher_subjects);
    for (let ts of teacher_subjects) {
        str += `<option value="${ts.id}">${ts.subject}</option>`;
    }
    return str;
}

function setGoupDataList() {
    return "<option>Здесб буудет весь списокк</option>";
}