$(document).ready(function(){
  $('#photo-form').on("submit", function (event) {
    let photo = event.target[0].value
    let comment = event.target[1].value
    event.preventDefault()
    addPhoto(photo, comment)
    document.getElementById("photo-form").reset();

  })
})
