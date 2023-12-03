// 1. Создайте функцию-конструктор `Student(name, gender, age)` и 
// с помощью оператора `new` несколько экземпляров объектов (студентов). 
// Все аргументы функции-конструктора сохраните в соответствующие свойства 
// и добавьте свойство `marks` со значением пустого массива. 
// Позже в этот массив будут добавляться оценки.

function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let Oleg = new Student('Oleg', 'male', 23);
let Olga = new Student('Olga', 'female', 21);
let Egor = new Student('Egor', 'male', 25);

// 2. Создайте доступный для всех экземпляров `student` метод `setSubject(subjectName)`,
//  который при вызове будет устанавливать поле предмет `subject`
//   экземпляра в `subjectName`. Для этого добавьте в свойство `Student.prototype`
//    функции-конструктора функцию `setSubject`.

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

//3. Создайте метод `addMarks(...marksToAdd)` по аналогии с п. 2, 
// который при вызове будет добавлять студенту сразу несколько оценок. 
// Перед добавлением оценок добавьте проверку существования свойства `marks`, 
// в котором хранятся оценки. Если пользователь отчислен, то у него 
// не будет массива оценок, а, значит, и добавление будет невозможным.
// **Подсказка**: так как количество добавляемых оценок неизвестно, используйте rest-параметр.

Student.prototype.addMarks = function (...marks) {
    if ('marks' in this) {
        this.marks.push(...marks);
    }
}

// 4. Создайте метод `getAverage()` по аналогии с п. 2, который при вызове 
// будет возвращать среднее арифметическое оценок студента. 
// Добавьте проверку наличия оценок у студента. 
// Если свойства `marks` не существует или оно пустое, сразу возвращайте ноль.

Student.prototype.getAverage = function () {
    if (!this.hasOwnProperty('marks') || this.marks.length === 0) {
        return 0;
    } else {
        let arr = this.marks;
		let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
		return sum / arr.length;
    }
}

//5. Создайте метод `exclude(reason)` по аналогии с п. 2, который при вызове
//  будет исключать студента из учебного процесса и устанавливать причину исключения. 
//  Для этого надо удалить свойства `subject` и `marks` и 
//  добавить свойство `excluded` со значением `reason`.

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
