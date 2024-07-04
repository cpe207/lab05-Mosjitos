// assign interface/type to the function definition properly
function findTopNames(students) {
    var b = students.filter(function (point) { return point.score > 8; });
    var a = b.map(function (index) { return index.name; });
    return a;
}
// assign interface/type to the student1 object properly
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
