// Student 
const Student = require('./../models/student.js');

// Services
function getStudents(){
    const students = Student.find();
    return students;
}

function getStudent(student){
    const data = Student.findById(student.id).then(
        function(data){
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
            return data;
        }
    ).catch(function(error){
        return error;
    });
    return data;
}

// Exports
module.exports.getStudents = getStudents
module.exports.getStudent = getStudent;
module.exports.deleteStudent = deleteStudent;
module.exports.createStudent = createStudent;
module.exports.updateStudent = updateStudent;