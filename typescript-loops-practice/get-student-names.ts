/* exported getStudentNames */
interface Student {
  name: string;
}

function getStudentNames(students: Student[]): string[] {
  const newArray: string[] = [];
  for (let i = 0; i < students.length; i++) {
    newArray.push(students[i].name);
  }
  return newArray;
}
