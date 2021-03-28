const csvOutput = document.querySelector('#CSV');

// eslint-disable-next-line max-len
$("form").on('submit', function(event) {
  event.preventDefault();
  console.log(csvOutput);
  let txt = $('textarea').val();
  $.ajax({
    url: 'http://localhost:3000/',
    type: 'POST',
    data: txt,
    contentType: 'application/json',
    dataType: 'json',
    success: function (response) {
      console.log(response);
      csvOutput.append(response);
    },
    error: function(err) {
      console.log('ERROR', err);
    }
  });
  console.log('ON SUBMIT WORKS');
})



