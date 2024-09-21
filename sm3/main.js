let name = prompt('Как тебя зовут?')
alert(`Тебя зовут ${name}`);

let age = prompt('Сколько тебе лет?', 0);
if (age < 20) {
  alert('Тебе меньше 20')
} else {
  for (let i = 0; i < 5; i++) {
    alert("привет")
  }
}

let jsk = confirm("Хочешь учить js");
if (jsk) {
  alert("Супер!")
} else {
  alert("НЕ СУПЕР")
}

// То, что прошли на паре

// Массив объектов
const people = [
  { name: 'John', surname: 'Doe', age: 20, walk: () => { console.log('walking now') } },
  { name: 'Katya', surname: 'Vasina', age: 21 },
  { name: 'Hector', surname: 'Vasin', age: 21 },
  { name: 'Misha', surname: 'Valuev', age: 19 },
];

// Вывод каждого объекта
people.map((item) => {
  console.log("Имя: ", item.name);
  console.log("Фамилия: ", item.surname);
  console.log("Возраст: ", item.age);
  // Проверка на то, есть ли метод walk у итерируемого на данного объекта
  if (item.walk)
    item.walk();
});