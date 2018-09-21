//Private properties in JavaScript ES6 classes
//ES6

class Person {
    constructor(name) {
        var _name = name  //private here
        this.setName = function(name) { _name = name; }  //public here 
        this.getName = function() { return _name; }
    }
}
//ES5

function Person(name) {
    var _name = name
    this.setName = function(name) { _name = name; }
    this.getName = function() { return _name; }
}
