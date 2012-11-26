# calendar

  Simple calendar date-picker. The component does not come with a template or styles, you create it yourself. Alternatively you can use anthonyshort/calendar-skeleton as a template.

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
