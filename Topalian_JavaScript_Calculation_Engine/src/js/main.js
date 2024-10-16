// shortcuts.js

function ge(whichId)
{
    let result = document.getElementById(whichId);
    return result;
}

function ce(whichType)
{
    let result = document.createElement(whichType);
    return result;
}

function ba(whichElement)
{
    let result = document.body.append(whichElement);
    return result;
}

function ct(whichText)
{
    let result = document.createTextNode(whichText);
    return result;
}

function print(whichText)
{
    let result = console.log(whichText);
    return result;
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// calculation_data.js

let calculationData = [
{
    name: "Addition",
    formula: "Sum = a + b",
    expression: "parseFloat(a) + parseFloat(b)",
    calculationFunction: "calculateAddition(a, b)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Addition'));",
    textBoxOne: "plus",
    textBoxTwo: "equals",
    textBoxResult: "Result",
    amountOfTextBoxes: 2,
    category: "arithmetic",
    type: "simple"
},

{
    name: "Addition of 3",
    formula: "Sum = a + b + c",
    expression: "parseFloat(a) + parseFloat(b) + parseFloat(c)",
    calculationFunction: "calculateAddition3(a,b, c)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Addition of 3'));",
    textBoxOne: "plus",
    textBoxTwo: "plus",
    textBoxThree: "equals",
    textBoxResult: "Result",
    amountOfTextBoxes: 3,
    category: "arithmetic",
    type: "simple"
},

{
    name: "Subtraction",
    formula: "Difference = a - b",
    expression: "a - b",
    calculationFunction: "calculateDifference(a, b)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Subtraction'));",
    textBoxOne: "minus",
    textBoxTwo: "equals",
    textBoxResult: "Result",
    amountOfTextBoxes: 2,
    category: "arithmetic",
    type: "simple"
},

{
    name: "Multiplication",
    formula: "Product = a * b",
    expression: "a * b",
    calculationFunction: "calculateMultiplication(a, b)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Multiplication'));",
    textBoxOne: "multiplied by",
    textBoxTwo: "equals",
    textBoxResult: "Result",
    amountOfTextBoxes: 2,
    category: "arithmetic",
    type: "simple"
},

{
    name: "Division",
    formula: "Quotient = a / b",
    expression: "a / b",
    calculationFunction: "calculateDivision(a, b)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Division'));",
    textBoxOne: "divided by",
    textBoxTwo: "equals",
    textBoxResult: "Result",
    amountOfTextBoxes: 2,
    category: "arithmetic",
    type: "simple"
},

{
    name: "Modulo",
    formula: "Remainder = a % b",
    expression: "a % b",
    calculationFunction: "calculateModulo(a, b)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Modulo'));",
    textBoxOne: "Dividend",
    textBoxTwo: "Divisor",
    textBoxResult: "Result Remainder",
    amountOfTextBoxes: 2,
    category: "arithmetic",
    type: "simple"
},

{
    name: "Percent",
    formula: "Percent = (a / b) * 100",
    expression: "(a / b) * 100",
    calculationFunction: "calculatePercent(a, b)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Percent'));",
    textBoxOne: "is what % of",
    textBoxTwo: "Total Value",
    textBoxResult: "Result %",
    amountOfTextBoxes: 2,
    category: "percent",
    type: "simple"
},

{
    name: "Rectangle Area",
    formula: "Area = width * length",
    expression: "a * b",
    calculationFunction: "calculateRectangleArea(a, b)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Rectangle Area'));",
    textBoxOne: "Width",
    textBoxTwo: "Length",
    textBoxResult: "Result Area",
    amountOfTextBoxes: 2,
    category: "geometry",
    type: "rectangle"
},

{
    name: "Square Area",
    formula: "Area = a * a",
    expression: "a * a",
    calculationFunction: "calculateSquareArea(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Square Area'));",
    textBoxOne: "Side",
    textBoxResult: "Result Area",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "square"
},

{
    name: "Circle Area from Radius",
    formula: "Area = PI * radius^2",
    expression: "Math.PI * Math.pow(a, 2)",
    calculationFunction: "calculateCircleAreaFromRadius(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Circle Area from Radius'));",
    textBoxOne: "Radius",
    textBoxResult: "Result Area",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "circle"
},

{
    name: "Circle Area from Diameter",
    formula: "Area = PI * (diameter / 2)^2",
    expression: "Math.PI * Math.pow((a / 2), 2)",
    calculationFunction: "calculateCircleAreaFromDiameter(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Circle Area from Diameter'));",
    textBoxOne: "Diameter",
    textBoxResult: "Result Area",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "circle"
},

{
    name: "Circle Area from Circumference",
    formula: "Area = (circumference^2) / (4 * PI)",
    expression: "Math.pow(a, 2) / (4 * Math.PI)",
    calculationFunction: "calculateCircleAreaFromCircumference(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Circle Area from Circumference'));",
    textBoxOne: "Circumference",
    textBoxResult: "Result Area",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "circle"
},

{
    name: "Circle Circumference from Diameter",
    formula: "Circumference = PI * diameter",
    expression: "Math.PI * a",
    calculationFunction: "calculateCircleCircumferenceFromDiameter(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Circle Circumference from Diameter'));",
    textBoxOne: "Diameter",
    textBoxResult: "Result Circumference",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "circle"
},

{
    name: "Circle Circumference from Radius",
    formula: "Circumference = (2 * PI) * radius",
    expression: "(2 * Math.PI) * a",
    calculationFunction: "calculateCircleCircumferenceFromRadius(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Circle Circumference from Radius'));",
    textBoxOne: "Radius",
    textBoxResult: "Result Circumference",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "circle"
},

{
    name: "Circle Circumference from Area",
    formula: "Circumference = 2 * Square Root PI * area",
    expression: "2 * (Math.sqrt(Math.PI * a))",
    calculationFunction: "calculateCircleCircumferenceFromArea(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Circle Circumference from Area'));",
    textBoxOne: "Area",
    textBoxResult: "Result Circumference",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "circle"
},

{
    name: "Distance",
    // distance = speed * time
    formula: "Distance = (mph * minutes) / 60",
    expression: "(a * b) / 60",
    calculationFunction: "calculateDistance(a, b)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Distance'));",
    textBoxOne: "Mph",
    textBoxTwo: "Minutes",
    textBoxResult: "Result Miles",
    amountOfTextBoxes: 2,
    category: "speed time distance",
    type: "distance"
},

{
    name: "Speed",
    // speed = distance / time
    // feet to miles is feet * 0.000189394
    // minutes to hours is minutes * 0.166667
    formula: "Speed = (feet * 0.000189394) / (minutes * 0.166667)",
    expression: "(a * 0.000189394) / (b * 0.0166667)",
    calculationFunction: "calculateSpeed(a, b)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Speed'));",
    textBoxOne: "Feet",
    textBoxTwo: "Minutes",
    textBoxResult: "Result Mph",
    amountOfTextBoxes: 2,
    category: "speed time distance",
    type: "speed"
},

{
    name: "Time",
    // time = distance / time
    // feet to miles is feet * 000189394
    // mph to mpm is mph * 0.0166667
    formula: "Time =  (feet * 0.000189394) / (b * 0.0166667)",
    expression: "(a * 0.000189394) / (b * 0.0166667)",
    calculationFunction: "calculateTime(a, b)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Time'));",
    textBoxOne: "Feet",
    textBoxTwo: "MPH",
    textBoxResult: "Result Minutes",
    amountOfTextBoxes: 2,
    category: "speed time distance",
    type: "time"
},

{
    name: "Recatangle Perimeter",
    formula: "Perimeter = (2 * a) + (2 * b);",
    expression: "(2 * a) + (2 * b)",
    calculationFunction: "calculateRectanglePerimeter(a, b)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Recatangle Perimeter'));",
    textBoxOne: "Width",
    textBoxTwo: "Length",
    textBoxResult: "Result Perimeter",
    amountOfTextBoxes: 2,
    category: "geometry",
    type: "rectangle"
},

{
    name: "Square Perimeter",
    formula: "Perimeter = 4 * side",
    expression: "4 * a",
    calculationFunction: "calculateSquarePerimeter(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Square Perimeter'));",
    textBoxOne: "Side",
    textBoxResult: "Result Perimeter",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "square"
},

{
    name: "Triangle Equilateral Perimeter",
    formula: "Perimeter = 3 * side",
    expression: "3 * a",
    calculationFunction: "calculateTriangleEquilateralPerimeter(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Triangle Equilateral Perimeter'));",
    textBoxOne: "Side",
    textBoxResult: "Result Perimeter",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "triangle"
},

{
    name: "Triangle Isosceles Perimeter",
    formula: "Perimeter = (2 * a) + b",
    expression: "(2 * parseFloat(a)) + parseFloat(b)",
    calculationFunction: "calculateTriangleIsoscelesPerimeter(a, b)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Triangle Isosceles Perimeter'));",
    textBoxOne: "Leg",
    textBoxTwo: "Base",
    textBoxResult: "Result Perimeter",
    amountOfTextBoxes: 2,
    category: "geometry",
    type: "triangle"
},

{
    name: "Sphere Area from Radius",
    formula: "Area = 4 * PI * radius^2",
    expression: "4 * Math.PI * Math.pow(a, 2)",
    calculationFunction: "calculateSphereAreaFromRadius(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Sphere Area from Radius'));",
    textBoxOne: "Radius",
    textBoxResult: "Result Area",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "sphere"
},

{
    name: "Sphere Radius from Diameter",
    formula: "Radius = diameter / 2",
    expression: "a / 2",
    calculationFunction: "calculateSphereRadiusFromDiameter(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Sphere Radius from Diameter'));",
    textBoxOne: "Diameter",
    textBoxResult: "Result Radius",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "sphere"
},

{
    name: "Sphere Volume from Radius",
    formula: "Volume = (4 / 3 * Math.PI) * Math.pow(radius, 3.0)",
    expression: "(4 / 3 * Math.PI) * Math.pow(a, 3.0)",
    calculationFunction: "calculateSphereVolumeFromRadius(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Sphere Volume from Radius'));",
    textBoxOne: "Radius",
    textBoxResult: "Result Volume",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "sphere"
},

{
    name: "Celsius to Fahrenheit",
    formula: "Fahrenheit = (celsius * 1.8) + 32",
    expression: "(a * 1.8) + 32",
    calculationFunction: "calculateCelsiusToFahrenheit(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Celsius to Fahrenheit'));",
    textBoxOne: "Celsius",
    textBoxResult: "Result Fahrenheit",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "temperature"
},

{
    name: "Fahrenheit to Celsius",
    formula: "Celsius = 5 * (fahrenheit - 32) / 9;",
    expression: "5 * (a - 32) / 9",
    calculationFunction: "calculateFahrenheitToCelsius(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Fahrenheit to Celsius'));",
    textBoxOne: "Fahrenheit",
    textBoxResult: "Result Celsius",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "temperature"
},

{
    name: "Decimal to Percent",
    formula: "Percent = decimal * 100",
    expression: "a * 100",
    calculationFunction: "calculateDecimalToPercent(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Decimal to Percent'));",
    textBoxOne: "Decimal",
    textBoxResult: "Result Percent",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "percent"
},

{
    name: "Percent to Decimal",
    formula: "Decimal = percent / 100",
    expression: "a / 100",
    calculationFunction: "calculatePercentToDecimal(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Percent to Decimal'));",
    textBoxOne: "Percent",
    textBoxResult: "Result Decimal",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "percent"
},

{
    name: "Mph to Kph",
    formula: "Kph = mph * 1.60934",
    expression: "a * 1.60934",
    calculationFunction: "calculateMphToKph(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Mph to Kph'));",
    textBoxOne: "Mph",
    textBoxResult: "Result Kph",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "speed"
},

{
    name: "Kph to Mph",
    formula: "Mph = kph * 0.621371",
    expression: "a * 0.621371",
    calculationFunction: "calculateKphToMph(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Kph to Mph'));",
    textBoxOne: "Kph",
    textBoxResult: "Result Mph",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "speed"
},

{
    name: "Fps to Mph",
    formula: "Mph = a * 0.681818",
    expression: "a * 0.681818",
    calculationFunction: "calculateFpsToMph(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Fps to Mph'));",
    textBoxOne: "Fps",
    textBoxResult: "Result Mph",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "speed"
},

{
    name: "Mph to Fps",
    formula: "Fps = (mph * 5280) / 3600",
    expression: "(a * 5280) / 3600",
    calculationFunction: "calculateMphToFps(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Mph to Fps'));",
    textBoxOne: "Mph",
    textBoxResult: "Result Fps",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "speed"
},

{
    name: "Feet to Meter",
    formula: "Meter = feet * 0.3048",
    expression: "a * 0.3048",
    calculationFunction: "calculateFeetToMeter(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Feet to Meter'));",
    textBoxOne: "Feet",
    textBoxResult: "Result Meter",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "distance"
},

{
    name: "Meter to Feet",
    formula: "Feet = meters * 3.28084",
    expression: "a * 3.28084",
    calculationFunction: "calculateMeterToFeet(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Meter to Feet'));",
    textBoxOne: "Meter",
    textBoxResult: "Result Feet",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "distance"
},

{
    name: "Percent of Hour",
    formula: "PercentOfHour = (minute * 100) / 60",
    expression: "(a * 100) / 60",
    calculationFunction: "calculatePercentOfHour(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Percent of Hour'));",
    textBoxOne: "Minutes",
    textBoxResult: "Result Percent of Hour",
    amountOfTextBoxes: 1,
    category: "percent",
    type: "time"
},

{
    name: "Calculate Sales Tax and Total Price",
    formula: " Sales Tax Amount = price * (taxRate / 100)",
    expression: "price * (taxRate / 100)",
    calculationFunction: "calculateSalesTaxAndTotalPrice(a, b)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Calculate Sales Tax and Total Price'));",
    textBoxOne: "Price",
    textBoxTwo: "Tax Rate",
    textBoxThree: "Sales Tax Amount",
    textBoxResult: "Result Sales Tax Included",
    amountOfTextBoxes: 3,
    category: "business",
    type: "money"
},

{
    name: "Calculate Year Born From Current Year",
    formula: "YearBorn = CurrentYear - Age",
    expression: "CurrentYear - a",
    calculationFunction: "calculateYearBornFromCurrentYear(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Calculate Year Born From Current Year'));",
    textBoxOne: "Age",
    textBoxTwo: "Current Year",
    textBoxResult: "Result Year Born (est)",
    amountOfTextBoxes: 2,
    category: "investigations",
    type: "background check"
},

{
    name: "Calculate Year Born From Specified Year",
    formula: "Year Born = SpecifiedYear - Age",
    expression: "SpecifiedYear - a",
    calculationFunction: "calculateYearBornFromSpecifiedYear(a, b)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Calculate Year Born From Specified Year'));",
    textBoxOne: "Age",
    textBoxTwo: "Specified Year",
    textBoxResult: "Result Year Born (est)",
    amountOfTextBoxes: 2,
    category: "investigations",
    type: "background check"
},

{
    name: "Calculate Mean Average Of Numbers",
    formula: "",
    expression: "",
    calculationFunction: "calculateMeanAverageOfNumbers()",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Calculate Mean Average Of Numbers'));",
    textBoxOne: "Numbers (Comma Separated)",
    textBoxResult: "Result Mean Average",
    amountOfTextBoxes: 1,
    category: "average",
    type: "mean"
},

{
    name: "Calculate Median Average Of Numbers",
    formula: "",
    expression: "",
    calculationFunction: "calculateMedianAverageOfNumbers()",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Calculate Median Average Of Numbers'));",
    textBoxOne: "Numbers (Comma Separated)",
    textBoxResult: "Result Median Average",
    amountOfTextBoxes: 1,
    category: "average",
    type: "median"
},

{
    name: "Calculate Feet and Inch to Meter",
    formula: "",
    expression: "",
    calculationFunction: "calculateFeetAndInchToMeter(a, b)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Calculate Feet and Inch to Meter'));",
    textBoxOne: "Feet",
    textBoxTwo: "Inch",
    textBoxResult: "Result Meters",
    amountOfTextBoxes: 2,
    category: "conversion",
    type: "distance"
},

{
    name: "Calculate Meter and Centimeter to Feet",
    formula: "",
    expression: "",
    calculationFunction: "calculateMeterAndCentimeterToFeet(a, b)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Calculate Meter and Centimeter to Feet'));",
    textBoxOne: "Meter",
    textBoxTwo: "Centimeter",
    textBoxResult: "Result Feet",
    amountOfTextBoxes: 2,
    category: "conversion",
    type: "distance"
},

{
    name: "Calculate Meter to Mile",
    formula: "",
    expression: "",
    calculationFunction: "calculateMeterToMile(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Calculate Meter to Mile'));",
    textBoxOne: "Meter",
    textBoxResult: "Result Mile",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "distance"
},

{
    name: "Calculate Mile to Meter",
    formula: "",
    expression: "",
    calculationFunction: "calculateMileToMeter(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Calculate Mile to Meter'));",
    textBoxOne: "Mile",
    textBoxResult: "Result Meter",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "distance"
},

{
    name: "Calculate Difference Between Dates",
    formula: "",
    expression: "",
    calculationFunction: "calculateDifferenceBetweenDates(a, b)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Calculate Difference Between Dates'));",
    textBoxOne: "Date 1",
    textBoxTwo: "Date 2",
    textBoxResult: "Result Days",
    amountOfTextBoxes: 2,
    category: "time",
    type: "date"
},

{
    name: "Calculate Number of Days in February",
    formula: "",
    expression: "",
    calculationFunction: "calculateNumberOfDaysInFebruary(a)",
    calculatorType: "makeCalculator(findIndexByName(calculationData, 'Calculate Number of Days in February'));",
    textBoxOne: "Year",
    textBoxResult: "Result Days",
    amountOfTextBoxes: 1,
    category: "time",
    type: "date"
}

];

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// calculation_functions.js

function calculateAddition(a, b)
{
    let sum = parseFloat(a) + parseFloat(b);

    return sum;
}

function calculateAddition3(a, b, c)
{
    let sum = parseFloat(a) + parseFloat(b) + parseFloat(c);

    return sum;
}

function calculateDifference(a, b)
{
    let difference = parseFloat(a) - parseFloat(b);

    return difference;
}

function calculateMultiplication(a, b)
{
    let product = parseFloat(a) * parseFloat(b);

    return product;
}

function calculateDivision(a, b)
{
    let quotient = parseFloat(a) / parseFloat(b);

    return quotient;
}

function calculateModulo(a, b)
{
    let remainder = a % b;

    return remainder;
}

function calculatePercent(whichValue, whichTotalValue)
{
    let percent = (whichValue / whichTotalValue) * 100;

    return percent;
}

function calculateRectangleArea(a, b)
{
    let area = parseFloat(a) * parseFloat(b);

    return area;
}

function calculateSquareArea(a)
{
    let area = a * a;

    return area;
}

function calculateCircleAreaFromRadius(a)
{
    let area = Math.PI * Math.pow(a, 2);

    return area;
}

function calculateCircleAreaFromDiameter(a)
{
    let area = Math.PI * Math.pow((a / 2), 2);

    return area;
}

function calculateCircleAreaFromCircumference(a)
{
    let area = Math.pow(a, 2) / (4 * Math.PI);

    return area;
}

function calculateCircleCircumferenceFromDiameter(a)
{
    let circumference = Math.PI * a;

    return circumference;
}

function calculateCircleCircumferenceFromRadius(a)
{
    let circumference = (2 * Math.PI) * a;

    return circumference;
}

function calculateCircleCircumferenceFromArea(a)
{
    let circumference =  2 * (Math.sqrt(Math.PI * a));

    return circumference;
}

function calculateDistance(a, b)
{
    let distance = (a * b) / 60;

    return distance;
}

function calculateSpeed(a, b)
{
    let speed = (a * 0.000189394) / (b * 0.0166667);

    return speed;
}

function calculateTime(a, b)
{
    let time = (a * 0.000189394) / (b * 0.0166667);

    return time;
}

function calculateRectanglePerimeter(a, b)
{
    let perimeter = (2 * a) + (2 * b);

    return perimeter;
}

function calculateSquarePerimeter(a)
{
    let perimeter = 4 * a;

    return perimeter;
}

function calculateTriangleEquilateralPerimeter(a)
{
    let perimeter = 3 * a;

    return perimeter;
}

function calculateTriangleIsoscelesPerimeter(a, b)
{
    let perimeter = (2 * parseFloat(a)) + parseFloat(b);

    return perimeter;
}

function calculateSphereAreaFromRadius(a)
{
    let area = 4 * Math.PI * Math.pow(a, 2);

    return area;
}

function calculateSphereRadiusFromDiameter(a)
{
    let radius = a / 2;

    return radius;
}

function calculateSphereVolumeFromRadius(a)
{
    let volume = (4 / 3 * Math.PI) * Math.pow(a, 3.0);

    return volume;
}

function calculateCelsiusToFahrenheit(a)
{
    let fahrenheit = (a * 1.8) + 32;

    return fahrenheit;
}

function calculateFahrenheitToCelsius(a)
{
    let celsius = 5 * (a - 32) / 9;

    return celsius;
}

function calculateDecimalToPercent(a)
{
    let percent = a * 100;

    return percent;
}

function calculatePercentToDecimal(a)
{
    let decimal = a / 100;

    return decimal;
}

function calculateMphToKph(a)
{
    let kph = a * 1.60934;

    return kph;
}

function calculateKphToMph(a)
{
    let mph = a * 0.621371;

    return mph;
}

function calculateFpsToMph(a)
{
    let mph = a * 0.681818;

    return mph;
}

function calculateMphToFps(a)
{
    let fps = (a * 5280) / 3600;

    return fps;
}

function calculateFeetToMeter(a)
{
    let meter = a * 0.3048;

    return meter;
}

function calculateMeterToFeet(a)
{
    let feet = a * 3.28084;

    return feet;
}

function calculatePercentOfHour(a)
{
    let percentOfHour = (a * 100) / 60;

    return percentOfHour;
}

function calculateSalesTaxAndTotalPrice(a, b)
{
    let price = a;

    let taxRate = b;

    let salesTaxAmount = price * (taxRate / 100);

    let totalPriceTaxIncluded = parseFloat(price) + salesTaxAmount;

    ge(2).value = salesTaxAmount.toFixed(2);

    return totalPriceTaxIncluded.toFixed(2);
}

function calculateYearBornFromCurrentYear(a)
{
    let age = a;

    let currentYear = new Date().getFullYear();

    ge(1).textContent = currentYear;

    let yearBorn = currentYear - age;

    return yearBorn;
}

function calculateYearBornFromSpecifiedYear(a, b)
{
    let age = a;

    let specifiedYear = b;

    let yearBorn = specifiedYear - age;

    return yearBorn;
}

function calculateMeanAverageOfNumbers()
{
    // split separates values according to the character chosen
    let numbersArray = ge(0).value.split(',');

    // add the numbers together
    let theSum = numbersArray.reduce(function(theTotal, number)
    {
        return parseFloat(theTotal) + parseFloat(number);
    });

    // how many numbers exist in the string
    let howMany = numbersArray.length;

    // result of dividing theSum by howMany
    let average = theSum / howMany;

    return average.toFixed(2);
}

function calculateMedianAverageOfNumbers()
{
    // split separates values according to the character chosen
    let numbersArray = ge(0).value.split(',');

    // sort the numbers in ascending order, low to high
    numbersArray.sort(function(a, b)
    {
        return a - b;
    });

    // convert to an array of float values
    let floatNumbersArray = numbersArray.map(function(item)
    {
        return parseFloat(item, 10);
    });

    // find the median of floatNumbersArray
    let median = Math.floor(floatNumbersArray.length / 2);

    if (floatNumbersArray.length % 2)
    {
        result = floatNumbersArray[median];
    }

    else
    {
        result = (floatNumbersArray[median - 1] + floatNumbersArray[median]) / 2.0;
    }

    return result;
}

function calculateFeetAndInchToMeter(a, b)
{
    let feet = a;

    let inches = b;

    // convert feet to centimeter
    let centimeterFromFeet = feet * 30.48

    // convert inch to centimeter
    let centimeterFromInch = inches * 2.54;

    let totalCentimeters = centimeterFromFeet + centimeterFromInch;

    // convert total centimeters to meters
    let meters = totalCentimeters / 100;

    return meters;
}

function calculateMeterAndCentimeterToFeet(a, b)
{
    let meter = a;

    let centimeter = b;

    // convert meters to inches
    let inchFromMeter = meter * 39.3701;

    // convert centimeters to inches
    let inchFromCentimeter = centimeter * 0.393701;

    let totalInches = inchFromMeter + inchFromCentimeter;

    // convert total inches to feet
    let feet = totalInches * 0.0833333;

    return feet;
}

function calculateMeterToMile(a)
{
    let meter = a;

    let mile = meter * 0.000621371;

    return mile;
}

function calculateMileToMeter(a)
{
    let mile = a;

    let meter = mile * 1609.344;

    return meter;
}

function calculateDifferenceBetweenDates(a, b)
{
    let date1 = new Date(a);
    let date2 = new Date(b);

    // calculate the time difference of two dates
    let differenceInTime = date2.getTime() - date1.getTime();

    // calculate # of days
    var differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return Math.abs(differenceInDays).toFixed(0);
}

function calculateNumberOfDaysInFebruary(whichYear)
{
    let febDays;

    if (whichYear % 4 == 0)
    {
        febDays = 29;
    }
    else
    {
        febDays = 28;
    }

    return febDays;
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeCalculator.js

function makeCalculator(whichItem, whichAmount)
{
    let calculatorId = 'calculator';

    if (ge(calculatorId))
    {
        ge(calculatorId).remove();
    }

    //-//

    whichAmount = calculationData[whichItem].amountOfTextBoxes;

    //-//

    let mainDiv = ce("div");
    mainDiv.id = calculatorId;
    mainDiv.style.position = 'relative';
    mainDiv.style.top = '10vh';
    mainDiv.style.width = '25vw';
    mainDiv.style.paddingLeft = '12px';
    mainDiv.style.paddingRight = '12px';
    mainDiv.style.paddingTop = '12px';
    mainDiv.style.paddingBottom = '12px';
    mainDiv.style.borderStyle = 'solid';
    mainDiv.style.borderWidth = '2px';
    mainDiv.style.borderRadius = '5px';
    mainDiv.style.borderColor = 'rgb(0, 255, 255)';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';
    mainDiv.style.alignItems = 'center';
    mainDiv.style.margin = 'auto';
    ba(mainDiv);

    //-//

    let titleOfCalculator = ce("div");
    titleOfCalculator.style.fontSize = '22px';
    titleOfCalculator.style.fontWeight = 'bold';
    titleOfCalculator.style.color = 'rgb(0, 255, 255)';
    titleOfCalculator.innerHTML = '<center> '+calculationData[whichItem].name+' </center>';
    titleOfCalculator.innerHTML += "<br>";
    mainDiv.append(titleOfCalculator);

    //-//

    for (let x = 0; x < whichAmount; x++)
    {
        let textBox = ce("textarea");
        textBox.id = x;

        if (whichAmount == 1)
        {
            textBox.onkeyup = function()
            {
                let a = ge(0).value;

                ge("textBoxResult").value = eval(' '+calculationData[whichItem].calculationFunction+' ');
            };
        }

        if (whichAmount == 2)
        {
            textBox.onkeyup = function()
            {
                let a = ge(0).value;
                let b = ge(1).value;

                ge("textBoxResult").value = eval(' '+calculationData[whichItem].calculationFunction+' ');
            };
        }

        if (whichAmount == 3)
        {
            textBox.onkeyup = function()
            {
                let a = ge(0).value;
                let b = ge(1).value;
                let c = ge(2).value;

                ge("textBoxResult").value = eval(' '+calculationData[whichItem].calculationFunction+' ');
            };
        }
        mainDiv.append(textBox);
    }

    //-//

    if (whichAmount == 1)
    {
        let titleOfTextBox1 = ce("div");
        titleOfTextBox1.innerHTML = calculationData[whichItem].textBoxOne;
        mainDiv.insertBefore(titleOfTextBox1, ge(0));
    }

    if (whichAmount == 2)
    {
        let titleOfTextBox1 = ce("div");
        titleOfTextBox1.innerHTML = calculationData[whichItem].textBoxOne;
        mainDiv.insertBefore(titleOfTextBox1, ge(1));

        //-//

        let titleOfTextBox2 = ce("div");
        titleOfTextBox2.innerHTML = calculationData[whichItem].textBoxTwo;
        mainDiv.insertBefore(titleOfTextBox2, ge(2));
    }

    if (whichAmount == 3)
    {
        let titleOfTextBox1 = ce("div");
        titleOfTextBox1.innerHTML = calculationData[whichItem].textBoxOne;
        mainDiv.insertBefore(titleOfTextBox1, ge(1));

        //-//

        let titleOfTextBox2 = ce("div");
        titleOfTextBox2.innerHTML = calculationData[whichItem].textBoxTwo;
        mainDiv.insertBefore(titleOfTextBox2, ge(2));

        //-//

        let titleOfTextBox3 = ce("div");
        titleOfTextBox3.innerHTML = calculationData[whichItem].textBoxThree;
        mainDiv.insertBefore(titleOfTextBox3, ge(4));
    }

    //-//

    let textBoxResult = ce("textarea");
    textBoxResult.id = "textBoxResult";
    textBoxResult.style.borderColor = 'rgb(0, 255, 255)';
    textBoxResult.style.fontWeight = 'bold';
    textBoxResult.style.color = 'rgb(0, 255, 255)';
    textBoxResult.placeholder = "Result";
    window.onkeyup = function()
    {
        if (ge("textBoxResult").value == "NaN" || ge("textBoxResult").value == "Infinity")
        {
            ge("textBoxResult").value = "";
        }
    }
    mainDiv.append(textBoxResult);

    //-//

    let titleOfTextBoxResult = ce("div");
    titleOfTextBoxResult.style.color = 'rgb(0, 255, 255)';
    titleOfTextBoxResult.style.fontWeight = 'bold';
    titleOfTextBoxResult.innerHTML = ' '+calculationData[whichItem].textBoxResult+' ';
    titleOfTextBoxResult.style.fontSize = '16px';
    mainDiv.append(titleOfTextBoxResult);

    //-//

    if (ge("dataContainer"))
    {
        ge("dataContainer").remove();
    }

    let dataContainer = ce('div');
    dataContainer.id = 'dataContainer';
    dataContainer.style.position = 'absolute';
    dataContainer.style.right = '70px';
    dataContainer.style.top = '40px';
    dataContainer.style.width = '200px';
    dataContainer.style.display = 'flex';
    dataContainer.style.flexDirection = 'column';
    ba(dataContainer);

    //-//

    let formulaText = ce("div");
    formulaText.id = "formulaText";
    formulaText.style.fontSize = '19px';
    formulaText.style.fontWeight = 'bold';
    formulaText.style.color = 'rgb(0, 255, 255)';
    formulaText.innerHTML = calculationData[whichItem].formula;
    dataContainer.append(formulaText);

    //-//

    dataContainer.append(ce('hr'));

    //-//

    let expressionText = ce("div");
    expressionText.id = 'expressionText';
    expressionText.style.fontSize = '19px';
    expressionText.style.fontWeight = 'bold';
    expressionText.innerHTML = calculationData[whichItem].expression;
    dataContainer.append(expressionText);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeMenu.js

function makeMenu()
{
    let menuId = 'menuMainDiv';

    if (ge(menuId))
    {
        ge(menuId).remove();
    }

    //-//

    let menuMainDiv = ce("div");
    menuMainDiv.id = menuId;
    menuMainDiv.style.position = 'fixed';
    menuMainDiv.style.left = '0px';
    menuMainDiv.style.top = '22px';
    menuMainDiv.style.zIndex = 1000;
    menuMainDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    ba(menuMainDiv);

    //-//

    let minimizeButton = ce("button");
    minimizeButton.className = "menuButtonStyle";
    minimizeButton.style.position = "absolute";
    minimizeButton.style.left = 0 + "px";
    minimizeButton.style.top = -22 + "px";
    minimizeButton.innerHTML = "_";
    minimizeButton.onmouseover = function()
    {
        hoverSound();
    };
    minimizeButton.onclick = function()
    {
        // minimize height of div to show only  _  □
        clickSound();
        ge("menuSubDiv").style.height = 0 + "px";
    };
    menuMainDiv.append(minimizeButton);

    //-//

    let maximizeButton = ce("button");
    maximizeButton.id = 'maximizeButton';
    maximizeButton.className = "menuButtonStyle";
    maximizeButton.style.position = "absolute";
    maximizeButton.style.left = 30 + "px";
    maximizeButton.style.top = -22 + "px";
    maximizeButton.innerHTML = "□";
    maximizeButton.onmouseover = function()
    {
        hoverSound();
    };
    maximizeButton.onclick = function()
    {
        clickSound();
        ge("menuSubDiv").style.height = 300 + "px";
    };
    menuMainDiv.append(maximizeButton);

    //-//

    let menuSubDiv = ce("div");
    menuSubDiv.style.minWidth = '270px';
    menuSubDiv.style.marginLeft = 'auto';
    menuSubDiv.style.marginRight = 'auto';
    menuSubDiv.style.float = 'left';
    menuSubDiv.style.overflowY = 'auto';
    menuSubDiv.style.resize = 'both';  menuSubDiv.id = "menuSubDiv";
    menuSubDiv.innerHTML = "<br>";
    menuMainDiv.append(menuSubDiv);

    //-//

    for (let x = 0; x < calculationData.length; x++)
    {
        let functionButton = ce("button");
        functionButton.style.display = "flex";
        functionButton.style.flexDirection = "row";
        
        functionButton.innerHTML = calculationData[x].name;

        functionButton.id = calculationData[x].name;

        functionButton.onmouseover = function()
        {
            hoverSound();
        };

        functionButton.onclick = function()
        {
            clickSound();

            eval(' '+calculationData[x].calculatorType+' ' + ';');

            console.log(' '+calculationData[x].calculatorType+' ');
        };

        menuSubDiv.append(functionButton);

        ge("menuSubDiv").style.height = 0 + "px";
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeTitleOfApp.js

function makeTitleOfApp()
{
    let titleOfApplication = ce("a");
    titleOfApplication.style.position = 'absolute';
    titleOfApplication.style.right = '15px';
    titleOfApplication.style.bottom = '5px';
    titleOfApplication.style.fontSize = '17px';
    titleOfApplication.style.color = 'rgb(70, 70, 70)';
    titleOfApplication.style.fontWeight = 'bold';
    titleOfApplication.href = 'https://github.com/ChristopherTopalian'
    titleOfApplication.target = '_blank';
    titleOfApplication.textContent = ' Topalian JavaScript Calculation Engine';
    ba(titleOfApplication);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// findIndexByName.js

function findIndexByName(whichArray, whichName)
{
    let index = whichArray.findIndex(function(a)
    {
        return a.name === whichName
    });

    return index;
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// sortByCategoryAndType.js

function sortByCategoryAndType(whichArray, whichDirection)
{
    // ascending
    if (whichDirection == "up")
    {
        whichArray.sort(function(a, b)
        {
            return a.category.localeCompare(b.category) || a.type.localeCompare(b.type)
        });
    }

    // descending
    else if (whichDirection == "down")
    {
        whichArray.sort(function(b, a)
        {
            return a.category.localeCompare(b.category) || a.type.localeCompare(b.type)
        });
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// sound.js

let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(frequency, duration, waveType, volume, detune, attackTime, releaseTime, panValue)
{
    let oscillator = audioCtx.createOscillator();
    // 'sine', 'square', 'sawtooth', 'triangle'
    oscillator.type = waveType;
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    oscillator.detune.setValueAtTime(detune, audioCtx.currentTime);

    let gainNode = audioCtx.createGain();
    let pannerNode = audioCtx.createStereoPanner();
    
    oscillator.connect(gainNode);
    gainNode.connect(pannerNode);
    pannerNode.connect(audioCtx.destination);

    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);

    // attack
    gainNode.gain.linearRampToValueAtTime(volume, audioCtx.currentTime + attackTime);
    gainNode.gain.linearRampToValueAtTime(0, 

    // release
    audioCtx.currentTime + duration / 1000 - releaseTime);

    pannerNode.pan.setValueAtTime(panValue, audioCtx.currentTime);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration / 1000);
}

function hoverSound()
{
    playTone(
        300,     // frequency
        500,     // duration
        'sine',  // waveType
        0.15,    // volume
        50,       // detune
        0.2,      // attackTime
        0.2,      // releaseTime
        -0.5      // panValue -0.5 is left
    );
}

function clickSound()
{
    playTone(
        400,     // frequency
        500,     // duration
        'sine',  // waveType
        0.15,    // volume
        50,       // detune
        0.2,      // attackTime
        0.2,      // releaseTime
        -0.5      // panValue -0.5 is left
    );
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// whenLoaded.js

function whenLoaded()
{
    sortByCategoryAndType(calculationData, "up");

    makeMenu();

    makeCalculator(findIndexByName(calculationData, "Addition"), 2);

    makeTitleOfApp();

    // menu starts open
    ge("menuSubDiv").style.height = 300 + "px";
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

