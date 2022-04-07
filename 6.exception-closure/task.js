const parseCount = (string) => {
    const parsed = Number.parseInt(string);
    if (isNaN(parsed)) {
        throw new Error('Невалидное значение');
    }
    return parsed;
}

const validateCount = (string) => {
    try {
        if (!isNaN(parseCount(string))) {
            return parseCount(string);
        }

    } catch (err) {
        return err;
    }
}


class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error('Треугольник с такими сторонами не существует')
        }

    }

    getPerimeter() {
        return this.a + this.b + this.c
    }

    getArea() {
        let halfPerimeter = this.getPerimeter() / 2;
        let square = Math.sqrt(halfPerimeter *
            (halfPerimeter - this.a) *
            (halfPerimeter - this.b) *
            (halfPerimeter - this.c));
        return parseFloat(square.toFixed(3));
    }
}

const getTriangle = (a, b, c) => {
    try {
        return new Triangle(a, b, c)
    } catch {
        const err = {
            getArea: 'Ошибка! Треугольник не существует',
            getPerimeter: 'Ошибка! Треугольник не существует',
        }
        return err;
    }

}