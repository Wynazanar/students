const groups = [
  { "id": 1, "group": "9КС-141" },
  { "id": 2, "group": "9КС-142" },
  { "id": 3, "group": "11ИС-143" },
  { "id": 4, "group": "9СА-144" },
  { "id": 5, "group": "9МЭ-146" },
  { "id": 6, "group": "11ОБ-147" },
  { "id": 7, "group": "11ТЭ-148" },
  { "id": 8, "group": "9ОР-149" },
  { "id": 9, "group": "9СА-161К" },
  { "id": 10, "group": "9ИС-170К" },
  { "id": 11, "group": "9КС-171К" },
  { "id": 12, "group": "9ИС-175" },
  { "id": 13, "group": "9ИС-180" },
  { "id": 14, "group": "9ИС-185" },
  { "id": 15, "group": "9ИИ-190К" },
  { "id": 16, "group": "ТЕХНИЧЕСКИЙ-РЕЗЕРВ" },
  { "id": 17, "group": "9КС-232" },
  { "id": 18, "group": "11ИС-233" },
  { "id": 19, "group": "9КС-234" },
  { "id": 20, "group": "9МЭ-236" },
  { "id": 21, "group": "11ТЭ-238" },
  { "id": 22, "group": "9СА-251К" },
  { "id": 23, "group": "9КС-252К" },
  { "id": 24, "group": "9СА-254" },
  { "id": 25, "group": "11МЭ-258" },
  { "id": 26, "group": "9ИС-260" },
  { "id": 27, "group": "9ИС-265" },
  { "id": 28, "group": "9ИС-270" },
  { "id": 29, "group": "9ИС-275К" },
  { "id": 30, "group": "11ОБ-297" },
  { "id": 31, "group": "9ОР-299" },
  { "id": 32, "group": "9СА-321" },
  { "id": 33, "group": "9КС-322К" },
  { "id": 34, "group": "11ИС-323Д" },
  { "id": 35, "group": "9СА-324К" },
  { "id": 36, "group": "9ИС-335" },
  { "id": 37, "group": "9ИС-340" },
  { "id": 38, "group": "9ИС-345" },
  { "id": 39, "group": "9ИС-350К" },
  { "id": 40, "group": "9ИС-355К" },
  { "id": 41, "group": "9МЭ-386" },
  { "id": 42, "group": "11ОБ-387" },
  { "id": 43, "group": "11МЭ-388" },
  { "id": 44, "group": "9КС-392" },
  { "id": 45, "group": "11ИС-393" },
  { "id": 46, "group": "9КС-394" },
  { "id": 47, "group": "9ИС-420" },
  { "id": 48, "group": "9ИС-425" },
  { "id": 49, "group": "9ИС-430" },
  { "id": 50, "group": "9СА-474" },
  { "id": 51, "group": "9МЭ-476" },
  { "id": 52, "group": "9КС-481К" },
  { "id": 53, "group": "9КС-482К" },
  { "id": 54, "group": "9КС-484К" },
  { "id": 55, "group": "9ИС-490К" },
  { "id": 56, "group": "9СА-491К" },
  { "id": 57, "group": "9ИС-495К" },
  { "id": 58, "group": "9МЭ-566" },
  { "id": 59, "group": "11СА-102З" },
  { "id": 60, "group": "9ИС-113З" },
  { "id": 61, "group": "9ИС-115З" },
  { "id": 62, "group": "9ИС-206З" },
  { "id": 63, "group": "9ИС-207З" },
  { "id": 64, "group": "11СА-212З" },
  { "id": 65, "group": "11ИС-310З" },
  { "id": 66, "group": "9СА-311З" },
  { "id": 67, "group": "9СА-401З" },
  { "id": 68, "group": "11ИС-403З" },
  { "id": 69, "group": "9СА-511З" }
];

const students = [
  {"id": 1, "group_id": 1, "student": "Иванов Иван"},
  {"id": 2, "group_id": 1, "student": "Петров Пётр"},
  {"id": 3, "group_id": 1, "student": "Сидоров Сергей"},
  {"id": 4, "group_id": 1, "student": "Кузнецов Константин"},
  {"id": 5, "group_id": 1, "student": "Волков Виктор"},
  {"id": 6, "group_id": 1, "student": "Сергеев Станислав"},
  {"id": 7, "group_id": 1, "student": "Новиков Николай"},
  {"id": 8, "group_id": 1, "student": "Морозов Михаил"},
  {"id": 9, "group_id": 1, "student": "Егоров Егор"},
  {"id": 10, "group_id": 1, "student": "Степанов Степан"},
  {"id": 11, "group_id": 2, "student": "Федоров Федор"},
  {"id": 12, "group_id": 2, "student": "Борисов Борис"},
  {"id": 13, "group_id": 2, "student": "Александров Александр"},
  {"id": 14, "group_id": 2, "student": "Андреев Андрей"},
  {"id": 15, "group_id": 2, "student": "Королев Кирилл"},
  {"id": 16, "group_id": 2, "student": "Голубев Георгий"},
  {"id": 17, "group_id": 2, "student": "Миронов Марк"},
  {"id": 18, "group_id": 2, "student": "Демидов Денис"},
  {"id": 19, "group_id": 2, "student": "Романов Руслан"},
  {"id": 20, "group_id": 2, "student": "Титов Тимофей"},
  {"id": 21, "group_id": 3, "student": "Чернова Кристина"},
  {"id": 22, "group_id": 3, "student": "Лукин Леонид"},
  {"id": 23, "group_id": 3, "student": "Зарипов Ильдар"},
  {"id": 24, "group_id": 3, "student": "Кириллов Кирилл"},
  {"id": 25, "group_id": 3, "student": "Щукин Олег"},
  {"id": 26, "group_id": 3, "student": "Денисов Дмитрий"},
  {"id": 27, "group_id": 3, "student": "Колесников Владислав"},
  {"id": 28, "group_id": 3, "student": "Быстров Артём"},
  {"id": 29, "group_id": 3, "student": "Осипова Анастасия"},
  {"id": 30, "group_id": 3, "student": "Игнатьев Илья"},
  {"id": 31, "group_id": 4, "student": "Прохоров Григорий"},
  {"id": 32, "group_id": 4, "student": "Марков Максим"},
  {"id": 33, "group_id": 4, "student": "Логинов Василий"},
  {"id": 34, "group_id": 4, "student": "Нестеров Никита"},
  {"id": 35, "group_id": 4, "student": "Старостин Владимир"},
  {"id": 36, "group_id": 4, "student": "Карпов Данила"},
  {"id": 37, "group_id": 4, "student": "Белов Евгений"},
  {"id": 38, "group_id": 4, "student": "Леонов Юрий"},
  {"id": 39, "group_id": 4, "student": "Ершов Вадим"},
  {"id": 40, "group_id": 4, "student": "Назаров Даниил"},
  {"id": 41, "group_id": 5, "student": "Белкина Дарья"},
  {"id": 42, "group_id": 5, "student": "Толмачев Игорь"},
  {"id": 43, "group_id": 5, "student": "Константинова Виктория"},
  {"id": 44, "group_id": 5, "student": "Давыдов Дмитрий"},
  {"id": 45, "group_id": 5, "student": "Малышев Алексей"},
  {"id": 46, "group_id": 5, "student": "Масленникова Полина"},
  {"id": 47, "group_id": 5, "student": "Лаврентьев Роман"},
  {"id": 48, "group_id": 5, "student": "Казаков Вячеслав"},
  {"id": 49, "group_id": 5, "student": "Сорокин Валерий"},
  {"id": 50, "group_id": 5, "student": "Медведев Михаил"},
  {"id": 51, "group_id": 6, "student": "Симонова Светлана"},
  {"id": 52, "group_id": 6, "student": "Широков Павел"},
  {"id": 53, "group_id": 6, "student": "Антипов Андрей"},
  {"id": 54, "group_id": 6, "student": "Соболева Евгения"},
  {"id": 55, "group_id": 6, "student": "Комарова Надежда"},
  {"id": 56, "group_id": 6, "student": "Рыбкин Антон"},
  {"id": 57, "group_id": 6, "student": "Цветков Михаил"},
  {"id": 58, "group_id": 6, "student": "Макаров Дмитрий"},
  {"id": 59, "group_id": 6, "student": "Беляева Анна"},
  {"id": 60, "group_id": 6, "student": "Артемьева София"},
  {"id": 61, "group_id": 7, "student": "Зотов Дмитрий"},
  {"id": 62, "group_id": 7, "student": "Соловьёв Сергей"},
  {"id": 63, "group_id": 7, "student": "Суханова Александра"},
  {"id": 64, "group_id": 7, "student": "Фролов Алексей"},
  {"id": 65, "group_id": 7, "student": "Скворцова Марина"},
  {"id": 66, "group_id": 7, "student": "Устинов Ярослав"},
  {"id": 67, "group_id": 7, "student": "Курочкин Максим"},
  {"id": 68, "group_id": 7, "student": "Сафронов Виталий"},
  {"id": 69, "group_id": 7, "student": "Лазарева Елизавета"},
  {"id": 70, "group_id": 7, "student": "Максимов Дмитрий"},
  {"id": 71, "group_id": 8, "student": "Перфильева Алина"},
  {"id": 72, "group_id": 8, "student": "Бирюков Валентин"},
  {"id": 73, "group_id": 8, "student": "Шабалина Алиса"},
  {"id": 74, "group_id": 8, "student": "Салимов Рустам"},
  {"id": 75, "group_id": 8, "student": "Шустров Олег"},
  {"id": 76, "group_id": 8, "student": "Шишкин Евгений"},
  {"id": 77, "group_id": 8, "student": "Поляков Михаил"},
  {"id": 78, "group_id": 8, "student": "Барсуков Павел"},
  {"id": 79, "group_id": 8, "student": "Филиппова Екатерина"},
  {"id": 80, "group_id": 8, "student": "Бунин Лев"},
  {"id": 81, "group_id": 9, "student": "Малашенков Сергей"},
  {"id": 82, "group_id": 9, "student": "Рябинин Алексей"},
  {"id": 83, "group_id": 9, "student": "Капустина Валерия"},
  {"id": 84, "group_id": 9, "student": "Тихонов Андрей"},
  {"id": 85, "group_id": 9, "student": "Мартынов Владислав"},
  {"id": 86, "group_id": 9, "student": "Чижова Галина"},
  {"id": 87, "group_id": 9, "student": "Некрасов Анатолий"},
  {"id": 88, "group_id": 9, "student": "Богданов Олег"},
  {"id": 89, "group_id": 9, "student": "Филатова Ольга"},
  {"id": 90, "group_id": 9, "student": "Щеглов Дмитрий"},
  {"id": 91, "group_id": 10, "student": "Галкина Вера"},
  {"id": 92, "group_id": 10, "student": "Родионов Алексей"},
  {"id": 93, "group_id": 10, "student": "Шелехов Арсений"},
  {"id": 94, "group_id": 10, "student": "Матвеева Ульяна"},
  {"id": 95, "group_id": 10, "student": "Фадеев Юрий"},
  {"id": 96, "group_id": 10, "student": "Коробов Роман"},
  {"id": 97, "group_id": 10, "student": "Русакова Лидия"},
  {"id": 98, "group_id": 10, "student": "Веселов Артем"},
  {"id": 99, "group_id": 10, "student": "Хорошилов Михаил"},
  {"id": 100, "group_id": 10, "student": "Свиридов Антон"}
];

const subjects = [
  { id: 1, subject: "Экономика отрасли"},
  { id: 2, subject: "Экономика организации"},
  { id: 3, subject: "Основы экономики"},
  { id: 4, subject: "Экономика и управление"},
  { id: 5, subject: "Перспективы развития РФ"},

  { id: 6, subject: "ТРПО"},
  { id: 7, subject: "Математическое моделирование"},
  { id: 8, subject: "Осуществление интеграция ПМ"},

  { id: 9, subject: "Эксплуатация объектов"},
  { id: 10, subject: "Практика учебная"},
  { id: 11, subject: "Обеспечение качества КС"},
  { id: 12, subject: "Операционные системы и среды"},

  { id: 13, subject: "РПМ"},
  { id: 14, subject: "Практика учебная"},
  { id: 15, subject: "Системное программирование"},
  { id: 16, subject: "Оператор ЭВМ"},

  { id: 17, subject: "Основы алгоритм. и програм."},
  { id: 18, subject: "ППО в проф. деятельности"},
  { id: 19, subject: "Инстрементальные средства РПО"},
  
  { id: 20, subject: "РПМ"},
  { id: 21, subject: "Проектир. веб-приложений"},
  { id: 22, subject: "ТР и ЗБД"},
  { id: 23, subject: "РиП графических материалов"},
  { id: 24, subject: "Основы ПиР веб-приложений"},
  { id: 25, subject: "Практика учебная"},
  { id: 26, subject: "Разработка дизайна"},
  { id: 27, subject: "Основых информационных технологий"},

  { id: 28, subject: "Финансовая грамотность"},
  { id: 29, subject: "Основы финанс. грам."},
  { id: 30, subject: "Менеджмент"},
  { id: 31, subject: "Экономика отрасли"},
  { id: 32, subject: "Основы бережливого произ."},

  { id: 33, subject: "Физическая культура"},

  { id: 34, subject: "Основы программирования в 1С"},
  { id: 35, subject: "Комплексная автоматизация"},
  { id: 36, subject: "Внедрение и поддержка КС"},
  { id: 37, subject: "Обмен данными"},
  { id: 38, subject: "Поддержка и тестирование ПМ"},
  { id: 39, subject: "ТР и ЗБД"},

  { id: 40, subject: "Иностранный язык"},
  { id: 41, subject: "Иностранный язык в проф. деят."},
];

const teachers = [
  { id: 1, teacher: "Иванов Иван Иванович" },
  { id: 2, teacher: "Петрова Анна Сергеевна" },
  { id: 3, teacher: "Смирнов Алексей Дмитриевич" },
  { id: 4, teacher: "Васильева Мария Петровна" },
  { id: 5, teacher: "Попова Елена Владимировна" },
  { id: 6, teacher: "Кузнецов Олег Николаевич" },
  { id: 7, teacher: "Волков Михаил Александрович" },
  { id: 8, teacher: "Семёнова Татьяна Юрьевна" },
  { id: 9, teacher: "Николаева Ольга Игоревна" },
  { id: 10, teacher: "Орлов Дмитрий Сергеевич" }
];

const sub_stud = [
    {"id": 1, "subject_id": 11, "group_id": 1},
    {"id": 2, "subject_id": 15, "group_id": 1},
    {"id": 5, "subject_id": 19, "group_id": 1},
    {"id": 6, "subject_id": 21, "group_id": 1},
    {"id": 7, "subject_id": 30, "group_id": 1},
    {"id": 8, "subject_id": 28, "group_id": 1},
    {"id": 9, "subject_id": 33, "group_id": 1},
    {"id": 10, "subject_id": 39, "group_id": 1}
];

const grades = [
  {
    "id": 1,
    "sub_stud_id": 4,
    "grades": [
      {
        "date": "2025-09-01",
        "students_grades": [
          {"student_id": 1, "grade": "5"},
          {"student_id": 2, "grade": "4"},
          {"student_id": 3, "grade": ""}
        ]
      },
      {
        "date": "2025-09-08",
        "students_grades": [
          {"student_id": 1, "grade": "3"},
          {"student_id": 2, "grade": "5"},
          {"student_id": 3, "grade": ""}
        ]
      },
      {
        "date": "2025-09-15",
        "students_grades": [
          {"student_id": 1, "grade": "4"},
          {"student_id": 2, "grade": ""},
          {"student_id": 3, "grade": "5"}
        ]
      },
      {
        "date": "2025-09-22",
        "students_grades": [
          {"student_id": 1, "grade": "5"},
          {"student_id": 2, "grade": "4"},
          {"student_id": 3, "grade": ""}
        ]
      },
      {
        "date": "2025-09-29",
        "students_grades": [
          {"student_id": 1, "grade": "4"},
          {"student_id": 2, "grade": "5"},
          {"student_id": 3, "grade": ""}
        ]
      },
      {
        "date": "2025-10-06",
        "students_grades": [
          {"student_id": 1, "grade": "5"},
          {"student_id": 2, "grade": ""},
          {"student_id": 3, "grade": "4"}
        ]
      },
      {
        "date": "2025-10-13",
        "students_grades": [
          {"student_id": 1, "grade": "4"},
          {"student_id": 2, "grade": "5"},
          {"student_id": 3, "grade": ""}
        ]
      },
      {
        "date": "2025-10-20",
        "students_grades": [
          {"student_id": 1, "grade": "5"},
          {"student_id": 2, "grade": "4"},
          {"student_id": 3, "grade": ""}
        ]
      },
      {
        "date": "2025-10-27",
        "students_grades": [
          {"student_id": 1, "grade": "4"},
          {"student_id": 2, "grade": "5"},
          {"student_id": 3, "grade": ""}
        ]
      },
      {
        "date": "2025-11-03",
        "students_grades": [
          {"student_id": 1, "grade": "5"},
          {"student_id": 2, "grade": ""},
          {"student_id": 3, "grade": "4"}
        ]
      },
      {
        "date": "2025-11-10",
        "students_grades": [
          {"student_id": 1, "grade": "4"},
          {"student_id": 2, "grade": "5"},
          {"student_id": 3, "grade": ""}
        ]
      },
      {
        "date": "2025-11-17",
        "students_grades": [
          {"student_id": 1, "grade": "5"},
          {"student_id": 2, "grade": "4"},
          {"student_id": 3, "grade": ""}
        ]
      },
      {
        "date": "2025-11-24",
        "students_grades": [
          {"student_id": 1, "grade": "4"},
          {"student_id": 2, "grade": "5"},
          {"student_id": 3, "grade": ""}
        ]
      },
      {
        "date": "2025-12-01",
        "students_grades": [
          {"student_id": 1, "grade": "5"},
          {"student_id": 2, "grade": ""},
          {"student_id": 3, "grade": "4"}
        ]
      },
      {
        "date": "2025-12-08",
        "students_grades": [
          {"student_id": 1, "grade": "4"},
          {"student_id": 2, "grade": "5"},
          {"student_id": 3, "grade": ""}
        ]
      }
    ]
  },
  {
    "id": 2,
    "sub_stud_id": 2,
    "grades": [
      {
        "date": "2025-09-01",
        "students_grades": [
          {"student_id": 4, "grade": "5"},
          {"student_id": 5, "grade": ""}
        ]
      },
      {
        "date": "2025-09-08",
        "students_grades": [
          {"student_id": 4, "grade": "4"},
          {"student_id": 5, "grade": "5"}
        ]
      },
      {
        "date": "2025-09-15",
        "students_grades": [
          {"student_id": 4, "grade": "5"},
          {"student_id": 5, "grade": ""}
        ]
      },
      {
        "date": "2025-09-22",
        "students_grades": [
          {"student_id": 4, "grade": "4"},
          {"student_id": 5, "grade": "5"}
        ]
      },
      {
        "date": "2025-09-29",
        "students_grades": [
          {"student_id": 4, "grade": "5"},
          {"student_id": 5, "grade": ""}
        ]
      },
      {
        "date": "2025-10-06",
        "students_grades": [
          {"student_id": 4, "grade": "4"},
          {"student_id": 5, "grade": "5"}
        ]
      },
      {
        "date": "2025-10-13",
        "students_grades": [
          {"student_id": 4, "grade": "5"},
          {"student_id": 5, "grade": ""}
        ]
      },
      {
        "date": "2025-10-20",
        "students_grades": [
          {"student_id": 4, "grade": "4"},
          {"student_id": 5, "grade": "5"}
        ]
      },
      {
        "date": "2025-10-27",
        "students_grades": [
          {"student_id": 4, "grade": "5"},
          {"student_id": 5, "grade": ""}
        ]
      },
      {
        "date": "2025-11-03",
        "students_grades": [
          {"student_id": 4, "grade": "4"},
          {"student_id": 5, "grade": "5"}
        ]
      },
      {
        "date": "2025-11-10",
        "students_grades": [
          {"student_id": 4, "grade": "5"},
          {"student_id": 5, "grade": ""}
        ]
      },
      {
        "date": "2025-11-17",
        "students_grades": [
          {"student_id": 4, "grade": "4"},
          {"student_id": 5, "grade": "5"}
        ]
      },
      {
        "date": "2025-11-24",
        "students_grades": [
          {"student_id": 4, "grade": "5"},
          {"student_id": 5, "grade": ""}
        ]
      },
      {
        "date": "2025-12-01",
        "students_grades": [
          {"student_id": 4, "grade": "4"},
          {"student_id": 5, "grade": "5"}
        ]
      },
      {
        "date": "2025-12-08",
        "students_grades": [
          {"student_id": 4, "grade": "5"},
          {"student_id": 5, "grade": ""}
        ]
      }
    ]
  },
  {
    "id": 3,
    "sub_stud_id": 3,
    "grades": [
      {
        "date": "2025-09-01",
        "students_grades": [
          {"student_id": 6, "grade": "5"},
          {"student_id": 7, "grade": "4"},
          {"student_id": 8, "grade": "3"},
          {"student_id": 9, "grade": "5"},
          {"student_id": 10, "grade": "4"},
          {"student_id": 11, "grade": "3"},
          {"student_id": 12, "grade": "5"},
          {"student_id": 13, "grade": "4"},
          {"student_id": 14, "grade": "3"},
          {"student_id": 15, "grade": "5"},
          {"student_id": 16, "grade": "4"},
          {"student_id": 17, "grade": "3"},
          {"student_id": 18, "grade": "5"},
          {"student_id": 19, "grade": "4"},
          {"student_id": 20, "grade": "3"},
          {"student_id": 21, "grade": "5"},
          {"student_id": 22, "grade": "4"},
          {"student_id": 23, "grade": "3"},
          {"student_id": 24, "grade": "5"},
          {"student_id": 25, "grade": "4"},
          {"student_id": 26, "grade": "3"},
          {"student_id": 27, "grade": "5"},
          {"student_id": 28, "grade": "4"},
          {"student_id": 29, "grade": "3"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2025-09-08",
        "students_grades": [
          {"student_id": 6, "grade": "4"},
          {"student_id": 7, "grade": "5"},
          {"student_id": 8, "grade": "4"},
          {"student_id": 9, "grade": "5"},
          {"student_id": 10, "grade": "4"},
          {"student_id": 11, "grade": "5"},
          {"student_id": 12, "grade": "4"},
          {"student_id": 13, "grade": "5"},
          {"student_id": 14, "grade": "4"},
          {"student_id": 15, "grade": "5"},
          {"student_id": 16, "grade": "4"},
          {"student_id": 17, "grade": "5"},
          {"student_id": 18, "grade": "4"},
          {"student_id": 19, "grade": "5"},
          {"student_id": 20, "grade": "4"},
          {"student_id": 21, "grade": "5"},
          {"student_id": 22, "grade": "4"},
          {"student_id": 23, "grade": "5"},
          {"student_id": 24, "grade": "4"},
          {"student_id": 25, "grade": "5"},
          {"student_id": 26, "grade": "4"},
          {"student_id": 27, "grade": "5"},
          {"student_id": 28, "grade": "4"},
          {"student_id": 29, "grade": "5"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2025-09-15",
        "students_grades": [
          {"student_id": 6, "grade": "5"},
          {"student_id": 7, "grade": "4"},
          {"student_id": 8, "grade": "5"},
          {"student_id": 9, "grade": "4"},
          {"student_id": 10, "grade": "5"},
          {"student_id": 11, "grade": "4"},
          {"student_id": 12, "grade": "5"},
          {"student_id": 13, "grade": "4"},
          {"student_id": 14, "grade": "5"},
          {"student_id": 15, "grade": "4"},
          {"student_id": 16, "grade": "5"},
          {"student_id": 17, "grade": "4"},
          {"student_id": 18, "grade": "5"},
          {"student_id": 19, "grade": "4"},
          {"student_id": 20, "grade": "5"},
          {"student_id": 21, "grade": "4"},
          {"student_id": 22, "grade": "5"},
          {"student_id": 23, "grade": "4"},
          {"student_id": 24, "grade": "5"},
          {"student_id": 25, "grade": "4"},
          {"student_id": 26, "grade": "5"},
          {"student_id": 27, "grade": "4"},
          {"student_id": 28, "grade": "5"},
          {"student_id": 29, "grade": "4"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2025-09-22",
        "students_grades": [
          {"student_id": 6, "grade": "4"},
          {"student_id": 7, "grade": "5"},
          {"student_id": 8, "grade": "4"},
          {"student_id": 9, "grade": "5"},
          {"student_id": 10, "grade": "4"},
          {"student_id": 11, "grade": "5"},
          {"student_id": 12, "grade": "4"},
          {"student_id": 13, "grade": "5"},
          {"student_id": 14, "grade": "4"},
          {"student_id": 15, "grade": "5"},
          {"student_id": 16, "grade": "4"},
          {"student_id": 17, "grade": "5"},
          {"student_id": 18, "grade": "4"},
          {"student_id": 19, "grade": "5"},
          {"student_id": 20, "grade": "4"},
          {"student_id": 21, "grade": "5"},
          {"student_id": 22, "grade": "4"},
          {"student_id": 23, "grade": "5"},
          {"student_id": 24, "grade": "4"},
          {"student_id": 25, "grade": "5"},
          {"student_id": 26, "grade": "4"},
          {"student_id": 27, "grade": "5"},
          {"student_id": 28, "grade": "4"},
          {"student_id": 29, "grade": "5"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2025-09-29",
        "students_grades": [
          {"student_id": 6, "grade": "5"},
          {"student_id": 7, "grade": "4"},
          {"student_id": 8, "grade": "5"},
          {"student_id": 9, "grade": "4"},
          {"student_id": 10, "grade": "5"},
          {"student_id": 11, "grade": "4"},
          {"student_id": 12, "grade": "5"},
          {"student_id": 13, "grade": "4"},
          {"student_id": 14, "grade": "5"},
          {"student_id": 15, "grade": "4"},
          {"student_id": 16, "grade": "5"},
          {"student_id": 17, "grade": "4"},
          {"student_id": 18, "grade": "5"},
          {"student_id": 19, "grade": "4"},
          {"student_id": 20, "grade": "5"},
          {"student_id": 21, "grade": "4"},
          {"student_id": 22, "grade": "5"},
          {"student_id": 23, "grade": "4"},
          {"student_id": 24, "grade": "5"},
          {"student_id": 25, "grade": "4"},
          {"student_id": 26, "grade": "5"},
          {"student_id": 27, "grade": "4"},
          {"student_id": 28, "grade": "5"},
          {"student_id": 29, "grade": "4"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2025-10-06",
        "students_grades": [
          {"student_id": 6, "grade": "4"},
          {"student_id": 7, "grade": "5"},
          {"student_id": 8, "grade": "4"},
          {"student_id": 9, "grade": "5"},
          {"student_id": 10, "grade": "4"},
          {"student_id": 11, "grade": "5"},
          {"student_id": 12, "grade": "4"},
          {"student_id": 13, "grade": "5"},
          {"student_id": 14, "grade": "4"},
          {"student_id": 15, "grade": "5"},
          {"student_id": 16, "grade": "4"},
          {"student_id": 17, "grade": "5"},
          {"student_id": 18, "grade": "4"},
          {"student_id": 19, "grade": "5"},
          {"student_id": 20, "grade": "4"},
          {"student_id": 21, "grade": "5"},
          {"student_id": 22, "grade": "4"},
          {"student_id": 23, "grade": "5"},
          {"student_id": 24, "grade": "4"},
          {"student_id": 25, "grade": "5"},
          {"student_id": 26, "grade": "4"},
          {"student_id": 27, "grade": "5"},
          {"student_id": 28, "grade": "4"},
          {"student_id": 29, "grade": "5"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2025-10-13",
        "students_grades": [
          {"student_id": 6, "grade": "5"},
          {"student_id": 7, "grade": "4"},
          {"student_id": 8, "grade": "5"},
          {"student_id": 9, "grade": "4"},
          {"student_id": 10, "grade": "5"},
          {"student_id": 11, "grade": "4"},
          {"student_id": 12, "grade": "5"},
          {"student_id": 13, "grade": "4"},
          {"student_id": 14, "grade": "5"},
          {"student_id": 15, "grade": "4"},
          {"student_id": 16, "grade": "5"},
          {"student_id": 17, "grade": "4"},
          {"student_id": 18, "grade": "5"},
          {"student_id": 19, "grade": "4"},
          {"student_id": 20, "grade": "5"},
          {"student_id": 21, "grade": "4"},
          {"student_id": 22, "grade": "5"},
          {"student_id": 23, "grade": "4"},
          {"student_id": 24, "grade": "5"},
          {"student_id": 25, "grade": "4"},
          {"student_id": 26, "grade": "5"},
          {"student_id": 27, "grade": "4"},
          {"student_id": 28, "grade": "5"},
          {"student_id": 29, "grade": "4"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2025-10-20",
        "students_grades": [
          {"student_id": 6, "grade": "4"},
          {"student_id": 7, "grade": "5"},
          {"student_id": 8, "grade": "4"},
          {"student_id": 9, "grade": "5"},
          {"student_id": 10, "grade": "4"},
          {"student_id": 11, "grade": "5"},
          {"student_id": 12, "grade": "4"},
          {"student_id": 13, "grade": "5"},
          {"student_id": 14, "grade": "4"},
          {"student_id": 15, "grade": "5"},
          {"student_id": 16, "grade": "4"},
          {"student_id": 17, "grade": "5"},
          {"student_id": 18, "grade": "4"},
          {"student_id": 19, "grade": "5"},
          {"student_id": 20, "grade": "4"},
          {"student_id": 21, "grade": "5"},
          {"student_id": 22, "grade": "4"},
          {"student_id": 23, "grade": "5"},
          {"student_id": 24, "grade": "4"},
          {"student_id": 25, "grade": "5"},
          {"student_id": 26, "grade": "4"},
          {"student_id": 27, "grade": "5"},
          {"student_id": 28, "grade": "4"},
          {"student_id": 29, "grade": "5"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2025-10-27",
        "students_grades": [
          {"student_id": 6, "grade": "5"},
          {"student_id": 7, "grade": "4"},
          {"student_id": 8, "grade": "5"},
          {"student_id": 9, "grade": "4"},
          {"student_id": 10, "grade": "5"},
          {"student_id": 11, "grade": "4"},
          {"student_id": 12, "grade": "5"},
          {"student_id": 13, "grade": "4"},
          {"student_id": 14, "grade": "5"},
          {"student_id": 15, "grade": "4"},
          {"student_id": 16, "grade": "5"},
          {"student_id": 17, "grade": "4"},
          {"student_id": 18, "grade": "5"},
          {"student_id": 19, "grade": "4"},
          {"student_id": 20, "grade": "5"},
          {"student_id": 21, "grade": "4"},
          {"student_id": 22, "grade": "5"},
          {"student_id": 23, "grade": "4"},
          {"student_id": 24, "grade": "5"},
          {"student_id": 25, "grade": "4"},
          {"student_id": 26, "grade": "5"},
          {"student_id": 27, "grade": "4"},
          {"student_id": 28, "grade": "5"},
          {"student_id": 29, "grade": "4"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2025-11-03",
        "students_grades": [
          {"student_id": 6, "grade": "4"},
          {"student_id": 7, "grade": "5"},
          {"student_id": 8, "grade": "4"},
          {"student_id": 9, "grade": "5"},
          {"student_id": 10, "grade": "4"},
          {"student_id": 11, "grade": "5"},
          {"student_id": 12, "grade": "4"},
          {"student_id": 13, "grade": "5"},
          {"student_id": 14, "grade": "4"},
          {"student_id": 15, "grade": "5"},
          {"student_id": 16, "grade": "4"},
          {"student_id": 17, "grade": "5"},
          {"student_id": 18, "grade": "4"},
          {"student_id": 19, "grade": "5"},
          {"student_id": 20, "grade": "4"},
          {"student_id": 21, "grade": "5"},
          {"student_id": 22, "grade": "4"},
          {"student_id": 23, "grade": "5"},
          {"student_id": 24, "grade": "4"},
          {"student_id": 25, "grade": "5"},
          {"student_id": 26, "grade": "4"},
          {"student_id": 27, "grade": "5"},
          {"student_id": 28, "grade": "4"},
          {"student_id": 29, "grade": "5"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2025-11-10",
        "students_grades": [
          {"student_id": 6, "grade": "5"},
          {"student_id": 7, "grade": "4"},
          {"student_id": 8, "grade": "5"},
          {"student_id": 9, "grade": "4"},
          {"student_id": 10, "grade": "5"},
          {"student_id": 11, "grade": "4"},
          {"student_id": 12, "grade": "5"},
          {"student_id": 13, "grade": "4"},
          {"student_id": 14, "grade": "5"},
          {"student_id": 15, "grade": "4"},
          {"student_id": 16, "grade": "5"},
          {"student_id": 17, "grade": "4"},
          {"student_id": 18, "grade": "5"},
          {"student_id": 19, "grade": "4"},
          {"student_id": 20, "grade": "5"},
          {"student_id": 21, "grade": "4"},
          {"student_id": 22, "grade": "5"},
          {"student_id": 23, "grade": "4"},
          {"student_id": 24, "grade": "5"},
          {"student_id": 25, "grade": "4"},
          {"student_id": 26, "grade": "5"},
          {"student_id": 27, "grade": "4"},
          {"student_id": 28, "grade": "5"},
          {"student_id": 29, "grade": "4"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2025-11-17",
        "students_grades": [
          {"student_id": 6, "grade": "4"},
          {"student_id": 7, "grade": "5"},
          {"student_id": 8, "grade": "4"},
          {"student_id": 9, "grade": "5"},
          {"student_id": 10, "grade": "4"},
          {"student_id": 11, "grade": "5"},
          {"student_id": 12, "grade": "4"},
          {"student_id": 13, "grade": "5"},
          {"student_id": 14, "grade": "4"},
          {"student_id": 15, "grade": "5"},
          {"student_id": 16, "grade": "4"},
          {"student_id": 17, "grade": "5"},
          {"student_id": 18, "grade": "4"},
          {"student_id": 19, "grade": "5"},
          {"student_id": 20, "grade": "4"},
          {"student_id": 21, "grade": "5"},
          {"student_id": 22, "grade": "4"},
          {"student_id": 23, "grade": "5"},
          {"student_id": 24, "grade": "4"},
          {"student_id": 25, "grade": "5"},
          {"student_id": 26, "grade": "4"},
          {"student_id": 27, "grade": "5"},
          {"student_id": 28, "grade": "4"},
          {"student_id": 29, "grade": "5"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2025-11-24",
        "students_grades": [
          {"student_id": 6, "grade": "5"},
          {"student_id": 7, "grade": "4"},
          {"student_id": 8, "grade": "5"},
          {"student_id": 9, "grade": "4"},
          {"student_id": 10, "grade": "5"},
          {"student_id": 11, "grade": "4"},
          {"student_id": 12, "grade": "5"},
          {"student_id": 13, "grade": "4"},
          {"student_id": 14, "grade": "5"},
          {"student_id": 15, "grade": "4"},
          {"student_id": 16, "grade": "5"},
          {"student_id": 17, "grade": "4"},
          {"student_id": 18, "grade": "5"},
          {"student_id": 19, "grade": "4"},
          {"student_id": 20, "grade": "5"},
          {"student_id": 21, "grade": "4"},
          {"student_id": 22, "grade": "5"},
          {"student_id": 23, "grade": "4"},
          {"student_id": 24, "grade": "5"},
          {"student_id": 25, "grade": "4"},
          {"student_id": 26, "grade": "5"},
          {"student_id": 27, "grade": "4"},
          {"student_id": 28, "grade": "5"},
          {"student_id": 29, "grade": "4"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2025-12-01",
        "students_grades": [
          {"student_id": 6, "grade": "4"},
          {"student_id": 7, "grade": "5"},
          {"student_id": 8, "grade": "4"},
          {"student_id": 9, "grade": "5"},
          {"student_id": 10, "grade": "4"},
          {"student_id": 11, "grade": "5"},
          {"student_id": 12, "grade": "4"},
          {"student_id": 13, "grade": "5"},
          {"student_id": 14, "grade": "4"},
          {"student_id": 15, "grade": "5"},
          {"student_id": 16, "grade": "4"},
          {"student_id": 17, "grade": "5"},
          {"student_id": 18, "grade": "4"},
          {"student_id": 19, "grade": "5"},
          {"student_id": 20, "grade": "4"},
          {"student_id": 21, "grade": "5"},
          {"student_id": 22, "grade": "4"},
          {"student_id": 23, "grade": "5"},
          {"student_id": 24, "grade": "4"},
          {"student_id": 25, "grade": "5"},
          {"student_id": 26, "grade": "4"},
          {"student_id": 27, "grade": "5"},
          {"student_id": 28, "grade": "4"},
          {"student_id": 29, "grade": "5"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2025-12-08",
        "students_grades": [
          {"student_id": 6, "grade": "5"},
          {"student_id": 7, "grade": "4"},
          {"student_id": 8, "grade": "5"},
          {"student_id": 9, "grade": "4"},
          {"student_id": 10, "grade": "5"},
          {"student_id": 11, "grade": "4"},
          {"student_id": 12, "grade": "5"},
          {"student_id": 13, "grade": "4"},
          {"student_id": 14, "grade": "5"},
          {"student_id": 15, "grade": "4"},
          {"student_id": 16, "grade": "5"},
          {"student_id": 17, "grade": "4"},
          {"student_id": 18, "grade": "5"},
          {"student_id": 19, "grade": "4"},
          {"student_id": 20, "grade": "5"},
          {"student_id": 21, "grade": "4"},
          {"student_id": 22, "grade": "5"},
          {"student_id": 23, "grade": "4"},
          {"student_id": 24, "grade": "5"},
          {"student_id": 25, "grade": "4"},
          {"student_id": 26, "grade": "5"},
          {"student_id": 27, "grade": "4"},
          {"student_id": 28, "grade": "5"},
          {"student_id": 29, "grade": "4"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2025-12-15",
        "students_grades": [
          {"student_id": 6, "grade": "4"},
          {"student_id": 7, "grade": "5"},
          {"student_id": 8, "grade": "4"},
          {"student_id": 9, "grade": "5"},
          {"student_id": 10, "grade": "4"},
          {"student_id": 11, "grade": "5"},
          {"student_id": 12, "grade": "4"},
          {"student_id": 13, "grade": "5"},
          {"student_id": 14, "grade": "4"},
          {"student_id": 15, "grade": "5"},
          {"student_id": 16, "grade": "4"},
          {"student_id": 17, "grade": "5"},
          {"student_id": 18, "grade": "4"},
          {"student_id": 19, "grade": "5"},
          {"student_id": 20, "grade": "4"},
          {"student_id": 21, "grade": "5"},
          {"student_id": 22, "grade": "4"},
          {"student_id": 23, "grade": "5"},
          {"student_id": 24, "grade": "4"},
          {"student_id": 25, "grade": "5"},
          {"student_id": 26, "grade": "4"},
          {"student_id": 27, "grade": "5"},
          {"student_id": 28, "grade": "4"},
          {"student_id": 29, "grade": "5"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2026-01-05",
        "students_grades": [
          {"student_id": 6, "grade": "5"},
          {"student_id": 7, "grade": "4"},
          {"student_id": 8, "grade": "5"},
          {"student_id": 9, "grade": "4"},
          {"student_id": 10, "grade": "5"},
          {"student_id": 11, "grade": "4"},
          {"student_id": 12, "grade": "5"},
          {"student_id": 13, "grade": "4"},
          {"student_id": 14, "grade": "5"},
          {"student_id": 15, "grade": "4"},
          {"student_id": 16, "grade": "5"},
          {"student_id": 17, "grade": "4"},
          {"student_id": 18, "grade": "5"},
          {"student_id": 19, "grade": "4"},
          {"student_id": 20, "grade": "5"},
          {"student_id": 21, "grade": "4"},
          {"student_id": 22, "grade": "5"},
          {"student_id": 23, "grade": "4"},
          {"student_id": 24, "grade": "5"},
          {"student_id": 25, "grade": "4"},
          {"student_id": 26, "grade": "5"},
          {"student_id": 27, "grade": "4"},
          {"student_id": 28, "grade": "5"},
          {"student_id": 29, "grade": "4"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2026-01-12",
        "students_grades": [
          {"student_id": 6, "grade": "4"},
          {"student_id": 7, "grade": "5"},
          {"student_id": 8, "grade": "4"},
          {"student_id": 9, "grade": "5"},
          {"student_id": 10, "grade": "4"},
          {"student_id": 11, "grade": "5"},
          {"student_id": 12, "grade": "4"},
          {"student_id": 13, "grade": "5"},
          {"student_id": 14, "grade": "4"},
          {"student_id": 15, "grade": "5"},
          {"student_id": 16, "grade": "4"},
          {"student_id": 17, "grade": "5"},
          {"student_id": 18, "grade": "4"},
          {"student_id": 19, "grade": "5"},
          {"student_id": 20, "grade": "4"},
          {"student_id": 21, "grade": "5"},
          {"student_id": 22, "grade": "4"},
          {"student_id": 23, "grade": "5"},
          {"student_id": 24, "grade": "4"},
          {"student_id": 25, "grade": "5"},
          {"student_id": 26, "grade": "4"},
          {"student_id": 27, "grade": "5"},
          {"student_id": 28, "grade": "4"},
          {"student_id": 29, "grade": "5"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2026-01-19",
        "students_grades": [
          {"student_id": 6, "grade": "5"},
          {"student_id": 7, "grade": "4"},
          {"student_id": 8, "grade": "5"},
          {"student_id": 9, "grade": "4"},
          {"student_id": 10, "grade": "5"},
          {"student_id": 11, "grade": "4"},
          {"student_id": 12, "grade": "5"},
          {"student_id": 13, "grade": "4"},
          {"student_id": 14, "grade": "5"},
          {"student_id": 15, "grade": "4"},
          {"student_id": 16, "grade": "5"},
          {"student_id": 17, "grade": "4"},
          {"student_id": 18, "grade": "5"},
          {"student_id": 19, "grade": "4"},
          {"student_id": 20, "grade": "5"},
          {"student_id": 21, "grade": "4"},
          {"student_id": 22, "grade": "5"},
          {"student_id": 23, "grade": "4"},
          {"student_id": 24, "grade": "5"},
          {"student_id": 25, "grade": "4"},
          {"student_id": 26, "grade": "5"},
          {"student_id": 27, "grade": "4"},
          {"student_id": 28, "grade": "5"},
          {"student_id": 29, "grade": "4"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2026-01-26",
        "students_grades": [
          {"student_id": 6, "grade": "4"},
          {"student_id": 7, "grade": "5"},
          {"student_id": 8, "grade": "4"},
          {"student_id": 9, "grade": "5"},
          {"student_id": 10, "grade": "4"},
          {"student_id": 11, "grade": "5"},
          {"student_id": 12, "grade": "4"},
          {"student_id": 13, "grade": "5"},
          {"student_id": 14, "grade": "4"},
          {"student_id": 15, "grade": "5"},
          {"student_id": 16, "grade": "4"},
          {"student_id": 17, "grade": "5"},
          {"student_id": 18, "grade": "4"},
          {"student_id": 19, "grade": "5"},
          {"student_id": 20, "grade": "4"},
          {"student_id": 21, "grade": "5"},
          {"student_id": 22, "grade": "4"},
          {"student_id": 23, "grade": "5"},
          {"student_id": 24, "grade": "4"},
          {"student_id": 25, "grade": "5"},
          {"student_id": 26, "grade": "4"},
          {"student_id": 27, "grade": "5"},
          {"student_id": 28, "grade": "4"},
          {"student_id": 29, "grade": "5"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2026-02-02",
        "students_grades": [
          {"student_id": 6, "grade": "5"},
          {"student_id": 7, "grade": "4"},
          {"student_id": 8, "grade": "5"},
          {"student_id": 9, "grade": "4"},
          {"student_id": 10, "grade": "5"},
          {"student_id": 11, "grade": "4"},
          {"student_id": 12, "grade": "5"},
          {"student_id": 13, "grade": "4"},
          {"student_id": 14, "grade": "5"},
          {"student_id": 15, "grade": "4"},
          {"student_id": 16, "grade": "5"},
          {"student_id": 17, "grade": "4"},
          {"student_id": 18, "grade": "5"},
          {"student_id": 19, "grade": "4"},
          {"student_id": 20, "grade": "5"},
          {"student_id": 21, "grade": "4"},
          {"student_id": 22, "grade": "5"},
          {"student_id": 23, "grade": "4"},
          {"student_id": 24, "grade": "5"},
          {"student_id": 25, "grade": "4"},
          {"student_id": 26, "grade": "5"},
          {"student_id": 27, "grade": "4"},
          {"student_id": 28, "grade": "5"},
          {"student_id": 29, "grade": "4"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2026-02-09",
        "students_grades": [
          {"student_id": 6, "grade": "4"},
          {"student_id": 7, "grade": "5"},
          {"student_id": 8, "grade": "4"},
          {"student_id": 9, "grade": "5"},
          {"student_id": 10, "grade": "4"},
          {"student_id": 11, "grade": "5"},
          {"student_id": 12, "grade": "4"},
          {"student_id": 13, "grade": "5"},
          {"student_id": 14, "grade": "4"},
          {"student_id": 15, "grade": "5"},
          {"student_id": 16, "grade": "4"},
          {"student_id": 17, "grade": "5"},
          {"student_id": 18, "grade": "4"},
          {"student_id": 19, "grade": "5"},
          {"student_id": 20, "grade": "4"},
          {"student_id": 21, "grade": "5"},
          {"student_id": 22, "grade": "4"},
          {"student_id": 23, "grade": "5"},
          {"student_id": 24, "grade": "4"},
          {"student_id": 25, "grade": "5"},
          {"student_id": 26, "grade": "4"},
          {"student_id": 27, "grade": "5"},
          {"student_id": 28, "grade": "4"},
          {"student_id": 29, "grade": "5"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2026-02-16",
        "students_grades": [
          {"student_id": 6, "grade": "5"},
          {"student_id": 7, "grade": "4"},
          {"student_id": 8, "grade": "5"},
          {"student_id": 9, "grade": "4"},
          {"student_id": 10, "grade": "5"},
          {"student_id": 11, "grade": "4"},
          {"student_id": 12, "grade": "5"},
          {"student_id": 13, "grade": "4"},
          {"student_id": 14, "grade": "5"},
          {"student_id": 15, "grade": "4"},
          {"student_id": 16, "grade": "5"},
          {"student_id": 17, "grade": "4"},
          {"student_id": 18, "grade": "5"},
          {"student_id": 19, "grade": "4"},
          {"student_id": 20, "grade": "5"},
          {"student_id": 21, "grade": "4"},
          {"student_id": 22, "grade": "5"},
          {"student_id": 23, "grade": "4"},
          {"student_id": 24, "grade": "5"},
          {"student_id": 25, "grade": "4"},
          {"student_id": 26, "grade": "5"},
          {"student_id": 27, "grade": "4"},
          {"student_id": 28, "grade": "5"},
          {"student_id": 29, "grade": "4"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2026-02-23",
        "students_grades": [
          {"student_id": 6, "grade": "4"},
          {"student_id": 7, "grade": "5"},
          {"student_id": 8, "grade": "4"},
          {"student_id": 9, "grade": "5"},
          {"student_id": 10, "grade": "4"},
          {"student_id": 11, "grade": "5"},
          {"student_id": 12, "grade": "4"},
          {"student_id": 13, "grade": "5"},
          {"student_id": 14, "grade": "4"},
          {"student_id": 15, "grade": "5"},
          {"student_id": 16, "grade": "4"},
          {"student_id": 17, "grade": "5"},
          {"student_id": 18, "grade": "4"},
          {"student_id": 19, "grade": "5"},
          {"student_id": 20, "grade": "4"},
          {"student_id": 21, "grade": "5"},
          {"student_id": 22, "grade": "4"},
          {"student_id": 23, "grade": "5"},
          {"student_id": 24, "grade": "4"},
          {"student_id": 25, "grade": "5"},
          {"student_id": 26, "grade": "4"},
          {"student_id": 27, "grade": "5"},
          {"student_id": 28, "grade": "4"},
          {"student_id": 29, "grade": "5"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2026-03-02",
        "students_grades": [
          {"student_id": 6, "grade": "5"},
          {"student_id": 7, "grade": "4"},
          {"student_id": 8, "grade": "5"},
          {"student_id": 9, "grade": "4"},
          {"student_id": 10, "grade": "5"},
          {"student_id": 11, "grade": "4"},
          {"student_id": 12, "grade": "5"},
          {"student_id": 13, "grade": "4"},
          {"student_id": 14, "grade": "5"},
          {"student_id": 15, "grade": "4"},
          {"student_id": 16, "grade": "5"},
          {"student_id": 17, "grade": "4"},
          {"student_id": 18, "grade": "5"},
          {"student_id": 19, "grade": "4"},
          {"student_id": 20, "grade": "5"},
          {"student_id": 21, "grade": "4"},
          {"student_id": 22, "grade": "5"},
          {"student_id": 23, "grade": "4"},
          {"student_id": 24, "grade": "5"},
          {"student_id": 25, "grade": "4"},
          {"student_id": 26, "grade": "5"},
          {"student_id": 27, "grade": "4"},
          {"student_id": 28, "grade": "5"},
          {"student_id": 29, "grade": "4"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2026-03-09",
        "students_grades": [
          {"student_id": 6, "grade": "4"},
          {"student_id": 7, "grade": "5"},
          {"student_id": 8, "grade": "4"},
          {"student_id": 9, "grade": "5"},
          {"student_id": 10, "grade": "4"},
          {"student_id": 11, "grade": "5"},
          {"student_id": 12, "grade": "4"},
          {"student_id": 13, "grade": "5"},
          {"student_id": 14, "grade": "4"},
          {"student_id": 15, "grade": "5"},
          {"student_id": 16, "grade": "4"},
          {"student_id": 17, "grade": "5"},
          {"student_id": 18, "grade": "4"},
          {"student_id": 19, "grade": "5"},
          {"student_id": 20, "grade": "4"},
          {"student_id": 21, "grade": "5"},
          {"student_id": 22, "grade": "4"},
          {"student_id": 23, "grade": "5"},
          {"student_id": 24, "grade": "4"},
          {"student_id": 25, "grade": "5"},
          {"student_id": 26, "grade": "4"},
          {"student_id": 27, "grade": "5"},
          {"student_id": 28, "grade": "4"},
          {"student_id": 29, "grade": "5"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2026-03-16",
        "students_grades": [
          {"student_id": 6, "grade": "5"},
          {"student_id": 7, "grade": "4"},
          {"student_id": 8, "grade": "5"},
          {"student_id": 9, "grade": "4"},
          {"student_id": 10, "grade": "5"},
          {"student_id": 11, "grade": "4"},
          {"student_id": 12, "grade": "5"},
          {"student_id": 13, "grade": "4"},
          {"student_id": 14, "grade": "5"},
          {"student_id": 15, "grade": "4"},
          {"student_id": 16, "grade": "5"},
          {"student_id": 17, "grade": "4"},
          {"student_id": 18, "grade": "5"},
          {"student_id": 19, "grade": "4"},
          {"student_id": 20, "grade": "5"},
          {"student_id": 21, "grade": "4"},
          {"student_id": 22, "grade": "5"},
          {"student_id": 23, "grade": "4"},
          {"student_id": 24, "grade": "5"},
          {"student_id": 25, "grade": "4"},
          {"student_id": 26, "grade": "5"},
          {"student_id": 27, "grade": "4"},
          {"student_id": 28, "grade": "5"},
          {"student_id": 29, "grade": "4"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2026-03-23",
        "students_grades": [
          {"student_id": 6, "grade": "4"},
          {"student_id": 7, "grade": "5"},
          {"student_id": 8, "grade": "4"},
          {"student_id": 9, "grade": "5"},
          {"student_id": 10, "grade": "4"},
          {"student_id": 11, "grade": "5"},
          {"student_id": 12, "grade": "4"},
          {"student_id": 13, "grade": "5"},
          {"student_id": 14, "grade": "4"},
          {"student_id": 15, "grade": "5"},
          {"student_id": 16, "grade": "4"},
          {"student_id": 17, "grade": "5"},
          {"student_id": 18, "grade": "4"},
          {"student_id": 19, "grade": "5"},
          {"student_id": 20, "grade": "4"},
          {"student_id": 21, "grade": "5"},
          {"student_id": 22, "grade": "4"},
          {"student_id": 23, "grade": "5"},
          {"student_id": 24, "grade": "4"},
          {"student_id": 25, "grade": "5"},
          {"student_id": 26, "grade": "4"},
          {"student_id": 27, "grade": "5"},
          {"student_id": 28, "grade": "4"},
          {"student_id": 29, "grade": "5"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2026-03-30",
        "students_grades": [
          {"student_id": 6, "grade": "5"},
          {"student_id": 7, "grade": "4"},
          {"student_id": 8, "grade": "5"},
          {"student_id": 9, "grade": "4"},
          {"student_id": 10, "grade": "5"},
          {"student_id": 11, "grade": "4"},
          {"student_id": 12, "grade": "5"},
          {"student_id": 13, "grade": "4"},
          {"student_id": 14, "grade": "5"},
          {"student_id": 15, "grade": "4"},
          {"student_id": 16, "grade": "5"},
          {"student_id": 17, "grade": "4"},
          {"student_id": 18, "grade": "5"},
          {"student_id": 19, "grade": "4"},
          {"student_id": 20, "grade": "5"},
          {"student_id": 21, "grade": "4"},
          {"student_id": 22, "grade": "5"},
          {"student_id": 23, "grade": "4"},
          {"student_id": 24, "grade": "5"},
          {"student_id": 25, "grade": "4"},
          {"student_id": 26, "grade": "5"},
          {"student_id": 27, "grade": "4"},
          {"student_id": 28, "grade": "5"},
          {"student_id": 29, "grade": "4"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2026-04-06",
        "students_grades": [
          {"student_id": 6, "grade": "4"},
          {"student_id": 7, "grade": "5"},
          {"student_id": 8, "grade": "4"},
          {"student_id": 9, "grade": "5"},
          {"student_id": 10, "grade": "4"},
          {"student_id": 11, "grade": "5"},
          {"student_id": 12, "grade": "4"},
          {"student_id": 13, "grade": "5"},
          {"student_id": 14, "grade": "4"},
          {"student_id": 15, "grade": "5"},
          {"student_id": 16, "grade": "4"},
          {"student_id": 17, "grade": "5"},
          {"student_id": 18, "grade": "4"},
          {"student_id": 19, "grade": "5"},
          {"student_id": 20, "grade": "4"},
          {"student_id": 21, "grade": "5"},
          {"student_id": 22, "grade": "4"},
          {"student_id": 23, "grade": "5"},
          {"student_id": 24, "grade": "4"},
          {"student_id": 25, "grade": "5"},
          {"student_id": 26, "grade": "4"},
          {"student_id": 27, "grade": "5"},
          {"student_id": 28, "grade": "4"},
          {"student_id": 29, "grade": "5"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2026-04-13",
        "students_grades": [
          {"student_id": 6, "grade": "5"},
          {"student_id": 7, "grade": "4"},
          {"student_id": 8, "grade": "5"},
          {"student_id": 9, "grade": "4"},
          {"student_id": 10, "grade": "5"},
          {"student_id": 11, "grade": "4"},
          {"student_id": 12, "grade": "5"},
          {"student_id": 13, "grade": "4"},
          {"student_id": 14, "grade": "5"},
          {"student_id": 15, "grade": "4"},
          {"student_id": 16, "grade": "5"},
          {"student_id": 17, "grade": "4"},
          {"student_id": 18, "grade": "5"},
          {"student_id": 19, "grade": "4"},
          {"student_id": 20, "grade": "5"},
          {"student_id": 21, "grade": "4"},
          {"student_id": 22, "grade": "5"},
          {"student_id": 23, "grade": "4"},
          {"student_id": 24, "grade": "5"},
          {"student_id": 25, "grade": "4"},
          {"student_id": 26, "grade": "5"},
          {"student_id": 27, "grade": "4"},
          {"student_id": 28, "grade": "5"},
          {"student_id": 29, "grade": "4"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2026-04-20",
        "students_grades": [
          {"student_id": 6, "grade": "4"},
          {"student_id": 7, "grade": "5"},
          {"student_id": 8, "grade": "4"},
          {"student_id": 9, "grade": "5"},
          {"student_id": 10, "grade": "4"},
          {"student_id": 11, "grade": "5"},
          {"student_id": 12, "grade": "4"},
          {"student_id": 13, "grade": "5"},
          {"student_id": 14, "grade": "4"},
          {"student_id": 15, "grade": "5"},
          {"student_id": 16, "grade": "4"},
          {"student_id": 17, "grade": "5"},
          {"student_id": 18, "grade": "4"},
          {"student_id": 19, "grade": "5"},
          {"student_id": 20, "grade": "4"},
          {"student_id": 21, "grade": "5"},
          {"student_id": 22, "grade": "4"},
          {"student_id": 23, "grade": "5"},
          {"student_id": 24, "grade": "4"},
          {"student_id": 25, "grade": "5"},
          {"student_id": 26, "grade": "4"},
          {"student_id": 27, "grade": "5"},
          {"student_id": 28, "grade": "4"},
          {"student_id": 29, "grade": "5"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2026-04-27",
        "students_grades": [
          {"student_id": 6, "grade": "5"},
          {"student_id": 7, "grade": "4"},
          {"student_id": 8, "grade": "5"},
          {"student_id": 9, "grade": "4"},
          {"student_id": 10, "grade": "5"},
          {"student_id": 11, "grade": "4"},
          {"student_id": 12, "grade": "5"},
          {"student_id": 13, "grade": "4"},
          {"student_id": 14, "grade": "5"},
          {"student_id": 15, "grade": "4"},
          {"student_id": 16, "grade": "5"},
          {"student_id": 17, "grade": "4"},
          {"student_id": 18, "grade": "5"},
          {"student_id": 19, "grade": "4"},
          {"student_id": 20, "grade": "5"},
          {"student_id": 21, "grade": "4"},
          {"student_id": 22, "grade": "5"},
          {"student_id": 23, "grade": "4"},
          {"student_id": 24, "grade": "5"},
          {"student_id": 25, "grade": "4"},
          {"student_id": 26, "grade": "5"},
          {"student_id": 27, "grade": "4"},
          {"student_id": 28, "grade": "5"},
          {"student_id": 29, "grade": "4"},
          {"student_id": 30, "grade": ""}
        ]
      },
      {
        "date": "2026-05-04",
        "students_grades": [
          {"student_id": 6, "grade": "4"},
          {"student_id": 7, "grade": "5"},
          {"student_id": 8, "grade": "4"},
          {"student_id": 9, "grade": "5"},
          {"student_id": 10, "grade": "4"},
          {"student_id": 11, "grade": "5"},
          {"student_id": 12, "grade": "4"},
          {"student_id": 13, "grade": "5"},
          {"student_id": 14, "grade": "4"},
          {"student_id": 15, "grade": "5"},
          {"student_id": 16, "grade": "4"},
          {"student_id": 17, "grade": "5"},
          {"student_id": 18, "grade": "4"},
          {"student_id": 19, "grade": "5"},
          {"student_id": 20, "grade": "4"},
          {"student_id": 21, "grade": "5"},
          {"student_id": 22, "grade": "4"},
          {"student_id": 23, "grade": "5"},
          {"student_id": 24, "grade": "4"},
          {"student_id": 25, "grade": "5"},
          {"student_id": 26, "grade": "4"},
          {"student_id": 27, "grade": "5"},
          {"student_id": 28, "grade": "4"},
          {"student_id": 29, "grade": "5"},
          {"student_id": 30, "grade": ""}
        ]
      }
    ]
  }
];

function setLocalStorage(storage, json) {
  localStorage.setItem(`${storage}`, JSON.stringify(json));
}

function getLocalStorage(storage) {
  const data = JSON.parse(localStorage.getItem(`${storage}`)) || [];
  return data;
}

function saveLocalStorage(storage, json) {
  const data = getLocalStorage(storage);
  data.push(json);
  setLocalStorage(storage, data);
}

function loadStorage() {
  localStorage.setItem("groups", JSON.stringify(groups));
  localStorage.setItem("subjects", JSON.stringify(subjects));
  localStorage.setItem("teachers", JSON.stringify(teachers));
  localStorage.setItem("sub_stud", JSON.stringify(sub_stud));
}

// loadStorage();

// loadStorage();

// let sub_select = document.querySelector("#subject");
// let group_select = document.querySelector("#group");

// sub_select.innerHTML = `<option value="-" selected disabled>Выберите предмет</option>`;
// group_select.innerHTML = `<option value="-" selected disabled>Выберите группу</option>`;

// const teacher = localStorage.getItem("teacher");
// const teacher_sub = subjects.filter(s => s.teacher_id == teacher);

// for (let ts of teacher_sub) {
//     console.log(ts);
//     let option = document.createElement("option");
//     option.value = ts.id;
//     option.textContent = ts.subject;
//     sub_select.appendChild(option);
// }

// sub_select.addEventListener("change", () => {
//     group_select.innerHTML = `<option value="-" selected disabled>Выберите группу</option>`;

//     console.log(sub_select.value);
//     const sub = sub_stud.filter(ss => ss.subject_id == sub_select.value);
//     for (let s of sub) {
//         let option = document.createElement("option");
//         option.value = s.group_id;
//         option.textContent = groups.find(g => g.id == s.group_id).group;
//         group_select.appendChild(option);
//     }
// });

// group_select.addEventListener("change", () => {
//     const _students = students.filter(st => st.group_id == group_select.value);
//     let table = document.querySelector("#st_tbody");
//     let index = 1;
//     table.innerHTML = "";
//     for (let st of _students) {
//         table.innerHTML += `<tr>
//                                 <td>${index}. </td>
//                                 <td>${st.student}</td>
//                                 <td><input type="text"></td>
//                             </tr>`;
//         index++;
//     }
// });

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




function setGroupsList(filter) {
    let group_list = document.querySelector("#groups-list");
    group_list.innerHTML = "";
    const teacher = localStorage.getItem("teacher");
    const subject = subjects.filter(s => s.teacher_id == teacher);
    let _subs = [];

    for (let s of subject) {
        const _s = sub_stud.filter(st => st.subject_id == s.id);
        for (let gr of _s) {
            if (!_subs.includes(gr.group_id)) {
                _subs.push(gr.group_id);
            }
        }
    }

    for (let group of _subs) {
        let btn = document.createElement("button");
        const _group = groups.find(g => g.id == group);
        let filteredGroup = _group.group.trim().toLowerCase().includes(filter.trim().toLowerCase());
        if (filteredGroup) {
            btn.textContent = _group.group;
            btn.addEventListener("click", () => {
                window.location.href = `/src/pages/?group_id=${_group.id}`;
            });
            group_list.appendChild(btn);
        }
    }
}

function setJournalsList(filter) {
    let journal_list = document.querySelector("#journal-list");
    journal_list.innerHTML = "";
    const teacher = localStorage.getItem("teacher");
    const subject = subjects.filter(s => s.teacher_id == teacher);
    let _subs = [];

    for (let s of subject) {
        const _s = sub_stud.filter(st => st.subject_id == s.id);
        for (let gr of _s) {
            _subs.push(gr);
        }
    }

    for (let group of _subs) {
        let btn = document.createElement("button");

        const _subject = subjects.find(s => s.id == group.subject_id);
        const _group = groups.find(g => g.id == group.group_id);

        let filteredGroup = _group.group.trim().toLowerCase().includes(filter.trim().toLowerCase());
        let filteredSubject = _subject.subject.trim().toLowerCase().includes(filter.trim().toLowerCase());
        if (filteredGroup || filteredSubject) {
            btn.textContent = `🕮 ${_subject.subject} ${_group.group}`;
            btn.addEventListener("click", () => {
                window.location.href = `/src/pages/?group_id=${_group.id}&subject_id=${_subject.id}`;
            });
            journal_list.appendChild(btn);
        }
    }
}

setGroupsList("");
setJournalsList("");