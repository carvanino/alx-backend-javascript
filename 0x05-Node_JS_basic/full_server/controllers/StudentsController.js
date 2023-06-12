import readDatabase from '../utils';

const { argv } = process;
if (argv.length < 2) {
  argv[2] = '';
}

const path = argv[2];

export default class StudentController {
  static async getAllStudents(request, response) {
    response.status(200);
    // console.log(path);
    const data = await readDatabase(path);
    response.send(data);
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
      const d = data.split('\n');
      const studentsWithMajor = d.filter((entry) => entry.includes(major));
      // console.log(studentsWithMajor);
      const stripa = studentsWithMajor[0].split(':');
      // console.log(stripa);
      const students = stripa.slice(-1);
      // console.log(d);
      response.send(`List:${students}`);
    }
  }
}
