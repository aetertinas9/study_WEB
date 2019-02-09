/**
 * Dependencies
 */

const path = require('path');
const development = require('./development');
//const production = require('./production');


const defaults = {
    root: path.join(__dirname, '..')
}

/**
 * Expose
 */
module.exports = {
  //  production: Object.assign({}, production, defaults),
    development: Object.assign({}, development, defaults)

}[process.env.NODE_ENV || 'development']
