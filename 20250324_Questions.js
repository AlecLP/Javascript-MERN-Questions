let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "dontnet"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag

let javascriptPersons = persons.filter(personObj => personObj.tags == "javascript")
console.log(javascriptPersons)

//2. List the name of person using java and put programmer after their name, change the name key to Developer

let javaDevelopers = persons.map((personObj) => {
    if(personObj.tags == "java"){
        return {"Developer" : personObj.name +" programmer"}
    }
}).filter(names => names != undefined)
console.log(javaDevelopers)

//3. If we have anyone with tag python

let pythonDevelopers = persons.some(personObj => personObj.tags == "python")
console.log(pythonDevelopers)

//4. Find the number of unique tags and their count present in list

let uniqueTags = persons.reduce((prev, cur, index, arr) => {
    prev[cur.tags] = prev[cur.tags] ? prev[cur.tags] += 1 : 1
    return prev
}, new Set()) //initialize the value to be present in prev for the first time
console.log(uniqueTags)