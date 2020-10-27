const { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Student {
        _id: String
        name: String
    }

    input StudentInput{
        id: String
        name: String
    }

    type Query {
        getStudents:[Student]
        getStudent(student: StudentInput):Student
    }

    type Mutation {
        createStudent(student: StudentInput):Student
        deleteStudent(student: StudentInput):Student
        updateStudent(student: StudentInput):Student
    }
`);

module.exports = schema;