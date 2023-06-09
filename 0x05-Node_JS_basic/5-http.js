const fsPromises = require('fs').promises;
const http = require('http');

const { argv } = process;
if (argv.length < 2) {
  argv[2] = '';
}
// console.log(argv[2]);

async function countStudents(path) {
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
    // console.log(fields)
  } catch (err) {
    // console.error(err);
    return new Error('Cannot load the database').message;
  }
  return (result.join('\n'));
}

const hostname = 'localhost';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.end('Hello Holberton School!');
      break;
    case '/students':
      res.statusCode = 200;
      res.write('This is the list of our students\n');
      try {
        const studentInfo = await countStudents(argv[2]);
        res.write(studentInfo);
        // for await (const item of studentInfo) {
        //   res.write(`${item}\n`);
        // }
        res.end();
      } catch (error) {
        console.error(error);
        res.statusCode = 500;
      }
      break;
    default:
      res.statusCode = 404;
      res.end('Not Found');
      break;
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
module.exports = app;
