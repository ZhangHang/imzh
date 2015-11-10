var IS_DARK_MODE_KEY = "isDarkMode"
Session.setDefault(IS_DARK_MODE_KEY, false)

Template.nav.helpers({
  isDarkMode: function(){
    return Session.get(IS_DARK_MODE_KEY)
  }
});

Template.nav.events({
  'click #dark-mode-switch': function(event, template) {
    var isDarkMode = !Session.get(IS_DARK_MODE_KEY)
    Session.set(IS_DARK_MODE_KEY, isDarkMode)

    var body = document.body
    var colorInvertCSSRule = "invert(" + (isDarkMode ? 100 : 0) + "%)"
    setMultiVendorProp(body.style, "filter", colorInvertCSSRule)

    var itemsToLeaveAlone = document.getElementsByClassName("leave-alone-in-dark-mode")
    for (var i = 0; i < itemsToLeaveAlone.length; i++) {
      setMultiVendorProp(itemsToLeaveAlone[i].style, "filter", colorInvertCSSRule)
    }
  }
});

function setMultiVendorProp(style, propName, value) {
  style[propName] = value

  style["-webkit-" + propName] = value
  style["-moz-" + propName] = value
  style["-o-" + propName] = value
  style["-ms-" + propName] = value

  return value
}
