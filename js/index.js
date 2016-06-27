$(".course .course_java").hover(
    function(){
        //$(this).addClass("animate-shake");
        $(this).addClass("animated swing");
        $(this).find("p").animate({"top":"0"},500);
        //display:block;
    },
    function(){
        //$(this).removeClass(".shake");
        //$(this).find("p").animate({"top":"-155px"},500);
        $(this).removeClass("swing");
        $(this).find("p").animate({"top":"-155"},500);

    }

)


