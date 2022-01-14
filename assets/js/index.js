const currHour = moment().hour();
// using moment to start the current time of the user in military time
function clickHandler() {
// input is hooked by val() function
  const input = $(this).parent().siblings("textarea").val();
  const hour = $(this).parent().siblings("textarea").attr("id");
    // this stores the input 
  localStorage.setItem(hour, input);
}

$(".time-block").each(function () {
    //Grabbing the Id Attribute using the DOM selector
  const blockTime = $(this).attr("id");
  // Trying to somehow get the Text Area Dataset-* by using Query Selector
  const block = document.querySelector("textarea");
  // Variable i have stored is suppose to be either Am or PM but its not working
  const blockAMPM = block.dataset.time; 

  // this was suppose to decide if whether the textarea was in the AM or PM 
  // and then do an DOM-addclass to change the background of the text area,
  // depending if curr time(using moment) is either less or greater then time listed
  // in the block itself, but for some reason BlockAMPM only stores AM, i cannot figure out
  // why there is no PM, since moment().hour() stores in military time. O well. i just kept
  // increasing the div id
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
    if ((blockTime+12) < (currHour)) {
      $(this).addClass("past");
    } else if ((blockTime+12) == currHour) {
      $(this).addClass("present");
    } else if(blockTime+12 > currHour){
        $(this).addClass("future");
      }
  }
  else{
      // it isnt ever suppose to reach here...
      // but i didnt know javascript was a vampire
      console.log("wtf");
  }
});

// this is for the click handler
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
$("button").click(clickHandler);