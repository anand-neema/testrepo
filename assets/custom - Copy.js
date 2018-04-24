What is object?


"object" refers to a particular 
instance of a class where
 the object can be a combination of 
 variables, functions, and data structures.

class test {
 int i; // variables
 
 //functions
 function test1(){
 }
 
}
 
 var testObject = new test();
 
In JavaScript, an object is a standalone entity,
 with properties and type
 
// User defined Object
var employee = new Object();
var books = new Array("C++", "Perl", "Java");
var day = new Date("August 15, 1947")


//Object() constructor
var vehicle = new Object();
vehicle.type="two vehiler";
vehicle.fueltype="petrol";


 function book(title, author){
            this.title = title; 
            this.author  = author;
         }
		 
		 var shakspear= new book('title of the book','shakeshpere');

		 
		 //ways of creating an object
		 
		var d = new Object();
		var a = {};
		var a = Object.create(null);
		
		var Obj = function(name) {
		  this.name = name;
		}
		var c = new Obj("hello"); 
		var c = new Obj("hello"); 
		
		
var foo = { }; 
var foo = [1, 2, 3]; 
var foo = function abc() { return "hello world"; }; 
var foo = new Number(30); 
var foo = new String("Hello World"); 
var foo = new Boolean(true); 
var foo = new RegExp(/[foo]+/);


#Functions

            1. What are functions? How to create a functions?
				
				var addNUmber = function(){
									}
						
				function addNumber(){
				
				}
				
				function A(){};             // function declaration
				var B = function(){};       // function expression
				var D = function foo(){};   // named function expression
				(function(){        // IIFE that returns a function
				  return function(){}
				})();
				var F = new Function();     // Function constructor
				var G = new function(){};   // special case: object constructor
				var H = x => x * 2;         // ES6 arrow function
				var h = (x,y) => {
					x= x+2; 
					return x*y;
				};
				
				
                b. Callback functions
					
					var generalLastName = "Clinton";
					var allUserData = [];

					function iamcallbackfunction(lasstname,options){
						console.log(lasstname,options);
						console.log("i am call back function occure on certain event");
					}

					function getInput (options, iamcallbackfunction) {
						allUserData.push (options);
					// Pass the global variable generalLastName to the callback function​
						iamcallbackfunction (generalLastName, options);
					}

					
				
             Pure functions  
					
					function add(a,b){
					 return a+b;
					}
					
			Impure Functions.	
					function add(a,b){
						a=a+1;
						return c=a+b;
					}
					
			
				
#Scope 


        1. Local and Global Scope.
		
        2. Lexical scoping.
		
#Closer



		 
