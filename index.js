// Node Modules
const program = require('commander');

// Inner Modules
const configureCli = require('./configure_cli');


// Setup CLI behavior.
configureCli(program, process.argv);
