// Show settings
function loadOptions() {
  var macrosPaneSetting = localStorage.macrosPaneSetting;
  var dataLayerPaneSetting = localStorage.dataLayerPaneSetting;
  var select_macros_pane_values = document.getElementById("macros_pane_values");
  var select_datalayer_pane_values = document.getElementById("datalayer_pane_values");
  var i = 0;


  for (; i < select_macros_pane_values.children.length; i++) {
    var child_macros_pane_values = select_macros_pane_values.children[i];
      if (child_macros_pane_values.value === macrosPaneSetting) {
        child_macros_pane_values.selected = "true";
        break;
    }
  }

  for (; i < select_datalayer_pane_values.children.length; i++) {
    var child_datalayer_pane_values = select_datalayer_pane_values.children[i];
      if (child_datalayer_pane_values.value === dataLayerPaneSetting) {
        child_datalayer_pane_values.selected = "true";
        break;
    }
  }

}

// Save settings
function saveOptions() {
  var select_macros_pane_values = document.getElementById("macros_pane_values");
  var select_datalayer_pane_values = document.getElementById("datalayer_pane_values");
  localStorage.macrosPaneSetting = select_macros_pane_values.children[select_macros_pane_values.selectedIndex].value;
  localStorage.dataLayerPaneSetting = select_datalayer_pane_values.children[select_datalayer_pane_values.selectedIndex].value;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Your options are saved.";
  setTimeout(function() {
     status.innerHTML = "";
  }, 2000);
}

// Restore settings
function restoreOptions() {
  localStorage.macrosPaneSetting = "disable";
  localStorage.dataLayerPaneSetting = "disable";
  location.reload();
}

// Event listeners
window.addEventListener("load", loadOptions);

/**
 * Add event listeners once the DOM has fully loaded by listening for the
 * `DOMContentLoaded` event on the document, and adding your listeners to
 * specific elements when it triggers.
 */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('[class = save]').addEventListener('click', saveOptions);
  document.querySelector('[class = restore]').addEventListener('click', restoreOptions);
});