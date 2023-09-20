class ApiError extends Error {
    constructor(statusCode, message){
        super();
        this.statusCode = statusCode;
        this.mes = message;
    }
}

module.exports = ApiError;