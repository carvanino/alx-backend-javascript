export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const studentInfo = studentsList.filter((students) => students.location === city)
    .map((grades) => {
      const student = grades;
      for (const grade of newGrades) {
        if (student.id === grade.studentId) {
          student.grade = grade.grade;
        }
      }

      if (!student.grade) {
        student.grade = 'N/A';
      }
      return student;
    });

  return studentInfo;
}
