function collect() {

    console.log("Button Ok");
    var d = null;
    $.ajax({
        url: "/preprocess",
        type: "GET",
        dataType: "text",
        processData: false,
        contentType: false,
        success: function(data) {
            a = new Array();
            data = $.parseJSON(data);
            $.each(data,function(index,value){
                  d = buildTabledata(data)
                  $.each(data[index],function(key,value){
                       if($.inArray(key,a) == -1){
                            a.push(key)

                       }

                        console.log(d)
                  });

            });


            console.log("Key = " + a);
            var s = buildTableHeading(a)

            console.log("s = " + d);
            $(".table > thead").append(s);
            $(".table > tbody").append(d);
            console.log(data)

        },
        error: function() {


        }
    });

}

function buildTableHeading(data){

  var s = "";
  $.each(data,function(index,value){
       s += "<th>"+data[index]+"</th>";
  });
  console.log(s)
  return s;

}
function buildTabledata(data){

  console.log("Data = " + data);
  var s = "";
  $.each(data,function(index,value){
        $.each(data[index],function(key,v){
                console.log(data[index]);
                s += "<td>"+data[index].key+"</td>";

        });

  });
  console.log(s)
  return s;

}
