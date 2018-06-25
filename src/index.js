const clock = require('./clock/clock.js');

$(document).ready(function() {
    let my_clock = new clock.Clock(7, 20);

    my_clock.mount(document.getElementById('app'));
});
