export default function getStudentIdsSum(studentsList) {
  const idSum = studentsList.reduce((sum, student) => sum + student.id, 0);
  return idSum;
}
