// express
const express = require('express');
const app = express();
app.use(express.json());

// database connection
require('./db/db.js');

// graphql schema
const graphqlSchema = require('./models/graphSchema.js');

// student service
const studentService = require('./services/studentServices.js');

var root = {
    getStudents : () => {
        return studentService.getStudents();
    },
    getStudent: (input) => {
        const student = input.student;
        return studentService.getStudent(student);
    },
    deleteStudent: (input) => {
        const student = input.student;
        return studentService.deleteStudent(student);
    },
    createStudent: (input) => {
        const student = input.student;
        return studentService.createStudent(student);
    },
    updateStudent: (input) => {
        const student = input.student;
        return studentService.updateStudent(student);
    },
};

const getErrorCode = require('./constants/constants.js').getErrorCode;
const express_graphql = require('express-graphql').graphqlHTTP;

app.use('/graphql', express_graphql({
    schema: graphqlSchema,
    rootValue: root,
    graphiql: true,
    customFormatErrorFn: (err) => {
        const error = getErrorCode(err.message);
        const jsonError = {
            message : error.message,
            statusCode : error.statusCode
        }
        return jsonError;
    }
}));

// Staring Server on port 3000
app.listen(3000, () => {
    console.log('server started ...');
});