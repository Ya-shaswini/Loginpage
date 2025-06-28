console.log("hello")
let email;
let code;

document.getElementById("btn1").onclick = function() {
    console.log("btn works")
    email = document.getElementById("inp1").value
    code = document.getElementById("inp2").value
    console.log(email)
    console.log(code)
    if(email =="admin"  || code =="admin"){
        console.log("this is admin")
        document.getElementById("text").innerHTML = "login successfull"
    }else{
        console.log("this is not admin")
        document.getElementById("text").innerHTML = "login failed"
    }
}
