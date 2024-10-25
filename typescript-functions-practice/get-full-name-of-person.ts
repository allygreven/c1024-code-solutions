/* exported getFullNameOfPerson */
interface Person1 {
  firstName: string;
  lastName: string;
}

function getFullNameOfPerson(person1: Person1): string {
  return `${person1.firstName} ${person1.lastName}`;
}
