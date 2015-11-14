Template.Nav.helpers({
  isDarkMode() {
    return DarkThemeMode.isOn()
  },
  pages(){
    return YAMLs.find({type:"page"})
  }
});

Template.Nav.events({
  'click #dark-mode-switch' (event, template) {
    if (DarkThemeMode.isOn()) {
      DarkThemeMode.off()
    } else {
      DarkThemeMode.on()
    }
  }
});
