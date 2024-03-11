// Задание 1
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getSquare() {
      return this.width * this.height;
    }
  
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  
    toString() {
      return `"Прямоугольник с шириной ${this.width} и высотой ${this.height} имеет периметр ${this.getPerimeter()} и площадь ${this.getSquare()}"`;
    }
  }
  
  
  
  
  // Задание 2
  
  class Square extends Rectangle {
    constructor(side) {
      super(side, side);
    }
    toString(){
      return  `"Сторона прямоугольника равна ${this.width}, его периметр равен ${this.getPerimeter()} и его площадь равна ${this.getSquare()}"`;
  }
  
  }
  
  