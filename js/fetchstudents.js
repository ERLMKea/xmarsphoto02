const out = (any) => console.log(any)

out("im ready to fetch")

const pbGetStudents = document.getElementById("pbGetStudent")

function fetchStudents() {
    out("inside fetchstudents")
    const studentUrl = "http://localhost:8080/students"
    //return  fetch(studentUrl).then(response => response); //just returns the response object
    return  fetch(studentUrl).then(response => response.json()); //returns the result of json()
}

function printStudent(student) {
    out(student)
    out("id=" + student.id)
    out("name=" + student.name)
}

async function doFetchStudents(btn) {
    out("fetch students")
    let students = await fetchStudents();
    out(students); //students is an array
    students.forEach(printStudent)
}

pbGetStudents.addEventListener('click', doFetchStudents)

