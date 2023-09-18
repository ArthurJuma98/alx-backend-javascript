/**
 * Contains the miscellaneous route handlers.
 * @author Arthur Ochilo <https://github.com/ArthurJuma98>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
