
class ApiError extends Error {
    constructor (
        statusCode,
        message = "message sothing went wrong !!!",
        error = [],
        statck  =""
    )
    {     
        super(message);
        this.statusCode = statusCode,
        this.data = null,
        this.message = message,
        this.success = false,
        this.error = error
    }
}



export{ApiError}