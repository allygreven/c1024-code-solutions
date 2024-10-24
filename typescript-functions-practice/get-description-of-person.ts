/* exported getDescriptionOfPerson */
interface Person2 {
  name: string;
  occupation: string;
  birthPlace: string;
}

function getDescriptionOfPerson(person2: Person2): string {
  return `${person2.name} is a ${person2.occupation} from ${person2.birthPlace}`;
}
