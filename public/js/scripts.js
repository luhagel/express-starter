$("#post-form").submit(function( event ) {
  event.preventDefault();
  onPostSubmit("#post-form", function(err, newPost) {
    if(err) {
      console.log(err);
    }
    displayNewPost(newPost);
  });
});

function onPostSubmit( form , callback) {
  var data = $(form).serializeArray();

  if(data[0] === null || data[1] === null) {
    var err = "Please fill out all forms"
  }

  var newPost = {
    title: data[0].value,
    content: data[1].value
  }
  callback(err, newPost);
}

function displayNewPost(post) {
  $('.list-group').append('<li class="list-group-item"><h4>' + post.title + '</h4><hr><p>' + post.content + '</p></li>');
}