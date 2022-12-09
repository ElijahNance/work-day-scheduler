$(function () {

    //Click event that runs save appointment function
    $("button").click(function() {saveAppointment(this)});  
    var currHour = dayjs().hour();
    
    // Compares current hour to div id numbers and adds class depending on what time it is
    $('.time-block').each(function(){
      var currID = this.getAttribute('id');

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
    })
     //Retries text from local data and poppulates correct text area even after refresh 
    $('textarea').each(function(){
      this.value=(localStorage.getItem(this.getAttribute("id")));
      
    })
    //Displays date at top of page
    var today = dayjs();
    $('#currentDay').text(today.format('MMM D, YYYY'));
  });

  //Stand alone function that stores submitted data in local storage
  function saveAppointment(appointmentButton) {
    var appointmentID = $(appointmentButton).data('appointmenthour');
    localStorage.setItem(appointmentID, $('#' + appointmentID).val());
};