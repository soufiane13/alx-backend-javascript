/**
 * @file This file contains a class StudentsController with two methods for
 * handling two different API endpoints.
 *
 * @author Alexey Gusev (TheSpad)
 * @since 2019-11-17
 */

import readDatabase from '../utils';

/**
 * A collection of valid majors.
 * @type {Array.<string>}
 */
const VALID_MAJORS = ['CS', 'SWE];

/**
 * A class representing a controller for students-related API endpoints.
 */
class StudentsController {
  /**
   * Returns a list of all students for all majors.
   *
   * @param {Object} request - An Express request object.
   * @param {Object} response - An Express response object.
   *
   * @since 2019-11-17
   */
  static getAllStudents(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(dataPath)
      .then((studentGroups) => {
        const responseParts = ['This is the list of our students'];
        const cmpFxn = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        for (const [field, group] of Object.entries(studentGroups).sort(cmpFxn)) {
          responseParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  /**
   * Returns a list of all students for a specified major.
   *
   * @param {Object} request - An Express request object.
   * @param {Object} response - An Express response object.
   *
   * @since 2019-11-17
   */
  static getAllStudentsByMajor(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(dataPath)
      .then((studentGroups) => {
        let responseText = '';

        if (Object.keys(studentGroups).includes(major)) {
          const group = studentGroups[major];
          responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }
        response.status(200).send(responseText);
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

/**
 * Exports the class as a module.
 * @type {StudentsController}
 */
export default StudentsController;
module.exports = StudentsController;
