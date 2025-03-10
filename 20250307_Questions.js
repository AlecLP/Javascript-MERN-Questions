//Use the same student object we had for call and apply and try adding them in setTimeout of Student object with function
//similar to above User.printInfo
//we need to check after 2 second timeout how it returns the value
//then fix the same by a copied variable and using bind and see the difference in light of scope and bind (as above)

var Student1 = {
    FullName : "John Doe",
    Age : "30",
    Location : "USA",
    State : "Texas",
    Addres : "123 Main Street",

    printInfo : function () {
        console.log(this)
        console.log("Outer", this.FullName);

        var currentFullName = this.FullName
        setTimeout(function (){
            console.log(this)
            console.log("No bind, no var: ", this.FullName);
            
            console.log("No bind, using var: ", currentFullName);
        }, 2000)

        this.FullName = "Jane Doe"

        setTimeout(function () {
            console.log(this);
            console.log("Bind: ", this.FullName);
            
        }.bind(this), 3000);
    } ,
}

Student1.printInfo()