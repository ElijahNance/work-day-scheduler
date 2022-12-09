// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    // var buttonEl = $('button');
    // var userInput = $('textarea');
   
    $("button").click(function() {saveAppointment(this)});

    var currTime = dayjs();
    console.log(currTime);
  
    var currHour = dayjs().add(-6, 'hour').hour();
    
    console.log(typeof(currHour));
    
    
    $('.time-block').each(function(){
      var currID = this.getAttribute('id');
      //console.log(typeof(parseInt(currID.substring(5))));
      //console.log(currID);

      var testHour = parseInt(currID.substring(5));

      if (testHour < currHour) {
        console.log(currID, testHour, currHour, 'past');
        $(this).addClass('past');
      }
      else if (testHour === currHour) {
        console.log(currID, testHour, currHour, 'present');
        $(this).addClass('present');
      }
      else if (testHour > currHour) {
        console.log(currID, testHour, currHour, 'future');
        $(this).addClass('future');
      }

    //   if (parseInt(currID.substring(5)) < currHour){
    //     console.log(parseInt(currID.substring(5)), currHour, 'past');
    //   $(this).addClass('past');
    // } else if (parseInt(currID.substring(5)) === currID ){
    //   console.log(parseInt(currID.substring(5)), currHour, 'present');
    //   $(this).addClass('present');
    // } else if (parseInt(currID.substring(5)) > currID ){
    //   console.log(parseInt(currID.substring(5)), currHour, 'future');
    //   $(this).addClass('future');
    // }  
    })
  
    
   



    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
      
    $('textarea').each(function(){
      this.value=(localStorage.getItem(this.getAttribute("id")));
      
    })
    //
    // TODO: Add code to display the current date in the header of the page.
    var today = dayjs();
    $('#currentDay').text(today.format('MMM D, YYYY'));
    //console.log(today);
  });

  //Need to find a way to access function through html
  function saveAppointment(appointmentButton) {
    var appointmentID = $(appointmentButton).data('appointmenthour');
    //console.log($('#' + appointmentID).val());
    localStorage.setItem(appointmentID, $('#' + appointmentID).val());
};



  // function saveAppointment(appointmentID) {
  //   var testValue = document.getElementById(appointmentID);
  //   console.log(testValue);
  //   localStorage.setItem(appointmentID, document.getElementById(appointmentID).value);
  // };
  
  // function displayAppt(appointmentID) {
  //   var apptData = localStorage.getItem(appointmentID);
  //   var apptText = document.getElementById(appointmentID);
  //   apptText.value = apptData; 
  // }