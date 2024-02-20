/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function login(){
    console.log("clicked");
    let user = $("#email").val();
    let pass = $("#password").val();
    console.log(user + "\n" + pass);
    let status = validateInput(user,pass);
    console.log(status);
    if(status && tryLogin(user,pass)){
        //login sucessfull
         window.location = "index.html";
        
    }
    



}

function tryLogin(user,pass){
    if(user == "admin" && pass == "admin"){
        return true;
    }
    else{
        return false;
    }

}
function validateInput(user,pass){
    
    if((user != null && pass != null) && (user != undefined && pass != undefined)){
        return true
    }
    else{
        return false;
    }
      

}

