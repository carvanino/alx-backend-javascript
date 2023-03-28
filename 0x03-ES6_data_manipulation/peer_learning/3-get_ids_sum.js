export default function getStundentIdsSum(studentsList) {
	return students.reduce((sum, students) => sum + students.id, 0)
}
