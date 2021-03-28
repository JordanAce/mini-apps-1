const csvOutput = document.querySelector('textarea#csv');

// eslint-disable-next-line max-len
$("form").on('submit', function(event) {
  event.preventDefault();
  $(csvOutput).empty();
  let txt = $('textarea').val();
  $.ajax({
    url: 'http://localhost:3000/',
    type: 'POST',
    data: txt,
    contentType: 'application/json',
    dataType: 'json',
    success: function (response) {
      $(csvOutput).append(response);
    },
    error: function(err) {
      console.log('ERROR', err);
    }
  });
})



