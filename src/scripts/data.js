const groups = [
    {id: 1, group: "9ИС-120"},
    {id: 2, group: "11КС-250"},
    {id: 3, group: "9ИС-430"},
];

const students = [
    {"id": 1, "group_id": 1, "student": "Иванов Иван"},
    {"id": 2, "group_id": 1, "student": "Максимов Максим"},
    {"id": 3, "group_id": 1, "student": "Андреев Андрей"},
    {"id": 4, "group_id": 2, "student": "Миронова Мария"},
    {"id": 5, "group_id": 2, "student": "Алексеев Алексей"},
    {"id": 6, "group_id": 3, "student": "Никитин Никита"},
    {"id": 7, "group_id": 3, "student": "Иванов Иван"},
    {"id": 8, "group_id": 3, "student": "Петров Петр"},
    {"id": 9, "group_id": 3, "student": "Сидоров Сидор"},
    {"id": 10, "group_id": 3, "student": "Семенов Семен"},
    {"id": 11, "group_id": 3, "student": "Васильев Василий"},
    {"id": 12, "group_id": 3, "student": "Александров Александр"},
    {"id": 13, "group_id": 3, "student": "Николаев Николай"},
    {"id": 14, "group_id": 3, "student": "Павлов Павел"},
    {"id": 15, "group_id": 3, "student": "Сергеев Сергей"},
    {"id": 16, "group_id": 3, "student": "Андреев Андрей"},
    {"id": 17, "group_id": 3, "student": "Дмитриев Дмитрий"},
    {"id": 18, "group_id": 3, "student": "Егоров Егор"},
    {"id": 19, "group_id": 3, "student": "Борисов Борис"},
    {"id": 20, "group_id": 3, "student": "Волков Волк"},
    {"id": 21, "group_id": 3, "student": "Зайцев Зайц"},
    {"id": 22, "group_id": 3, "student": "Козлов Козел"},
    {"id": 23, "group_id": 3, "student": "Левин Лев"},
    {"id": 24, "group_id": 3, "student": "Константинов Константин"},
    {"id": 25, "group_id": 3, "student": "Орлов Орлов"},
    {"id": 26, "group_id": 3, "student": "Романов Роман"},
    {"id": 27, "group_id": 3, "student": "Королев Королев"},
    {"id": 28, "group_id": 3, "student": "Носов Нос"},
    {"id": 29, "group_id": 3, "student": "Горбачев Горбач"},
    {"id": 30, "group_id": 3, "student": "Чернышов Черныш"},
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

function openLessonSettings(lesson, group) {
    return `<div class="form" id="lessonSettings">
            <div class="form-header">
                <h2>Редактирование урока</h2>
                <svg width="19px" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
            <p class="form-description">Вы можете создавать новые занятия, а также редактировать существующие</p>
            <div class="form-section">
                <label for="date">Дата занятия</label>
                <input type="date" onchange="{console.log(this.value)}" id="date">
                <br>
                <select class="form-section-select" id="subject"></select>
            </div>
            <div class="form-section">
                <h3>Успеваемость учащихся</h3>
                <select class="form-section-select" id="group"></select>
                <table>
                    <thead>
                        <tr>
                            <th colspan="2">Учащиеся</th>
                            <th>Оценивание</th>
                        </tr>
                    </thead>
                    <tbody id="st_tbody"></tbody>
                </table>
            </div>
            <button class="button primary" onclick="saveThemeSubject()">Создать/Сохранить</button>
        </div>`;
}