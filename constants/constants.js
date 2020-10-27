errorName = {
    STUDENT_NOT_FOUND: 'STUDENT_NOT_FOUND'
}

errorType = {
    STUDENT_NOT_FOUND: {
        message: 'Student Not Found',
        statusCode: 400
    },
    UNDEFINED: {
        message: 'Something Went Wrong',
        statusCode: 500
    },
}

const getErrorCode = (errorName) => {
    if(!errorType.hasOwnProperty(errorName)){
        errorName = "UNDEFINED";
    }
    return errorType[errorName]
}

module.exports = {
    errorName,
    errorType,
    getErrorCode
}