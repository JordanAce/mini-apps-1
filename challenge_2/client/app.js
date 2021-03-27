const csvOutput = document.getElementById('#CSV');

const postHandler = {
  post: (textarea, callback, err = null) => {
    event.preventDefault();
    $.ajax({
      url: 'http://localhost:3000/',
      type: 'POST',
      data: textarea,
      contentType: 'application/json',
      dataType: 'json',
      success: callback,
      error: function() {
        console.log('ERROR', err);
      }
    });
  }
};

const dataConversionSuccesful = function(parsedData) {
  $(csvOutput).val();
  $(csvOutput).val(parsedData);
}

// eslint-disable-next-line max-len
$("form").on('submit', function(event) {
  event.preventDefault();
  let txt = $('textarea').val();
  postHandler.post(txt, dataConversionSuccesful);
  console.log('ON SUBMIT WORKS');
})
// document.querySelector('input[type = "submit"]').addEventListener("click", function() {
//   let txt = $('textarea').val();
//   postHandler.post(txt, dataConversionSuccesful);
// });


