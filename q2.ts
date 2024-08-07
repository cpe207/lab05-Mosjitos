// define interface for Student object
interface Student{
  name : string;
  score : number;
}

// assign interface/type to the function definition properly
function findTopNames(students : any) {
  let b = students.filter((point : any)=> point.score > 8);
  let a = b.map((index : any)=> index.name);
  return a ;
}

// assign interface/type to the student1 object properly
const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;
