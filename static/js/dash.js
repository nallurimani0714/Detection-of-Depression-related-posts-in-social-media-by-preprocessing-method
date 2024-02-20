let output = null;
$(document).ready(function(){
    output = $("#consolearea");

});



function generate(){

  
  let attributes = $("#attributes").val();
  KeyRequest(attributes);
}
function keyGeneration(){
  
  $("#attr").css("display","block");
  $("#generatebtn").css("display","block");
   
    if(output != null){
    
        console.log("calling hide div");
        hideDiv();

        $("#console").css("display","block");
       

  

    }
    else{
        console.log("output console is null");
    }



}

function upload(){

  $("#attr").css("display","none");
  $("#generatebtn").css("display","none");
  $("#console").css("display","none");
  $("#dropmehere").css("display","none");
  $("#encryptbtn").css("display","block");
  $("#consolearea").append("Data is loaded Sucessfully")
     $.ajax({
        type: 'GET',
        url: "/Stylometry/Normalize",
        dataType: "text"
     }).done(function(data){
            console.log(data);
             var json = JSON.parse(data);
                  $("#dataVis > thead").html("");
              $("#dataVis > tbody").html("");
        $.each(json,function(index,value){
            console.log(index);
        
             hideDiv();
           if(index == 0){
                $("#dataVis > thead").append("<th>Text </th><th>App Usage</th><th>Web</th><th>Location</th><th> Label </th>");
                $("#dataVis > tbody").append("<tr><td>"+json[index].text + "</td><td>" + json[index].appusage + "</td><td>" + json[index].web+ "</td><td>" + json[index].location + "</td><td>" + json[index].label + "</td></tr>");
            }
             else{
                     $("#dataVis > tbody").append("<tr><td>"+json[index].text + "</td><td>" + json[index].appusage + "</td><td>" + json[index].web+ "</td><td>" + json[index].location + "</td><td>" + json[index].label + "</td></tr>");
          
            }
        });
      //output.append(timeStamp() + " " + data);
     });
}
function standardize(){
  $("#attr").css("display","none");
  $("#generatebtn").css("display","none");
  $("#console").css("display","none");
  $("#dropmehere").css("display","none");
  $("#encryptbtn").css("display","block");
  $("#consolearea").append("Data is loaded Sucessfully")
  hideDiv();
    $.ajax({
      type: 'GET',
      url: "/Stylometry/standardize",
      dataType: "text",

  }).done(function(data){
      console.log("data" + data);
                        $("#dataVis > thead").html("");
              $("#dataVis > tbody").html("");
      var json = JSON.parse(data);
        $.each(json,function(index,value){
            console.log(index);
            if(index == 0){
                $("#dataVis > thead").append("<th>Text </th><th>App Usage</th><th>Web</th><th>Location</th><th> Label </th>");
                $("#dataVis > tbody").append("<tr><td>"+json[index].text + "</td><td>" + json[index].appusage + "</td><td>" + json[index].web+ "</td><td>" + json[index].location + "</td><td>" + json[index].label + "</td></tr>");
            }
             else{
                     $("#dataVis > tbody").append("<tr><td>"+json[index].text + "</td><td>" + json[index].appusage + "</td><td>" + json[index].web+ "</td><td>" + json[index].location + "</td><td>" + json[index].label + "</td></tr>");
          
            }
        });
      //output.append(timeStamp() + " " + data);
    
  });
}


function load(){
   $("#dataVis > thead").html("");
  $("#dataVis > tbody").html("");
  $("#attr").css("display","none");
  $("#generatebtn").css("display","none");
  //$("#console").css("display","block");
  $("#dropmehere").css("display","block");
  $("#encryptbtn").css("display","block");
  //$("#consolearea").append("Data is loaded Sucessfully")
  hideDiv();

}

function  visualize(){


 
    $.ajax({
        type: 'GET',
        url: "/Stylometry/visualzie",
     
        dataType: "text",

    }).done(function(data){
                          $("#dataVis > thead").html("");
              $("#dataVis > tbody").html("");
        
        
        console.log("data" + data);
        var json = JSON.parse(data);
        $.each(json,function(index,value){
            console.log(index);
            if(index == 0){
                $("#dataVis > thead").append("<th>Text </th><th>App Usage</th><th>Web</th><th>Location</th><th> Label </th>");
                $("#dataVis > tbody").append("<tr><td>"+json[index].text + "</td><td>" + json[index].appusage + "</td><td>" + json[index].web+ "</td><td>" + json[index].location + "</td><td>" + json[index].label + "</td></tr>");
            }
             else{
                    $("#dataVis > tbody").append("<tr><td>"+json[index].text + "</td><td>" + json[index].appusage + "</td><td>" + json[index].web+ "</td><td>" + json[index].location + "</td><td>" + json[index].label + "</td></tr>");
          
             }
        });
       
    });

}
function timeStamp() {
    // Create a date object with the current time
      var now = new Date();
    
    // Create an array with the current month, day and time
      var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
    
    // Create an array with the current hour, minute and second
      var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
    
    // Determine AM or PM suffix based on the hour
      var suffix = ( time[0] < 12 ) ? "AM" : "PM";
    
    // Convert hour from military time
      time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
    
    // If hour is 0, set it to 12
      time[0] = time[0] || 12;
    
    // If seconds and minutes are less than 10, add a zero
      for ( var i = 1; i < 3; i++ ) {
        if ( time[i] < 10 ) {
          time[i] = "0" + time[i];
        }
      }
    
    // Return the formatted string
      return date.join("/") + " " + time.join(":") + " " + suffix;
    }
function hideDiv(){


    for(let i = 9; i <= 12; i ++ ){
      $("#page-top > div > div.container-fluid > div:nth-child(" + i + ")").hide();
    }
    

}