// Student 
const Student = require('./../models/student.js');
const { errorName } = require('./../constants/constants.js');

// Services
function getStudents(){
    const students = Student.find();
    return students;
}

function getStudent(student){
    const data = Student.findById(student.id).then(
        function(data){
            if(data == null){
                throw new Error(errorName.STUDENT_NOT_FOUND);
            }
            return data;
        }
    ).catch(function(error){
        return error;
    });
    return data;
}

function deleteStudent(student){
    const data = Student.findByIdAndDelete(student.id).then(
        function(data){
            if(data == null){
                throw new Error(errorName.STUDENT_NOT_FOUND);
            }
            return data;
        }
    ).catch(function(error){
        return error;
    });
    return data;
}

function createStudent(student){
    const newStudent = new Student({
        name : student.name
    });
    return newStudent.save();
}

function updateStudent(student){
    const data = Student.findByIdAndUpdate(student.id,student).then(
        function(data){
            if(data == null){
                throw new Error(errorName.STUDENT_NOT_FOUND);
            }
            return data;
        }
    ).catch(function(error){
        return error;
    });
    return data;
}

// Exports
module.exports = {
    getStudents,
    getStudent,
    deleteStudent,
    createStudent,
    updateStudent
}