Template.Nav.helpers({
  isLightOn() {
    return Light.isOn()
  },
  pages(){
    return YAMLs.find({type:"page"})
  }
});

Template.Nav.events({
  // Workaround, checkout the [issue](https://github.com/meteor/meteor/issues/681)
  'touchstart #dark-mode-switch' (event, template) {
    UpdateTheme()
  },
  'click #dark-mode-switch' (event, template) {
    UpdateTheme()
  }
});

function UpdateTheme() {
    if (Light.isOn()) {
      Light.off()
    } else {
      Light.on()
    }
}