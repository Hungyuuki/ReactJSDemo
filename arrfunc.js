/**
 * 1. Let/ const
 * 2. Template Literals
 * 3. Multi-line String
 * 4. Arrow function
 * 5. Classes
 * 6. Default parameter values
 * 7. Destructuring(phân rã)
 * 8. Rest parameters
 * 9. Spread
 * 10. Enhanced object literals
 * 11. Tagged template literal
 * 12. Modules
 * 
 * Babel
 */


const course = {
    name: 'JavaScript basic',
    getName: function() {
        return this.name;
    }
}

console.log(course.getName())


const Course = function (name, price) {
        this.name = name;
        this.price = price;
    }
const course2 = new Course('javascript', 100)
console.log(course2)

//Ý là hàm mũi tên ko được dùng để là một constructor