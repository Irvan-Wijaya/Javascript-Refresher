let defaultStudents = ["van", "jass", "sher"];

function getDataFromDB(callback) {
  setTimeout(() => {
    let students = ["char", "vin", "lex"];
    callback(students);
  }, 1500);
}

function mergeData(data) {
  let result = defaultStudents.concat(data);
  console.log(result);
}

getDataFromDB(mergeData);
