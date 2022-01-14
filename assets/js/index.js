const currHour = moment().hour();

function clickHandler() {
  const input = $(this).parent().siblings("textarea").val();
  const hour = $(this).parent().siblings("textarea").attr("id");

  localStorage.setItem(hour, input);
}

$(".time-block").each(function () {
  const blockTime = $(this).attr("id");
  const block = document.querySelector("textarea");
  const blockAMPM = block.dataset.time;

  console.log();
  
  
  if(blockAMPM == 'am') {
    if (blockTime < currHour) {
      $(this).addClass("past");
    } else if (blockTime == currHour) {
      $(this).addClass("present");
    } else if(blockTime > currHour){
      $(this).addClass("future");
    }
  } 
  else if(blockAMPM == 'pm') {
    console.log(blockAMPM);
    if ((blockTime+12) < (currHour)) {
      $(this).addClass("past");
    } else if ((blockTime+12) == currHour) {
      $(this).addClass("present");
    } else if(blockTime+12 > currHour){
        $(this).addClass("future");
      }
  }
  else{
      console.log("wtf");
  }
});
$("button").click(clickHandler);
$("#hour-1").val(localStorage.getItem("hour-1"));
$("#hour-2").val(localStorage.getItem("hour-2"));
$("#hour-3").val(localStorage.getItem("hour-3"));
$("#hour-4").val(localStorage.getItem("hour-4"));
$("#hour-5").val(localStorage.getItem("hour-5"));
$("#hour-6").val(localStorage.getItem("hour-6"));
$("#hour-7").val(localStorage.getItem("hour-7"));
$("#hour-8").val(localStorage.getItem("hour-8"));
$("#hour-9").val(localStorage.getItem("hour-9"));
$("#hour-10").val(localStorage.getItem("hour-10"));
$("#hour-11").val(localStorage.getItem("hour-11"));
$("#hour-12").val(localStorage.getItem("hour-12"));
$("#hour-13").val(localStorage.getItem("hour-13"));
$("#hour-14").val(localStorage.getItem("hour-14"));
$("#hour-15").val(localStorage.getItem("hour-15"));
$("#hour-16").val(localStorage.getItem("hour-16"));
$("#hour-17").val(localStorage.getItem("hour-17"));
$("#hour-18").val(localStorage.getItem("hour-18"));
$("#hour-19").val(localStorage.getItem("hour-19"));
$("#hour-20").val(localStorage.getItem("hour-20"));
$("#hour-21").val(localStorage.getItem("hour-21"));
$("#hour-22").val(localStorage.getItem("hour-22"));
$("#hour-23").val(localStorage.getItem("hour-23"));
$("#hour-24").val(localStorage.getItem("hour-24"));
