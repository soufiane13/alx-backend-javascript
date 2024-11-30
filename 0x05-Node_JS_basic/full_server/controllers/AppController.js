class AppController {
  /**
   * Handles the route to the homepage
   * @param {object} request - The request object
   * @param {object} response - The response object
   * @returns {object} The response object
   */
  static getHomepage(request, response) {
    /**
     * The response to the homepage route
     * @type {string}
     */
    const homepage = 'Hello Holberton School!';
    response.status(200).send(homepage);
  }

}

export default AppController;
module.exports = AppController;
