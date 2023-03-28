export default function updateStudentGradeByCity(studentsList, city, newGrades) {
	return studentsList.filter(students => students.location === city)
	.map(student => {
		for (const grade of newGrades) {
			if (grade.studentId === student.id) {
				student.grade = grade.grade
			}
		}
		return student
	})
}
