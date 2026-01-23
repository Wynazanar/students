const group_id = window.location.href.split("?group_id=")[1].split("&")[0];
const sub_id = window.location.href.split("&subject_id=")[1];
console.log(group_id);
console.log(sub_id);

setStudentsTable("");
setAttribute(sub_id);

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

function setAttribute(id) {
    let subject_select = document.querySelector("#subject-select_journal");
    if (id != null) {
        const _subject = subjects.find(s => s.id == id);
        console.log(_subject);
        subject_select.innerHTML = `<option value=${_subject.id} disable selected>${_subject.subject}</option>`;
    } else {
        const _subject = subjects.find(s => s.id == id);
    }
}