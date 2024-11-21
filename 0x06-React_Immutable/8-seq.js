import { Seq } from 'immutable';

// Filter students with a score >= 70 and print their names with capitalized first letters
export function printBestStudents(grades) {
  Seq(grades) // Convert the grades object to a Seq
    .filter(student => student.score >= 70) // Filter students with a score >= 70
    .forEach(student => {
      const capitalizedFirstName = student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1);
      const capitalizedLastName = student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1);
      console.log(`${capitalizedFirstName} ${capitalizedLastName}`); // Print the names
    });
}
