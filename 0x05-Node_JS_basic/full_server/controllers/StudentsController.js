import readDatabase from '../utils';

const { argv } = process;
// argv[2] = 'database.csv';
// if (argv.length < 2) {
//   argv[2] = '';
// }

const path = argv[2];
// console.log(path)

export default class StudentController {
  static async getAllStudents(request, response) {
    // console.log(path);
    const data = await readDatabase(path);
    if (data instanceof Error) {
      response.status(500);
      response.send(data.message);
    } else {
      response.status(200);
      response.send(data);
    }
    // console.log(data);
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    // response.status = 200;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500);
      response.send('Major parameter must be CS or SWE');
    } else {
      const data = await readDatabase(path);
      if ((data instanceof Error)) {
        response.status(500);
        response.send(data.message);
        // console.log(data.message);
      } else {
        const d = data.split('\n');
        const studentsWithMajor = d.filter((entry) => entry.includes(major));
        // console.log(studentsWithMajor);
        const stripa = studentsWithMajor[0].split(':');
        // console.log(stripa);
        const students = stripa.slice(-1);
        // console.log(d);
        response.status(200);
        response.send(`List:${students}`);
      }
    }
  }
}
