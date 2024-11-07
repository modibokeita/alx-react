import $ from 'jquery';
import _ from 'lodash';

// Add elements to the page
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Track click count and update paragraph with id='count'
let count = 0;
const updateCounter = () => {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
};

// Use Lodash's debounce to limit the rate of updates
$('button').on('click', _.debounce(updateCounter, 500));
