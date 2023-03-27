export default function getListStudentsIds(studentList) {
  const studentsId = [];
  if (!Array.isArray(studentList)) {
    return studentsId;
  }
  for (const student of studentList) {
    studentsId.push(student.id);
  }
  return studentsId;
}
