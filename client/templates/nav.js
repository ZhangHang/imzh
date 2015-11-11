let IS_DARK_MODE_KEY = "isDarkMode"
Session.setDefault(IS_DARK_MODE_KEY, false)

Template.nav.helpers({
  isDarkMode(){
    return Session.get(IS_DARK_MODE_KEY)
  }
});

Template.nav.events({
  'click #dark-mode-switch'(event, template){
    let isDarkMode = !Session.get(IS_DARK_MODE_KEY)
    Session.set(IS_DARK_MODE_KEY, isDarkMode)

    let body = document.body
    const colorInvertCSSRule = `invert(${isDarkMode ? 100 : 0}%)`
    setMultiVendorProp(body.style, "filter", colorInvertCSSRule)

    let itemsToLeaveAlone = document.getElementsByClassName("leave-alone-in-dark-mode")
    for (let i = 0; i < itemsToLeaveAlone.length; i++) {
      setMultiVendorProp(itemsToLeaveAlone[i].style, "filter", colorInvertCSSRule)
    }
  }
});

function setMultiVendorProp(style, propName, value) {
  style[propName] = value

  style[`-webkit-${propName}`] = value
  style[`-moz-${propName}`] = value
  style[`-o-${propName}`] = value
  style[`-ms-${propName}`] = value

  return value
}
