/* global axios */

var postTemplate = document.querySelector(".post");
var postContainer = document.querySelector(".container");

axios.get("http://localhost:3000/posts").then(function(response) {
  var posts = response.data.posts;
  posts.forEach(function(post) {
    console.log(post);
    var postClone = postTemplate.content.cloneNode(true);
    postClone.querySelector(".title").innerText = post.title;
    postClone.querySelector(".body").innerText = post.body;
    postContainer.appendChild(postClone);
  });
});
