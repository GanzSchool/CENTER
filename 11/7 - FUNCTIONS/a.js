function findHighSchoolStudents(students) {
    const highSchoolStudents = [];
  
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
  
      if (student.grade >= 9) {
        highSchoolStudents.push(student.name);
      }
    }
  
    return highSchoolStudents;
  }
  
  const students = [
    { name: 'Anna', grade: 5 },
    { name: 'Bence', grade: 9 },
    { name: 'Csilla', grade: 11 },
    { name: 'Dani', grade: 7 },
    { name: 'Emma', grade: 12 }
  ];
  
  console.log(findHighSchoolStudents(students));