// script for password validation
$(document).ready(function () {
    // $("#btn1").click(function () {
        $("#confirmpassword").keyup(function(){
        var password = $("#password").val();
        // console.log(password);
        var confirmpassword = $("#confirmpassword").val();
        // console.log(confirmpassword);
        if (password == confirmpassword) {
            $("#msg1").html("");
            $("#password").val('');
            $("#confirmpassword").val('');
        }
        else {
            $("#msg1").html("password didnt match");
            $("#msg1").css("color", "red");
        }
    });
    // alert on paragraph
    $("#para1").click(function () {
        alert("clicked me");
    });
    // image show and hide in button
    $("#prev").click(function () {
        $("#img1").show();
        $("#img2").hide();
    });
    $("#next").click(function () {
        $("#img2").show();
        $("#img1").hide();
    });
// text field color gets changed if we click on submit button
    $("#submit").click(function () {
        var text1 = $("#text1").val();
        var text2 = $("#text2").val();
        if (text1 == '') {
            alert("your field is blank ");
            $("#text1").css("background-color", "red");
            $("#text1").focus();
        }
        else if(text2 == '')
        {
            alert("your field is blank ");
            $("#text2").css("background-color", "red");
            $("#text2").focus();
        }
        else if(text1 != '')
        {
            $("#text1").css("background-color","white");
        }
        else if(text2 != '')
        {
            $("#text2").css("background-color","white");
        }
       
        
    });
// background color of even rows
     $("#evenrow").click(function(){
        $("tr:even").css("background-color","DodgerBlue");
    });
    // background color of odd rows
    $("#oddrow").click(function(){
        $("tr:odd").css("background-color","LightGrey");
    });
// set timeout function for color change in paragraph
    setTimeout(() => {
        $(".test").css("color","red");
    }, 5000);


    // $("#sugggest").keyup(function(){

    //     $("#sugggest").on("keyup", function() {
    //         var value = $(this).val().toLowerCase();
    //         $(value).filter(function() {
    //           $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //         });
    //       });
    //     });
        // var arlene3 = new Array("L","R","J","S");
        // var arlene2 = new Array("Lily", "Rose", "Jasmin","Sunflower");
        // var sugggest1 = $("#sugggest").val();

        // if(sugggest1 == "L")
        // {
         
        //    var m1 =  arlene2[0];
        //    document.getElementById("suggestions").innerHTML=m1;
        //   $("#suggestions").css("display","block");
        // }
        // else if(sugggest1 == "R")
        // {
        //     var m2 =  arlene2[1];
        //     document.getElementById("suggestions").innerHTML=m2;
        //    $("#suggestions").css("display","block");
        // }
      
        $("#search").on("keyup", function() {
            $(".users").html("");
            var val = $.trim(this.value);
            if (val) {
              val = val.toLowerCase();
              $.each(usersArray, function(_,obj) {
               // console.log(val,obj.name.toLowerCase().indexOf(val),obj)
                if (obj.name.toLowerCase().indexOf(val) != -1) {
                  $(".users").append('<div class="user-card"><span class="user-info">'+obj.name+'</span><br/></div>');
                }
              });
            }
            $(".not-found").toggle($(".users").find("img").length==0);
          });
        });

        var usersArray = [{
            name: "Lily",
          
          },
          {
            name: "Rose",
            
          },
          {
            name: "Jasmin",
          
          },
         {
            name:"Sunflower"
         }
        ];
        
       
    

  
    
