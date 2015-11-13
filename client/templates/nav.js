Template.Nav.helpers({
  isDarkMode() {
    return DarkThemeMode.isOn()
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
