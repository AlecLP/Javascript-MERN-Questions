//Create two example of your own to make a map and a weak map

let stringKey1 = "key1", stringKey2 = "key2", stringKey3 = "key3"
let weakMap = new Map()
weakMap.set(stringKey1, "value1")
weakMap.set(stringKey2, "value2")
weakMap.set(stringKey3, "value3")
console.log(weakMap.entries())

let objectKey1 = {Key : "key1"}, objectKey2 = {Key : "key2"}, objectKey3 = {Key : "key3"}
let strongMap = new Map()
strongMap.set(objectKey1, "value1")
strongMap.set(objectKey2, "value2")
strongMap.set(objectKey3, "value3")
console.log(strongMap.entries())

//and a list of unique names of 10 states of your favorite country you wish to visit on a world tour

let states = new Set(["Alaska", "California", "Hawaii", "New York", "Idaho", "New Mexico", "Florida", "Maine", "Washington", "Michigan"])
states.add("Alaska")
console.log(states)