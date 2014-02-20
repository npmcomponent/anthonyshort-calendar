*This repository is a mirror of the [component](http://component.io) module [anthonyshort/calendar](http://github.com/anthonyshort/calendar). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/anthonyshort-calendar`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# calendar

  Simple calendar date-picker. The component does not come with a template or styles, you create it yourself. Alternatively you can use anthonyshort/calendar-skeleton as a template.
  
## Dependencies

  * component/moment
  * component/jquery
  * component/emitter
  * component/bind

## Installation

    $ component install anthonyshort/calendar

## API

You'll need a template to use the calendar. A template is just a string of HTML so you can create this however you want.

Set the template on the Calendar either on the prototype or send it in the options when creating a calendar:

    var Calendar = require('calendar');
    var template = require('calendar-skeleton');
    
    // On the prototype
    Calendar.prototype.template = template;
    
    // or in the options
    var picker = new Calendar({ template: template });

## License

  MIT
