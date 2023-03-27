export default function getListStudentsIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  const studentsId = studentList.map((student) => student.id);
  return studentsId;
}
