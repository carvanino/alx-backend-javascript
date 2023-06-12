import { promises as fsPromises } from 'fs';

// const app = express();
// const { argv } = process;
// if (argv.length < 2) {
//   argv[2] = '';
// }
async function readDatabase(path) {
  const result = [];
  try {
    const data = await fsPromises.readFile(path, 'utf-8');
    const lines = data.split('\n');
    const rows = lines.slice(1, -1);
    // console.log(rows);
    const totalStudent = rows.length;
    const fields = {};
    for (const row of rows) {
      const studentInfo = row.split(',');
      const field = studentInfo.slice(-1);
      // console.log(field)
      if (!(field[0] in fields) && field[0] !== '') {
        fields[field[0]] = {};
        fields[field[0]].count = 1;
        fields[field[0]].firstName = [];
        fields[field[0]].firstName.push(studentInfo[0]);
      } else if (field[0] !== '') {
        fields[field[0]].count += 1;
        fields[field[0]].firstName.push(studentInfo[0]);
      }
    }
    // console.log(`Number of students: ${totalStudent}`);
    result.push(`Number of students: ${totalStudent}`);
    for (const [field, value] of Object.entries(fields)) {
      const list = value.firstName.join(', ');
      // console.log(`Number of students in ${field}: ${fields[field].count}. List: ${list}`);
      result.push(`Number of students in ${field}: ${fields[field].count}. List: ${list}`);
    }
    return (result.join('\n'));
    // console.log(fields)
  } catch (err) {
    return new Error('Cannot load the database');
  }
}

export default readDatabase;
