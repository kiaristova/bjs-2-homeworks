/* 1. Создайте базовый класс `PrintEditionItem` со свойствами/
Конструктор класса должен принимать название (`name`), 
дату выпуска (`releaseDate`) и количество страниц (`pagesCount`)
 в качестве аргумента. Состояние (`state`) по умолчанию 
 должно быть `100`, тип `type` пока должен быть равен `null`. */

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

 /* 2. Испорченное издание можно подклеить и улучшить его состояние.
 Создайте метод `fix()`, увеличивающий `state` в полтора раза. 
 Метод не должен принимать аргументы.
 
3. Нельзя улучшить новое издание, также бесполезно подклеивать полностью уничтоженное. 
 Чтобы лучше контролировать состояние книг, создайте «сеттер» для свойства `state`, 
 принимающий в качестве аргумента новое состояние печатного издания (число).

Если новое состояние меньше `0`, «сеттер» должен записать в свойство `state` значение `0`. 
Если новое состояние больше `100`, должно быть записано значение `100`. 
В остальных случаях в свойство `state` должно быть записано переданное в «сеттер» значение.

4. Создайте «геттер», который позволит читать значение свойства `state`.*/

    fix() {
        this.state = this.state * 1.5;
    }
    // newState = this._state;
    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100){
            this._state = 100;
        } else {
            this._state = newState;
        }  
    }
    get state() {
        return this._state;
    }
} //закрыли класс PrintEditionItem

/*5. Создайте класс `Magazine`, который будет наследоваться от класса `PrintEditionItem`.
Конструктор класса должен принимать такие же параметры, как и класс-родитель. 
От базового печатного издания журнал отличается только указанным типом. 
Значение свойства `type` должно быть равно `"magazine"`. */

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

/*6. Создайте класс `Book`, который наследуется от класса `PrintEditionItem`. 
Конструктор класса должен принимать такие же параметры, как и класс-родитель,
 и имя автора книги `author`. Значение свойства `type` должно быть равно `"book"`.
*/

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

/*7. Создайте классы, которые наследуются от класса `Book`: `NovelBook` — для романов,
 `FantasticBook` — для фантастических произведений и `DetectiveBook` — для детективов. 
 Значения свойства `type` должны быть равны `"novel"`, `"fantastic"` и `"detective"` соответственно. */

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//## Задача 2. Библиотека

/**Создайте класс `Library` со свойствами
 * Конструктор класса должен принимать название библиотеки `name` (строка). 
 * Значением свойства `books` должен быть пустой массив.*/

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }

    /**Реализуйте метод `addBook(book)`, который в качестве аргумента будет принимать объект — книгу или журнал. 
     * Метод должен добавлять книгу в хранилище `books`, только если состояние `state` книги больше `30`. */

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    /**3. Создайте метод `findBookBy(type, value)`, который в качестве аргументов будет принимать ключ
      для проведения поиска (тип, автор, название, год выпуска и пр.) и искомое значение. 
     * Метод должен возвращать книгу в случае успеха и `null`, если запрошенная книга не была найдена. */

    findBookBy(type, value) {
        let key = type;
        let result = null;
        this.books.forEach(element => {
            if (element[key] === value) {
                return result = element;
            }
        });
        return result;
    }

    /**4. Создайте метод `giveBookByName(bookName)`, который в качестве аргумента будет принимать
     * название книги, запрошенной читателем. Если запрошенная книга найдена, 
     * метод должен удалять книгу из хранилища `books` и возвращать её. 
     * Если книга не была найдена, метод должен возвращать `null`. */

    giveBookByName(bookName) {    
        let result = null;
        this.books.forEach(element => {
            if (element.name === bookName) {
                result = element;
                let index = this.books.indexOf(element);
                this.books.splice(index, 1);
                return result;
            }
        });
        return result;
    }

} //закрыли класс Library



class Student {

    // constructor(name, gender, age) {
    constructor(name) {
        this.name = name;
        // this.gender = gender;
        // this.age = age;
        this.marks = {};
        this.subject = null;
    }

    /*2. Метод `addMark`, который будет добавлять оценку по предмету.
    * Валидируйте оценку. Она должна быть не меньше 2 и не больше 5. 
    Если значение выходит за пределы этого диапазона, оценка не должна добавиться,
     и метод следует завершать.
    * Проверьте наличие предмета. Если предмет отсутствует в свойстве `marks`,
      то добавляйте новое свойство, названием которого будет название предмета, 
      а значением — пустой массив.
    * Добавляйте в массив оценок по переданному свойству новый элемент, который был получен аргументом метода. */

    addMark(grade, academicSubject) {
        if (grade >= 2 && grade <= 5) {
            if (this.marks.hasOwnProperty(academicSubject)) {
                this.marks[academicSubject].push(grade);
                // console.log(this.marks);
            } else {
                console.log("Такого предмета \"" + academicSubject + "\" еще не было в оценках. Добавим!");
                this.marks[academicSubject] = [];
                this.marks[academicSubject].push(grade);
                // console.log(this.marks);
            }
        } else {
            console.log("Оценка " + grade + " не входит в диапозон от 2х до 5");
        }
    }

    /**3. Метод `getAverageBySubject`, который будет возвращать среднюю оценку по одному предмету.
    * Проверьте наличие предмета среди оценок. Если предмет отсутствует, сразу возвращайте ноль.
    * С помощью `reduce` посчитайте сумму оценок по одному предмету.
    * Возвращайте результат деления суммы оценок на их количество. */

    getAverageBySubject(academicSubject){
        if (!this.marks.hasOwnProperty(academicSubject)) {
            // console.log(this.marks);
            // console.log(this.marks[academicSubject]);
            return 0;
        } else {
            // console.log(this.marks[academicSubject]);
            let arr = this.marks[academicSubject];
            let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            return sum / arr.length;
        }
    }

    /**4. Метод `getAverage`, который будет возвращать общую среднюю оценку по всем предметам.
    * Используйте метод `Object.keys` для получения всех названий предметов.
    * С помощью метода `reduce` или использования цикла перебирайте все предметы. Для каждого считайте среднюю оценку с помощью метода `getAverageBySubject` и суммируйте полученные значения.
    * Возвращайте результат деления суммы средних оценок на количество предметов. */

    getAverage(){
        
        if (!this.hasOwnProperty('marks') || this.marks.length === 0) {
            return 0;
        } else {
            let arr = Object.keys(this.marks);
            let sum = arr.reduce((accumulator, currentValue) => accumulator + this.getAverageBySubject(currentValue), 0);
            return sum / arr.length;
        }
    }

} //закрыли класс Student
