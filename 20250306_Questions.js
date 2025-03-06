//Create two examples to set the context using student and list of subject attended by students, 
//it should use call and apply do describe both the cases

var Student1 = {
    FullName : "John Doe",
    Age : "30",
    Location : "USA",
    State : "Texas",
    Addres : "123 Main Street"
}

var Student2 = {
    FullName : "Jane Doe",
    Age : "25",
    Location : "USA",
    State : "New York",
    Addres : "456 Broadway"
}

function PrintStudentSessions(msg, session1, session2, session3, session4) {
    return console.log(`
        ${this.FullName}
        ${this.Age}
        ${this.Location}
        ${msg}
        ${session1}
        ${session2}
        ${session3}
        ${session4}`
    )  
}

//Using function.call
PrintStudentSessions.call(Student1, "Student 1 is taking: ", "DSA", "MERNStack", "SpringBoot", "AWS")

var student2Sessions = ["Student2 is taking: ", "Java", "SQL", "MERNStack", "SpringBoot"]
//Using function.apply
PrintStudentSessions.apply(Student2, student2Sessions)