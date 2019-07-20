"use strict";

var row = document.getElementById('row');

function createMedia(comment) {
  var container = document.createElement('div');
  container.classList.add('col-12', 'col-xl-6', 'p-2');
  var media = document.createElement('div');
  media.classList.add('media', 'border', 'rounded', 'p-3', 'h-100', 'shadow-sm');
  var img = document.createElement('img');
  img.src = 'img_avatar.png';
  img.alt = 'avatar image';
  img.className = 'img mr-3';
  var mediaBody = document.createElement('div');
  mediaBody.className = 'media-body';
  var small = document.createElement('small');
  small.classList.add('font-weight-light', 'text-info');
  small.innerHTML = comment.email;
  var h4 = document.createElement('h4');
  h4.innerHTML = "".concat(comment.name, " <small class=\"font-weight-light text-info\">").concat(comment.email, "</small>");
  var commentBody = document.createElement('p');
  commentBody.innerHTML = comment.body;
  mediaBody.appendChild(h4);
  mediaBody.appendChild(commentBody);
  media.appendChild(img);
  media.appendChild(mediaBody);
  container.appendChild(media);
  row.appendChild(container);
}

function loadComments() {
  fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  }).then(function (myJson) {
    myJson.map(media => {
      createMedia(media);
    });
  }).catch(error => {
    console.log(error);
    var h4 = document.createElement('h4');
    h4.className = 'w-100 text-center text-white bg-danger p-2 border border-danger rounded';
    h4.innerHTML = 'An error occurred, try to reload your browser!';
    row.appendChild(h4);
  });
}

loadComments();
