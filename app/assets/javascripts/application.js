//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require moment
//= require fullcalendar
//= require touchTouch
//= require masonry
//= require chosen-jquery
//= require chosen-prototype
//= require_self

  // var startTheParty = function() {
  //   console.log('it works!');
  //   // aftter 1.5 seconds print out the modal
  //   window.setTimeout(function(){
  //     $('#hello').modal('show');
  //   }, 1500);
  // };




  //
  // var $albums = $('#item');
  // $albums.masonry({
  //   columnWidth: 1000,
  //   itemSelector: '.album'
  // });



var loadEvents = function() {
  $.getJSON('/events', function(events){
    $('#calendar').fullCalendar({
      events: events,
      // adjusts hte titel and header of full calender
      header: {
        //adds a button to go to the previous month/day/year
        left: 'prev',
        // month name and year
        center: 'title',
        //adds a button to go to the next month/day/year
        right: 'next'
      },
      //function when you click on a day
      // date being the value of what day you clicked on
      // jsEvent is an event that is in that day
      // view is what it looks like in the square?
      dayClick: function(date, jsEvent, view) {
          // declares variable with the current date
        var today = date.format("MMM Do YY");
        // scopes in to the modal body and p tag  then creates a p tag and replaces it with this
        $('#hello .modal-dialog .modal-content .modal-body p').replaceWith('<p> Today is '+today+'</p>');
        // prints out hte modal
        $('#hello').modal('show');
      }
    });
  });
};

$(function() {
  loadEvents();
  var $form = $('form#new_event');
  $('input.btn', $form).click(function() {
    $.post($form.attr('action'), $form.serialize(), function(data){
      console.log(data);
      console.log('Event created');
      $('#create-event').modal('hide');
      $('#calendar').html('');
      loadEvents();
    });
    return false;
  });
});

$('#album a').touchTouch();

    // $.getJSON('/places',function(data){
    //   console.log(data);
    // });
    //

  // @(function() {
  //   // enable chosen.js
  //   $('.chosen-select').chosen({
  //     allow_single_deslect: true,
  //     no_results_text: 'No results matched',
  //     width: '200px'
  //   })
  // });


$.getJSON('/restaurants',function(restaurants) {
  $(restaurants).each(function(index, restaurants) {
    $('#restaurants').prepend('<ul>' + restaurants.name + '</ul>');
      $(restaurants.noms).each(function(index, noms) {
        $('#noms').prepend('<li>' + noms.name + '</li>');
      });
    });
  });
