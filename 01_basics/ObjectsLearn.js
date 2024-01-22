// Object literals
const JsUser = {
    name: "Jai",
    age: 24,
    location: "Noida"
}

const obj1 = {
    a:1,
    b:2
}

const obj2 = {
    c:1,
    f:2
}

const obj3 = {
    d:5,
    e:2
}

const result_Object = Object.assign({}, obj1, obj2, obj3)

// console.log(Object.keys(obj1))


//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = Course

console.log(instructor)