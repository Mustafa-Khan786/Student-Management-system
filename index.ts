 

class School{
    name:string
    students:Student[]=[];
    teachers:Teacher[]=[];
    addStudent(stdObj:Student){
        this.students.push(stdObj)
    }
    addTeachers(techObj:Teacher){
        this.teachers.push(techObj)
    }
    constructor(name:string){
        this.name=name
    }
}

class Student{
    name:string
    age:number
    schoolName:string
    constructor(name:string,age:number,schoolName:string){
        this.name=name
        this.age=age
        this.schoolName=schoolName
    }
}
class Teacher extends Student{
    email:string=""
    contact:string=""
    addInfo(email:string,contact:string){
        this.email=email
        this.contact=contact
    }
}
// create two schools
let school1 = new School("ISK")
let school2 = new School("The Educator")

// adding students detail
let s1 = new Student("mustafa",17,school1.name)
let s2 = new Student("ayan",14,school1.name)
let s3 = new Student("rayyan",14,school2.name)
let s4 = new Student("shaheer",14,school2.name)

// adding teachers detail
let t1 = new Teacher("Yasir But",65,school1.name)
let t2 = new Teacher("Sir Sameer",60,school2.name)

// adding more information about teachers in teacher section
t1.addInfo("yasir@gmail.com","0333123456")
t2.addInfo("sameer@gmail.com","0300123456")

// putting students and teachers data in schools
school1.addStudent(s1)
school1.addStudent(s2)
school2.addStudent(s3)
school2.addStudent(s4)
school1.addTeachers(t1)
school2.addTeachers(t2)

console.log(school1,school2)








