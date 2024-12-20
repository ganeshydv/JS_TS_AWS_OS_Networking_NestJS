//both are used for assigning parent object to the function called

let p={
    name:"tony",
    getName:function(){ console.log(this); return " name: "+this.name}
}

let {getName}=p;

getName=getName.bind(p);   // --> here Bind()   { NEW function or object } which is binds {this }  to p as parent object the it assigns to getName so basically it also binds this abut PERMENANTLY it means this value can not be changed and it alos creates new object

getName.call(p);    //--> call() does not creates new object rather call the function immediately and also set this to a specified object
                     // but binding is dynamic it means { this } can be changed

getName.apply(p,[])  //--> apply works same as call() basic differece is it uses array to pass the argunments.

// The call() and bind() methods in JavaScript are used to invoke functions and set the value of this within the function. The main differences between call() and bind() are:

// Invocation:
// call(): The call() method immediately invokes the function with the provided this value and any additional arguments passed individually.
// bind(): The bind() method creates a new function with the provided this value and any additional arguments but does not immediately invoke the function. Instead, it returns a new function that can be invoked later.

// Immediate vs. Delayed Invocation:
// call(): Invokes the function immediately with the provided this value and arguments.
// bind(): Returns a new function with the bound this value and optional arguments, which can be invoked later at any time.
// Function Binding:

// call(): Temporarily sets the this value for the function and invokes it in one step.
// bind(): Creates a new function with a permanently bound this value and optional arguments.




//---------------------------------------------------

// explain use of call() in inheritance
// ChatGPT
// The call() method can be used in inheritance to invoke a constructor function defined in a parent object and set the this value of the child object to the newly created object. This allows the child object to inherit properties and methods from the parent object.

// Here's an example to illustrate the use of call() in inheritance:

// javascript
// Copy code
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}.`);
};
const p1=new Person("ray");
function Student(name, grade) {
  Person.call(this, name); // Invoke parent constructor with child object as 'this'
  this.grade = grade;
}
Student.prototype=Object.create(Person.prototype);
// Student.__proto__=Person.prototype.constructor;
// Create a new object using Student constructor
const student = new Student('John', 10);

//another solution without using OBject.create()
// student.__proto__=p1.__proto__; // this works as I am taking __proto__ which refers to Person Object
console.log(student.__proto__);
console.log(student.name);  // Output: John
console.log(student.grade); // Output: 10
// Student.prototype=Object.create(Person.prototype);  // will give error as it will be assigned after creating object

student.greet(); // Output: Hello, my name is John. //
// In this example, we have a Person constructor function that sets the name property and defines a greet() method on its prototype. Then, we have a Student constructor function that inherits from Person.

// To establish inheritance, we use Person.call(this, name) inside the Student constructor. This invokes the Person constructor and sets the newly created Student object as the this value. By doing this, the name property defined in the Person constructor is assigned to the name property of the Student object.

// The Student object also has its own grade property defined in its constructor.

// As a result, when we create a new Student object using new Student('John', 10), the name property is set to 'John', the grade property is set to 10, and the greet() method is inherited from the Person prototype.

// By using call() in the inheritance process, we can reuse the initialization logic of the parent constructor and properly set the this value of the child object to achieve inheritance in JavaScript.






