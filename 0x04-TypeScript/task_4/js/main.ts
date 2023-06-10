///<reference path="subjects/Teacher.ts"/>
///<reference path="subjects/Subject.ts"/>
///<reference path="subjects/Cpp.ts"/>
///<reference path="subjects/React.ts"/>
///<reference path="subjects/Java.ts"/>

const cTeacher: Subjects.Teacher = {
    firstName: "Oluwatofunmi",
    lastName: "Akinola",
    experienceTeachingC: 10
}

export const cpp = new Subjects.Cpp(cTeacher)
export const java = new Subjects.Java(cTeacher)
export const react = new Subjects.React(cTeacher)


console.log('C++')
console.log(cpp.setTeacher(cTeacher))
console.log(cpp.getAvailableTeacher())
console.log(cpp.getRequirements())

console.log('Java')
console.log(java.setTeacher(cTeacher))
console.log(java.getAvailableTeacher())
console.log(java.getRequirements())

console.log('React')
console.log(react.setTeacher(cTeacher))
console.log(react.getAvailableTeacher())
console.log(react.getRequirements())