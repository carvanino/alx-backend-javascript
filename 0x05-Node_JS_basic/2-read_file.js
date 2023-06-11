const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
	  	lines = data.split('\n');
	  	rows = lines.slice(1, -1);
	  	// console.log(rows);
	  	totalStudent = rows.length;
	  	fields = {};
	  	for (row of rows) {
		  	studentInfo = row.split(',');
		  	field = studentInfo.slice(-1);
		  	// console.log(field)
		  	if (!(field[0] in fields) & field[0] !== '') {
        fields[field[0]] = {};
			  	fields[field[0]].count = 1;
			  	fields[field[0]].firstName = [];
			  	fields[field[0]].firstName.push(studentInfo[0]);
		  	} else if (field[0] !== '') {
			  	fields[field[0]].count += 1;
			  	fields[field[0]].firstName.push(studentInfo[0]);
		  	}
	  	}
	  	console.log(`Number of students: ${totalStudent}`);
	  	for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].count}. List: ${fields[field].firstName.join(', ')}`);
    }
	  	// console.log(fields)
  	} catch (err) {
    console.error(err);
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
