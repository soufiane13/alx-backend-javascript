import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Maps the routes to the corresponding controllers
 * @param  {Object} app the Express instance
 */
const mapRoutes = (app) => {
  /**
   * GET /
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
   */
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
  /**
   * GET /students
   * Get all students
   */
};
  /**
   * GET /students/:major
   * Get all students by major
   */

export default mapRoutes;
module.exports = mapRoutes;
