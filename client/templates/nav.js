Template.Nav.helpers({
  isLightOn() {
    return Light.isOn()
  },
  pages(){
    return YAMLs.find({type:"page"})
  }
});

Template.Nav.events({
  'click #dark-mode-switch' (event, template) {
    if (Light.isOn()) {
      Light.off()
    } else {
      Light.on()
    }
  }
});
