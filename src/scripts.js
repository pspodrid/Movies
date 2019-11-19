import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#movieInfo').click(function() {
    const movie = $('#movie').val();
    $('#movie').val("");
    console.log(movie);

    let request = new XMLHttpRequest();
    const url = `http://www.omdbapi.com/?t=${movie}&apikey=61c95e4f`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(response);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      $('.showTitle').text(`The movie ${movie} is ${response.Title}`);
      // $('.showTemp').text(`The movie is rate ${response.Rated}`);
      $('.showSource').text(`The movie is rate ${response.Ratings[2].Source}`);
      $('.showValue').text(`The movie is rate ${response.Ratings[2].Value}`);
    };
  });
});

// 61c95e4f
