function hello() {
    var num1 = prompt("Enter a first number: ", "");
    var num2 = prompt("Enter a second number: ", "");
    var num1Int = parseInt(num1);
    var num2Int = parseInt(num2);

    if(num1Int<num2Int){
        document.write("number 2 is bigger");
    }else{
        document.write("number 1 is bigger or same");
    };
    
    var age = prompt("Enter your age: ", "");
    var ageInt = parseInt(age);
    if(ageInt>18){
        document.write("<p> you are over than 18 </p>");
    }else{
        document.write("<p> you are under or 18 years old </p>");
    };
}
