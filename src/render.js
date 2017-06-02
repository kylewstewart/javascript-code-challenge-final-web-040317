
function renderPhoto(photo, comment) {
    $('#photo-list').append(`
          <div class="card">
            <div class="card-image">
              <img src="${photo}">
            </div>
            <div class="card-content">
              <p>${comment}.</p>
            </div>
          </div>`)
    }
