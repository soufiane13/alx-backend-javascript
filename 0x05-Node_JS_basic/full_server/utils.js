import fs from 'fs';

/**
 * @description Reads the database from a given path and returns the data.
 * @param {String} dataPath - The path to the database file.
 * @returns {Promise<Object>} - An object with the database contents.
 * @throws {Error} - In case the database cannot be loaded.
 */
const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  /**
   * @description Check if the path is valid.
   */
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }

  /**
   * @description Read the file and resolve the promise with the data.
   */
  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
      /**
       * @description Check for errors.
       */
      if (err) {
        reject(new Error('Cannot load the database'));
      }

      /**
       * @description Convert the data to an object.
       */
      if (data) {
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');

        /**
         * @description The first line of the file contains the field names.
         */
        const dbFieldNames = fileLines[0].split(',');


        /**
         * @description The student properties are all the field names except the last one.
         */
        const studentPropNames = dbFieldNames
          .slice(0, dbFieldNames.length - 1);

        /**
         * @description The database is an object with the field as the key and a list of students as the value.
         */
        const studentGroups = {};


        /**
         * @description Iterate over the file lines and create the database entries.
         */
        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }

          /**
           * @description Create the student entries.
           */
          const studentEntries = studentPropNames
            .map((propName, idx) => [propName, studentPropValues[idx]]);

          studentGroups[field].push(Object.fromEntries(studentEntries));
        }

        /**
         * @description Resolve the promise with the data.
         */
        resolve(studentGroups);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;
