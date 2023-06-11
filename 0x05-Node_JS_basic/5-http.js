const fsPromises = require('fs').promises;
const http = require('http');
// const countStudents = require('./2-read_file');

const { argv } = process;
console.log(argv[2]);

async function* countStudents(path) {
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
    yield (`Number of students: ${totalStudent}`);
    for (const [field, value] of Object.entries(fields)) {
      const list = value.firstName.join(', ');
      // console.log(`Number of students in ${field}: ${fields[field].count}. List: ${list}`);
      yield (`Number of students in ${field}: ${fields[field].count}. List: ${list}`);
    }
    // console.log(fields)
  } catch (err) {
    // console.error(err);
    throw new Error('Cannot load the database');
  }
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
        const studentInfo = countStudents(argv[2]);
        for await (const item of studentInfo) {
          res.write(`${item}\n`);
        }
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
