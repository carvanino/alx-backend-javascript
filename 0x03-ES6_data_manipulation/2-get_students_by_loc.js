export default function getStudentsByLocation(studentList, city) {
  const studentInCity = studentList.filter((student) => student.location === city);
  return studentInCity;
}
