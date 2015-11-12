Template.nav.helpers({
  isDarkMode() {
    return DarkThemeMode.isOn()
  }
});

Template.nav.events({
  'click #dark-mode-switch' (event, template) {
    if (DarkThemeMode.isOn()) {
      DarkThemeMode.off()
    } else {
      DarkThemeMode.on()
    }
  }
});
