import './body.css';
import $ from 'jquery';
import _ from 'lodash';

let count = 0;

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

const updateCounter = () => {
  count++;
  $('#count').text(`${count} clicks on the button`);
  }

$(() => {
  $('button').on('click', _.debounce(updateCounter, 500));
});
