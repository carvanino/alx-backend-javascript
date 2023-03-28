export default function getListStudents() {
  const studentA = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const studentB = { id: 2, firstName: 'James', location: 'Columbia' };
  const studentC = { id: 5, firstName: 'Serena', location: 'San Francisco' };

  return [studentA, studentB, studentC];
}

getListStudents();
