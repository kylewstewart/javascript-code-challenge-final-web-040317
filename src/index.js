$(document).ready(function(){
  $('#photo-form').on("submit", function (event) {
    event.preventDefault()
    let post = new Post
    post.addPost(event)
    document.getElementById("photo-form").reset()
  })
})
