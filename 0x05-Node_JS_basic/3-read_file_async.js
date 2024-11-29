const fs = require('fs');

/**
 * Reads the student database from a file and logs the following information:
 *   1. The total number of students
 *   2. The number of students in each field
 *   3. The list of students in each field
 * @param {String} dataPath - The path to the student database file
 * @returns {Promise<void>}
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');

      /**
       * Split the database into groups by field
       * @type {Object.<string, Array.<Object>>}
       */
      const studentGroups = {};

      /**
       * The names of the fields in the database
       * @type {Array.<string>}
       */
      const dbFieldNames = fileLines[0].split(',');

      /**
       * The names of the fields in the database that correspond to student properties
       * @type {Array.<string>}
       */
      const studentPropNames = dbFieldNames
        .slice(0, dbFieldNames.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');

        /**
         * The values of the student properties
         * @type {Array.<string>}
         */
        const studentPropValues = studentRecord
          .slice(0, studentRecord.length - 1);

        /**
         * The field name
         * @type {string}
         */
        const field = studentRecord[studentRecord.length - 1];

        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }

        /**
         * The entries of the student object
         * @type {Array.<Array.<string,string>>}
         */
        const studentEntries = studentPropNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);

        /**
         * The student object
         * @type {Object}
         */
        const student = Object.fromEntries(studentEntries);
        studentGroups[field].push(student);
      }

      const totalStudents = Object
        .values(studentGroups)
        .reduce((pre, cur) => (pre || []).length + cur.length);
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
