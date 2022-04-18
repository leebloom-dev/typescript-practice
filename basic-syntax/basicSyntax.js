/**
 * TYPESCRIPT AND OBJECT ORIENTATION
 *
 * Object
 *  - real time representation of any entity.
 *
 * State
 *  - object attributes description
 *
 * Behavior
 *  - how an object acts
 *
 * Identity
 *  - a unique value distinguishes an object from other objecs.
 *
 *  Class
 *  - OOP bluepring for creating objects
 *  - encapsutes date for the object
 *
 * Method
 *  - communicates between objects.
 */
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("This greeting method 'greeting()' is " +
            "in the class Greeting.\n" +
            "Don't forget to compile your TypeScript using 'tsc fileName.ts'\n" +
            "for every change your make!");
    };
    return Greeting;
}());
var someObject = new Greeting();
someObject.greet();
