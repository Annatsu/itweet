/** @typedef {import('commander').Command} Commander */

// Node Modules
const R = require('ramda');


/**
 * Configures the program CLI usage and behavior.
 * @param {Commander} program - a valid instance of the Commander.js dependency
 * @param {object} parseObject - object to be parsed by Commander.
 *      Normaly, this is `process.argv`
 */
const configureCli =
  (program, parseObject) => {
    R.pipe(
        // Program Version
        attachVersion,

        // User Management Commands
        attachAddUserCommand,
        attachRemoveUserCommand,

        // Parses the arguments object
        (p) => p.parse(parseObject)
    )(program);
  };


/**
 * Attaches a version number to the program.
 * @param {Commander} program - a valid instance of the Commander.js dependency
 * @return {Commander}
 */
const attachVersion =
  (program) => program.version('0.0.1');


/**
 * Attach the `user add` command.
 * @example `itweet user add {username}`
 * @param {Commander} program - a valid instance of the Commander.js dependency
 * @return {Commander}
 */
const attachAddUserCommand =
  (program) => {
    program
        .command('login')
        .description('Login into your Twitter account')
        .action(() => {
          console.log('login command');
        });

    return program;
  };


/**
 * Attach the `user remove` command.
 * @example `itweet user remove {username}`
 * @param {Commander} program - a valid instance of the Commander.js dependency
 * @return {Commander}
 */
const attachRemoveUserCommand =
  (program) => {
    program
        .command('logout')
        .description('Logout from the current Twitter account')
        .action(() => {
          console.log('logout command');
        });

    return program;
  };


module.exports = configureCli;
