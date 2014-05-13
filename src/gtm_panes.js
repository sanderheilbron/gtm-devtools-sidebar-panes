
var getGoogleTagManagerMacros = function() {

  // Check if google_tag_manager object exists
  if (typeof google_tag_manager !== 'undefined') {


    // Add a startsWith() function to the string prototype
    if (typeof String.prototype.startsWith != 'function') {
      String.prototype.startsWith = function(str) {
        return this.substring(0, str.length) === str;
      };
    }

    /**
     * Loop through all script tags with a src attribute and
     * return the URL of the Google Tag Manager script tag
     */
    var gtmContainerURL = function () {
      var scripts = document.getElementsByTagName('script');
      for (var i = 0, m; m = scripts[i]; i++) {
        if (scripts[i].getAttribute('src')) {
          if (scripts[i].getAttribute('src').startsWith('//www.googletagmanager.com')) {
            return scripts[i].getAttribute('src');
          }
        }
      }
    };

    // Get the ID of the Google Tag Manager container tag
    function getURLParameter(name) {
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(gtmContainerURL())||[,""])[1].replace(/\+/g, '%20')) || null;
    }
    var containerId = getURLParameter('id');

    // Create and return the google_tag_manager macro object
    var macros =  { __proto__: null }; // Hide the __proto__ property of the macro object
    var macroIndex;

    for (var i = 0; i < 200; i++) {
      if (typeof google_tag_manager[containerId].macro(i) !== 'undefined') {
        macroIndex = 'google_tag_manager["' + containerId + '"].macro(' + i + ')';
        macros[macroIndex] = google_tag_manager[containerId].macro(i);
      }
    }
  return macros;
  }
};

var getGoogleTagManagerDataLayer = function() {

  // Check if dataLayer object exists
  if (typeof dataLayer !== 'undefined') {
    return dataLayer;
  }
};

// Pane settings
var macrosPaneSetting = localStorage.macrosPaneSetting || 'enable';
var dataLayerPaneSetting = localStorage.dataLayerPaneSetting || 'enable';

if (macrosPaneSetting === "enable") {

  // Create the 'GTM Macros' Sidebar Pane in DevTools
  chrome.devtools.panels.elements.createSidebarPane("GTM Macros",
      function(sidebar) {
        function updateMacros() {
            sidebar.setExpression("(" + getGoogleTagManagerMacros.toString() + ")()");
        }

        updateMacros();
        
        chrome.devtools.panels.elements.onSelectionChanged.addListener(
        updateMacros);
  });

}

if (dataLayerPaneSetting === "enable") {

  // Create the 'GTM DataLayer' Sidebar Pane in DevTools
  chrome.devtools.panels.elements.createSidebarPane("GTM DataLayer",
      function(sidebar) {
        function updateDataLayer() {
            sidebar.setExpression("(" + getGoogleTagManagerDataLayer.toString() + ")()");
        }

        updateDataLayer();

        chrome.devtools.panels.elements.onSelectionChanged.addListener(
        updateDataLayer);
  });

}
