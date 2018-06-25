window.$ = require('jquery');
require('./clock.css');

export class Clock{

    constructor(hours, minutes){
        this.hours = hours;
        this.minutes = minutes;
    }

    incrementHours() {
        this.hours = (this.hours + 1) % 25;
        this.render();
    }

    incrementMinutes() {
        this.minutes = (this.minutes + 1) % 60;
        this.render();
    }

    create_html() {

        let hrs = $('<span>')
        .text(this.hours + ':')
        .click(this.incrementHours.bind(this));

        let min = $('<span>')
        .text(this.minutes)
        .click(this.incrementMinutes.bind(this));
        
        return $('<div>')
        .addClass('clock')
        .append(hrs)
        .append(min);
      }

      render() {
        let $new_element = this.create_html();
        this.$element.replaceWith($new_element);
        this.$element = $new_element;
      }
    
      mount(parent) {
        this.$element = this.create_html();
        $(parent).append(this.$element);
      }
}