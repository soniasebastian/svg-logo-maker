// below code uses shapes class which utilises constructor to define shape
class Shape {
    constructor() {
      this.color = "";
    }
    
    // shapes class takes in setColor function
    setColor(colorVar) {
      this.color = colorVar;
    }
  }

  // Triangle class inherits properties defined in Shape class
  class Triangle extends Shape {

    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  // Square class inherits properties defined in Shape class
  class Square extends Shape {
    render() {
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }

  // Square class inherits properties defined in Shape class
  class Circle extends Shape {
    render() {
    
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  

  //Exports classes
  module.exports = { Triangle, Square, Circle };