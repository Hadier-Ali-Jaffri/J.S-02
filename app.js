// alert('===CHAPTER 21 to 25===llll')

// var name1 = prompt("Enter first name")
// var name2 = prompt("Enter last name")
//     alert(name1 + " " + name2)




// var str = prompt("Your favorite phone is");
// document.write("Length of String is: "+ str+" "+ str.length)


// alert("task-03=====================")

// var name = ("Pakstani")
// document.write("String: Pakistani <br> Index of n:"+(name.indexOf("n")))


// alert("task-04=====================")
 

// var name = ("Hello World")
// document.write("String: Hello World <br> Index of l:"+(name.lastindexOf("l"))

// var firstName = prompt("enter name")
// var firstChar = firstName.slice(0, 1);
// document.write(firstChar)



// var lastName = prompt("enter name")
// var lastChar = lastName.slice(0, 1);
// document.write(lastChar)


// var firstName = prompt("enter")
// var firstChar = firstName.charAt(0)
// document.write(firstChar)


// var lastName = prompt("enter")
// var lastChar = name.charAt(name.length - 1);
// document.write(lastChar)




// var value = prompt("enter value")
// for (var i = 0; i < value.length; i++) {
//      if (value.charAt(i) === value) {
//      alert("Exclamation point found!");
//      break;
//   }
//  }
//    document.write(value)



// alert("Task-07")
// var text = ("Hyderabad")
// var text1 = ("Hyderabad","Islamabad")
// document.write(text1)


// alert("Task-08")

// var para = ("Ali and Sami are best friends. They play cricket and football together.")
// var para1 = para.replace(/and/g,"&")
// document.write(para1)





// alert("Task-10")

// var name = ("peanuts"); 
// name = name.toUpperCase();
// document.write(name)

// alert("Task-12")
// var num = "35.36"
// num = num.toString();
// newNum = num.split ('.').join ("");
// document.write("Number:" +num);
// document.write("<br>");
// document.write("Result:" +newNum);



// alert("Task-13")



// alert("Task-14")
// var items = ["cake","apple pie","cookie","chips","patties"]

// var search = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?")

// if(items.indexOf(search) !== -1){
//     alert("yes " + search + " is available")
// }else{
//     alert("no " + search + " is not available")
// }


// alert("Task-16")

// var uni = ("University of Karachi")
// var split = uni.split("")
// document.write(split)


// alert("Task-17")

// var name = ("Pakistan")

// document.write("Pakistan <br> last character of Pakistan is :" +name.charAt(7))


// alert("Task-18")
// str = "the quick brown fox jumps over the lazy dog";
// // alert(str.split('the').length-1);
// document.write("<b> Text: the quick brown fox jumps over the lazy dog. <br> occurrence of word the is: </b>")
// document.write( str.split('the').length-1)




// alert("CHAPTER NO 26-30")
// alert("taks-01")


// var num = 3.45214
// var round = Math.round(num)
// var ceil = Math.ceil(num)
// var floor = Math.floor(num)
//  document.write("round off value " +round,"<br> ceil value:" + ceil,  "<br> floor value: " + floor)


// alert("Task-02")



// alert("Task-04")

// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('You rolled a ' + diceRoll);


// alert("Task-05")
// var head = prompt("enter heads names")
// var tail = prompt("enter tail name")
// var toss = Math.random() *2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     alert("Heads " + head + " win the toss")
// }else{
//     alert("Tail " + tail + " win the toss")
// }


// alert(Task-06)

// int max = 100;
// int min = 1;
// int showMe = min + randomNum.nextInt(max);
// alert(showMe) 













// alert("CHAPTER-31 TO 34")


// alert("Task-01")

// var a = new Date()
// document.write(a)

// alert("task-2")
// var a = new Date()
// var currMonth = a.getMonth()
// alert(currMonth) 

// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// const d = new Date();
// document.write("The current month is " + monthNames[d.getMonth()]);




// alert("chapter 35 to 38")
// alert("task - 02")

// var nam = prompt("enter first name")
// var nam1 = prompt("enter last name")
// function greet(){
//     document.write("Helo: "+nam + nam1)
// }
// greet();



// alert("task-3")
// function sum(a,b){
//     alert(a + b)
// }
// sum(5,5)



// alert("task-4")

// function calc (num1,opr,num2){
//     if(opr === "+"){
//         return num1 + num2
//     }
//     else if (opr === "-"){
//         return num1 - num2
//     }
//     else if (opr === "*"){
//         return num1 * num2
//     }
//     else{
//         return "Incorrect!"
//     }
// }
// var ans = calc(10,"+",4)
// var ans2 = calc(50,"-",35)
// var ans3 = calc(8,"%",74)
// alert(ans);
// alert(ans2);
// alert(ans3);