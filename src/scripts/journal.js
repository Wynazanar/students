const group_id = window.location.href.split("?group_id=")[1];
console.log(group_id);
setStudentsTable("");

function setStudentsTable(filter) {
    let table = document.querySelector("#students-list_table");
    table.innerHTML = "";

    const _students = students.filter(s => s.group_id == group_id);
    let index = 1;
    for (let _s of _students) {
        let filteredStudent = _s.student.trim().toLowerCase().includes(filter.trim().toLowerCase());
        if (filteredStudent) {
            const tr = document.createElement("tr");
            
            const index_td = document.createElement("td");
            index_td.textContent = index;
            tr.appendChild(index_td);
            index++;
    
            const student_td = document.createElement("td");
            student_td.textContent = _s.student;
            tr.appendChild(student_td);
            table.appendChild(tr);
        }
    }
}