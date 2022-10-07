// script for password validation
$(document).ready(function () {
    // $("#btn1").click(function () {
    $("#confirmpassword").keyup(function () {
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
        $("#img3")
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

        if (text1 == '' && text2 == '') {
            $("#text1").css("background-color", "red");
            $("#text2").css("background-color", "red");

        }
        if (text1 == '') {
            alert("your field is blank ");
            $("#text1").css("background-color", "red");
            $("#text1").focus();
        }
        else if (text2 == '') {
            alert("your field is blank ");
            $("#text2").css("background-color", "red");
            $("#text2").focus();
        }
        else if (text1 != '') {
            $("#text1").css("background-color", "white");
        }
        else if (text2 != '') {
            $("#text2").css("background-color", "white");
        }


    });
    // background color of even rows
    $("#evenrow").click(function () {
        $("tr:even").css("background-color", "DodgerBlue");
    });
    // background color of odd rows
    $("#oddrow").click(function () {
        $("tr:odd").css("background-color", "LightGrey");
    });
    // set timeout function for color change in paragraph
    setTimeout(() => {
        $(".test").css("color", "red");
    }, 5000);




    $("#search").on("keyup", function () {
        $(".users").html("");
        var val = $.trim(this.value);
        if (val) {
            val = val.toLowerCase();
            $.each(usersArray, function (_, obj) {
                if (obj.name.toLowerCase().indexOf(val) != -1) {
                    $(".users").append('<div class="user-card"><span class="user-info">' + obj.name + '</span><br/></div>');
                }
            });
        }
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
        name: "Sunflower"
    }
    ];
    // code to add or remove rows 
    $(".addCF").click(function () {

        $("#tablefield").append('<tr><td><input type="text" class="code" id="customFieldName" name="enter class" value="" placeholder="Enter class" /> &nbsp; <input type="text" class="code" id="customFieldValue" name="enter board" value="" placeholder="Enter board" /> &nbsp; <input type="text" class="code" id="customFieldValue" name="enter marks" value="" placeholder="Enter marks" /> &nbsp; <input type="text" class="code" id="customFieldName" name="enter divison" value="" placeholder="Enter divison" />  </td></tr>');
    });

    $("#tablefield").on('click', '.remCF', function () {

        $(this).closest('tr').next().remove();
    });

    $("#drop1").change(function () {
        var drop1 = $("#drop1").val();
        if (drop1 == "small") {
            $("#price1").text("4000/-");
        }
        if (drop1 == "medium") {
            $("#price1").text("5000/-");
        }
        if (drop1 == "large") {
            $("#price1").text("6000/-");
        }
    });
    $("#drop2").change(function () {
        var drop2 = $("#drop2").val();
        if (drop2 == "lightgrey") {
            $("#price2").text("1800/-");
        }
        if (drop2 == "darkgrey") {
            $("#price2").text("1500/-");
        }
        if (drop2 == "lightgreen") {
            $("#price2").text("1400/-");
        }
    });

    $(document).on("click", ".clothes",function () {
        $("#tablefield1").append('<ul><a href="#"><li>Clothes<button type="button" class="clothes">+</button></li></a><ul><li class="one1"><a href="#">Tshirts<button type="button" class="tshirts">+</button></a></li></ul><ul><li class="one2"><a href="#">Trousers<button type="button" class="trousers">+</button></a></li></ul></ul>');
    });
    $(document).on("click",".tshirts",function () {
        $(".one1").append("<ul><li class='one1'><a href='#'>Tshirts<button type='button' class='tshirts'>+</button></a></li></ul>");
    });
    $(document).on("click",".trousers",function () {
        $(".one2").append("<ul><a href='#'><li class='one2'>Trousers<button class='trousers' type='button'>+</button></li></a></ul>");
    });


    $(document).on("click", ".electronics",function () {
        $("#tablefield2").append('<ul><a href="#"><li>Electronics<button type="button" class="electronics">+</button></li></a><ul><li class="one3"><a href="#">Mobiles<button type="button" class="mobiles">+</button></a></li></ul><ul><li class="one4"><a href="#">Tabs<button type="button" class="tabs">+</button></a></li></ul></ul>');
    });
    $(document).on("click",".mobiles",function () {
        $(".one3").append("<ul><li class='one3'><a href='#'>Mobiles<button type='button' class='mobiles'>+</button></a></li></ul>");
    });
    $(document).on("click",".tabs",function () {
        $(".one4").append("<ul><a href='#'><li class='one4'>Tabs<button class='tabs' type='button'>+</button></li></a></ul>");
    });
   
});








