const groups = [
    {id: 1, group: "9ИС-120"},
    {id: 2, group: "11КС-250"},
    {id: 3, group: "9ИС-430"},
];

const students = [
    {id: 1, group_id: 1, student: "Иванов Иван"},
    {id: 2, group_id: 1, student: "Максимов Максим"},
    {id: 3, group_id: 1, student: "Андреев Андрей"},
    {id: 4, group_id: 2, student: "Миронова Мария"},
    {id: 5, group_id: 2, student: "Алексеев Алексей"},
    {id: 6, group_id: 3, student: "Никитин Никита"},
];

const subjects = [
    {id: 1, subject: "ТРПО", teacher_id: 1},
    {id: 2, subject: "ИСРПО", teacher_id: 2},
    {id: 3, subject: "Мат. моделирование", teacher_id: 1},
];

const teachers = [
    {id: 1, teacher: "Балаева Елизавета"},
    {id: 2, teacher: "Гузова Маргарита"},
];

const sub_stud = [
    {id: 1, group_id: 1, subject_id: 1},
    {id: 2, group_id: 1, subject_id: 3},
    {id: 3, group_id: 2, subject_id: 3},
    {id: 4, group_id: 3, subject_id: 3},
    {id: 5, group_id: 3, subject_id: 1},
];

const grades = [
    {
        id: 1,
        sub_stud_id: 1,
        teacher_id: 1,
        grades: [
            {date: "2026-01-21",
                students_grades: [
                    {student_id: 1, grade: "5"},
                    {student_id: 2, grade: "4"},
                    {student_id: 3, grade: "2"},]},
            {date: "2026-01-22",
                students_grades: [
                    {student_id: 1, grade: ""},
                    {student_id: 2, grade: "5"},
                    {student_id: 3, grade: "4"},]},
            {date: "2026-01-23",
                students_grades: [
                    {student_id: 1, grade: "3"},
                    {student_id: 2, grade: ""},
                    {student_id: 3, grade: ""},]},
        ]
    }
];


let sub_select = document.querySelector("#subject");
let group_select = document.querySelector("#group");

sub_select.innerHTML = `<option value="-" selected disabled>Выберите предмет</option>`;
group_select.innerHTML = `<option value="-" selected disabled>Выберите группу</option>`;

const teacher = localStorage.getItem("teacher");
const teacher_sub = subjects.filter(s => s.teacher_id == teacher);

for (let ts of teacher_sub) {
    console.log(ts);
    let option = document.createElement("option");
    option.value = ts.id;
    option.textContent = ts.subject;
    sub_select.appendChild(option);
}

sub_select.addEventListener("change", () => {
    group_select.innerHTML = `<option value="-" selected disabled>Выберите группу</option>`;
    
    console.log(sub_select.value);
    const sub = sub_stud.filter(ss => ss.subject_id == sub_select.value);
    for (let s of sub) {
        let option = document.createElement("option");
        option.value = s.group_id;
        option.textContent = groups.find(g => g.id == s.group_id).group;
        group_select.appendChild(option);
    }
});

group_select.addEventListener("change", () => {
    const _students = students.filter(st => st.group_id == group_select.value);
    let table = document.querySelector("#st_tbody");
    let index = 1;
    table.innerHTML = "";
    for (let st of _students) {
        table.innerHTML += `<tr>
                                <td>${index}. </td>
                                <td>${st.student}</td>
                                <td><input type="text"></td>
                            </tr>`;
        index++;
    }
});