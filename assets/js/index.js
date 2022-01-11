const currHour = moment().hour();

function clickHandler() {
  const input = $(this).parent().siblings("textarea").val();
  const hour = $(this).parent().siblings("textarea").attr("id");

  localStorage.setItem(hour, input);
}

$(".time-block").each(function () {
    const blockTime = $(this).attr("id");
    if (blockTime < currHour){
        $(this).addClass("past");
    }
    else if(blockTime == currHour){
        $(this).addClass("present");
    }
    else{
        $(this).addCLass("future");
    }
});
$("button").click(clickHandler);
$("#hour-9").val(localStorage.getItem("hour-9"));
$("#hour-10").val(localStorage.getItem("hour-10"));
$("#hour-11").val(localStorage.getItem("hour-10"));
$("#hour-12").val(localStorage.getItem("hour-10"));
$("#hour-1").val(localStorage.getItem("hour-10"));
$("#hour-2").val(localStorage.getItem("hour-10"));
$("#hour-3").val(localStorage.getItem("hour-10"));
$("#hour-4").val(localStorage.getItem("hour-10"));
$("#hour-5").val(localStorage.getItem("hour-10"));
$("#hour-6").val(localStorage.getItem("hour-10"));
$("#hour-7").val(localStorage.getItem("hour-10"));
$("#hour-8").val(localStorage.getItem("hour-10"));
