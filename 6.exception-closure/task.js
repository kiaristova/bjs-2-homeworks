function parseCount(Number) {
    let result = parseFloat(Number);
    if (!result || result === 0) {
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount(Number) {
    try {
        return parseCount(Number);
    } catch (error) {
        return error;
    }
}


class Triangle {

    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ( (a + b) < c || (b + c) < a || (a + c) < b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const semiperimeter = this.perimeter/2;
        return +Math.sqrt(semiperimeter*(semiperimeter-this.a)*(semiperimeter-this.b)*(semiperimeter-this.c)).toFixed(3);
    }

}

function getTriangle (a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter () {
                return "Ошибка! Треугольник не существует";
            },
            get area () {
                return "Ошибка! Треугольник не существует";
            },
        } 
    }
}