# GTM DevTools Sidebar Panes
Google Chrome extension which displays Google Tag Manager sidebar panes in Chrome Developer Tools.

![GTM DevTools Sidebar Panes
Google Chrome extension which](images/tile-728-280.png)

## Usage
This extension will add sidebar panes to the elements panel of Chrome Developer Tools.

### GTM Macros pane
You can use this extension to debug or check the macros inside the Google Tag Manager object of the current page. The GTM Macros pane shows all available macros including the latest event tracking data when available:

![GTM Macros pane](images/gtm-macros-pane.png)

### GTM Datalayer pane
The GTM Datalayer pane gives easy access to the objects inside the dataLayer (when available inside the DOM):

![GTM Datalayer pane](images/gtm-datalayer-pane.png)

### GTM Event Listeners pane
The GTM Event Listeners pane gives easy access to registered GTM click events inside the debugDL object. To use this pane you have to install and use the [GTM Auto-Event Listener Debugger Chrome extension][5] by Simo Ahava.

![GTM Event Listeners pane](images/gtm-event-listeners-pane.png)

Panes will be updated by clicking DOM elements inside the elements panel or by switching between sidebar panes.

## Install
Download and install this extension from the [Chrome Web Store][1].

## Issues
Have a bug? Please create an [issue][2] here on GitHub!

## Contributing
Want to contribute? Great! Just fork the project, make your changes and open a [pull request][3].

## Changelog
### 0.2 (May 26, 2014):
 * Added GTM Event Listeners pane.
 * Panes will also be updated by switching between sidebar panes.

### 0.1 (May 12, 2014):
 * Initial release.

## License
Licensed under the MIT license.

Copyright (c) 2014 [Sander Heilbron][4]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

[1]: https://chrome.google.com/webstore/detail/gtm-devtools-sidebar-pane/nlpchkkljkimifenglmblhnklbngejfh
[2]: https://github.com/sanderheilbron/gtm-devtools-sidebar-panes/issues
[3]: https://github.com/sanderheilbron/gtm-devtools-sidebar-panes/pulls
[4]: http://www.sanderheilbron.nl
[5]: https://chrome.google.com/webstore/detail/gtm-auto-event-listener-d/iiihoahkpncaheicjfemhjkkfamcahcd
