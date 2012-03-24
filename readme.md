# Alert Override

Here's a script that simply overrides JavaScript's native alert function and places a modal on the page instead.

This can be used if there are an overwhelming number of native alerts used and they are wished to be changed to modals. For normal usage, just include the script before you call any alert() calls.

## Custom Usage:

```javascript
alert('hello', {
    objClass: 'someClassName',                               //<-- A class that will be added to the modal for styling.
    prefix: 'A string that is placed before the alert text', //<-- String for additional text before the alert text (can be HTML for styling).
    suffix: 'A string that is placed after the alert text',  //<-- String for additional text after the alert text (can be HTML for styling).
    cancelText: 'Cancel'                                     //<-- String for customizing the text of the cancel button.
    callBack: function(){                                    //<-- Callback function that will be called after the modal is closed.
        functionName( param, param, etc. );
    }
}); 
```
