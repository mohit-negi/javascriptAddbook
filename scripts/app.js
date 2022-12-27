
document.addEventListener("DOMContentLoaded", function() {

  //For button
  const button = document.querySelector('.submit-button')

  button.addEventListener('click', function() {
    window.location.href = 'http://www.example.com';
  });

  // add an event listener to the button
  button.addEventListener("click", function() {
    // redirect to the desired webpage
    window.location.href = "http://www.google.com";
  });
  //-----------

  //to save data to local storage

  // get reference to the form element
  var form = document.getElementById("myForm");

  // get reference to the submit button
  var submitButton = document.getElementById("submitButton");

  // add a submit event listener to the form
  form.addEventListener("submit", function(event) {
    event.preventDefault();  // prevent the form from being submitted

    // get the form data as an object
    var formData = new FormData(form);

    formData.forEach(item=>{
      console.log(item);
    })
    // store the form data in local storage
    localStorage.setItem("formData", JSON.stringify(Object.fromEntries(formData)));

    // reset the form
    form.reset();
  });
});