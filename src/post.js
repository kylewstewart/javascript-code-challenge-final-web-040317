class Post {
  constructor() {
  }

  addPost(event) {
    renderPhoto(this.photo(event), this.comment(event))
  }

  photo(event) {
    let photo = event.target[0].value
    return photo
  }

  comment(event) {
    let comment = event.target[1].value
    return comment
  }

}
