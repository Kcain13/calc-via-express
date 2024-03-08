/** Extending the normal JS error 
 * ExpressError - add's a status when we make an instance of it
 * 
 * the error-handling middleware will return this
 */

class ExpressError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
        console.error(this.stack);
    }
}


module.exports = ExpressError;