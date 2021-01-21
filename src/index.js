
const getShapeVal = () => {
  let shape = document.querySelector('input[name="shape"]:checked').value;
  document.getElementById("heading").innerHTML = "Step 2 : Insert your values";
  document.getElementById("subHeading1").style.display = "none";
  document.getElementById("subHeading2").style.display = "block";
  document.getElementById("shapeTypes").style.display = "none";
  document.getElementById("selectedShape").innerHTML = shape;
  document.getElementById("step2").style.display = "block";

  switch (shape) {
    case "circle":
      let circle = document.getElementById("shapeValText");
      circle.style.display = "block";
      circle.innerHTML = "Diameter";
      break;
    case "square":
      let square = document.getElementById("shapeValText");
      square.style.display = "block";
      square.innerHTML = "Side";
      break;
    case "ellipse":
      document.getElementById("secondInput").style.display = "block";
      let majorAxis = document.getElementById("shapeValText");
      let minorAxis = document.getElementById("shapeValText2");
      majorAxis.style.display = "block";
      majorAxis.innerHTML = "majorAxis";
      minorAxis.style.display = "block";
      minorAxis.innerHTML = "minorAxis";
      break;
    default:
      secondInput;
      document.getElementById("secondInput").style.display = "block";
      let shapeText1 = document.getElementById("shapeValText");
      let shapeText2 = document.getElementById("shapeValText2");
      shapeText1.style.display = "block";
      shapeText1.innerHTML = "length";
      shapeText2.style.display = "block";
      shapeText2.innerHTML = "width";
  }
};

const goToStep3 = () => {
  let shapeType = document.getElementById("selectedShape").innerText;
  document.getElementById("heading").innerHTML = "Step 3 : Your results";
  document.getElementById("subHeading1").style.display = "none";
  document.getElementById("subHeading2").style.display = "none";
  document.getElementById("shapeTypes").style.display = "none";
  let shapeVal1 = document.getElementById("shapeVal1").value;
  let shapeVal2 = document.getElementById("shapeVal2").value;
  document.getElementById("step2").style.display = "none";
  document.getElementById("subHeading3").style.display = "block";
  document.getElementById("selectedShape1").innerHTML = shapeType;
  document.getElementById("val1").innerHTML = shapeVal1;
  document.getElementById("val2").innerHTML = shapeVal2;
  document.getElementById("startOver").style.display = "block";


  let newShape = new ShapeFactory();
  let shapeObj = {};
  shapeObj.shapeType = shapeType;

  switch(shapeType){
    case "circle":
      shapeObj.diameter = shapeVal1;
      break;
    case "square":
      shapeObj.side = shapeVal1;
      break;
    case "ellipse":
      shapeObj.length = shapeVal1;
      shapeObj.breadth = shapeVal2;
      break;
    default:
      shapeObj.length = shapeVal1;
      shapeObj.width = shapeVal2;
  }
  
  let result = newShape.createShape(shapeObj);
  let ele = document.getElementById("result");
  ele.style.display = "block";
  ele.innerHTML = `Area is ${result.area}`;
  }

function Circle(options) {
  this.radius = (options.diameter / 2) || 5;
  this.area = Math.PI * this.radius * this.radius;
}

function Rectangle(options) {
  this.length = options.length || 5;
  this.width = options.width || 3;
  this.area = this.length * this.width;
}

function Square(options) {
  this.side = options.side || 5;
  this.area = this.side * this.side;
}

function Ellipse(options) {
  this.majorAxis = options.length || 4;
  this.minorAxis = options.breadth || 4;
  this.area = Math.PI * this.majorAxis * this.minorAxis;
}

function ShapeFactory() {}

ShapeFactory.prototype.shapeClass = Rectangle;

ShapeFactory.prototype.createShape = function (options) {
  switch (options.shapeType) {
    case "rectangle":
      this.shapeClass = Rectangle;
      break;
    case "circle":
      this.shapeClass = Circle;
      break;
    case "square":
      this.shapeClass = Square;
      break;
    case "ellipse":
      this.shapeClass = Ellipse;
      break;
    //   default: Rectangle
  }

  return new this.shapeClass(options);
};

