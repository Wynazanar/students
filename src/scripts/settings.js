function setTable() {
    const table = document.querySelector("#tbody");
    table.innerHTML = "";

    const data = getLocalStorage("teachers");
    data.forEach(teacher => {
        table.innerHTML += `
            <tr>
                <td>${teacher.id}</td>
                <td>${teacher.teacher}</td>
                <td><a onclick="changeTeacher('${teacher.id}')">Изменить</a> <a onclick="deleteTeacher('${teacher.id}')">Удалить</a></td>
            </tr>
        `;
    });
}

setTable();

function deleteTeacher(id=null) {
    if (id != null) {
        const data = getLocalStorage("teachers");
        const teacher = data.find(data => data.id == id);
        console.log(`Учитель ${teacher.teacher} удален`);
    }
}