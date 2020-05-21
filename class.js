class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name= sName;
        this.school="Govt science school"
    }
}

const student1      = new Student(7, "shohag");
const underGraduate = new Student(15, "saidul");
console.log(student1, underGraduate);