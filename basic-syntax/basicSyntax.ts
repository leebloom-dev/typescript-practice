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

class Greeting {

    greet(): void {
        console.log("Hello there human");
    }

}

let someObject = new Greeting();
someObject.greet();