const group_id = window.location.href.split("?group_id=")[1].split("&")[0];
const sub_id = window.location.href.split("&subject_id=")[1];

const _MONTH = {
    "01": "Январь",
    "02": "Февраль",
    "03": "Март",
    "04": "Апрель",
    "05": "Май",
    "06": "Июнь",
    "07": "Июль",
    "08": "Август",
    "09": "Сентябрь",
    "10": "Октябрь",
    "11": "Ноябрь",
    "12": "Декабрь",
}

renderTable();
setAttribute(sub_id);

function renderTable(filter="") {
    setStudentsTable(filter);
    setJournalsTable(filter);
}

function setStudentsTable(filter="") {
    let table = document.querySelector("#students-list_table");
    table.innerHTML = "";

    const _students = students
        .filter(s => s.group_id == group_id)
        .sort((a, b) => a.student.trim().localeCompare(b.student.trim(), "ru", { sensitivity: "base" }));
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

function setJournalsTable(filter="") {
    const _stud_sub = sub_stud.find(ss => ss.group_id == group_id && ss.subject_id == sub_id);
    if (!_stud_sub) return;

    const _grade = grades.find(g => g.sub_stud_id == _stud_sub.id);
    if (!_grade) return;

    const _grades = Array.isArray(_grade.grades) ? _grade.grades : [];

    const month_tr = document.querySelector("#month-tr");
    month_tr.innerHTML = "";

    const days_tr = document.querySelector("#days-tr");
    days_tr.innerHTML = "";

    const grades_table = document.querySelector("#grades-table");
    grades_table.innerHTML = "";

    let allMonth = [];
    let uniqueMonth = [];
    let allDays = [];
    let allGrades = [];

    for (let _g of _grades) {
        let m = _g.date.split("-")[1];
        let d = _g.date.split("-")[2];

        allMonth.push(m);
        allDays.push(d);
        allGrades.push(_g.students_grades);

        if (!uniqueMonth.includes(m)) {
            uniqueMonth.push(m);
        }
    }

    for (let m of uniqueMonth) {
        const th = document.createElement("th");
        th.textContent = _MONTH[m];
        th.colSpan = allMonth.filter(allm => allm == m).length;
        month_tr.appendChild(th);
    }

    for (let d of allDays) {
        const th = document.createElement("th");
        th.textContent = d;
        days_tr.appendChild(th);
    }

    const gradesByStudentId = new Map();
    for (let lessonGrades of allGrades) {
        for (let sg of lessonGrades) {
            if (!gradesByStudentId.has(sg.student_id)) gradesByStudentId.set(sg.student_id, []);
            gradesByStudentId.get(sg.student_id).push(sg.grade);
        }
    }

    const filteredStudents = students
        .filter(s => s.group_id == group_id && s.student.trim().toLowerCase().includes(filter.trim().toLowerCase()))
        .sort((a, b) => a.student.trim().localeCompare(b.student.trim(), "ru", { sensitivity: "base" }));

    for (let st of filteredStudents) {
        const tr = document.createElement("tr");
        const stGrades = gradesByStudentId.get(st.id) || [];
        for (let i = 0; i < allDays.length; i++) {
            const td = document.createElement("td");
            td.textContent = stGrades[i] ?? "";
            tr.appendChild(td);
        }
        grades_table.appendChild(tr);
    }
}

function setAttribute(id) {
    let subject_select = document.querySelector("#subject-select_journal");
    subject_select.innerHTML = "";

    const _subject = subjects.find(s => s.id == id);
    if (_subject) {
        subject_select.innerHTML = `<option value=${_subject.id} disable selected>${_subject.subject}</option>`;
    } else {
        const teacher = localStorage.getItem("teacher");
        const _subject = subjects.filter(s => s.teacher_id == teacher);
        for (let _s of _subject) {
            const currentSub = sub_stud.find(ss => ss.subject_id == _s.id);
            if (currentSub) {
                const option = document.createElement("option");
                option.textContent = _s.subject;
                option.value = _s.id;
                subject_select.appendChild(option);
            }
        }
    }
}