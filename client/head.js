Meteor.subscribe("yamls")

DarkThemeMode = (() => {
  let mode = {}
  let excludeSelectorList = ["img", ".leave-alone-in-dark-mode"]

  let IS_DARK_MODE_KEY = "isDarkMode"
  Session.set(IS_DARK_MODE_KEY, false)

  mode.exclude = (selector) => {
    console.assert(typeof selector === "string")
    excludeSelectorList.push(selector)
  }

  mode.on = () => {
    Session.set(IS_DARK_MODE_KEY, true)
    mode.update()
  }

  mode.off = () => {
    Session.set(IS_DARK_MODE_KEY, false)
    mode.update()
  }

  mode.isOn = () => {
    return Session.get(IS_DARK_MODE_KEY)
  }

  mode.update = () => {
    const colorInvertCSSRule = `invert(${mode.isOn() ? 100 : 0}%)`
    $("body").css("-webkit-filter", colorInvertCSSRule)
    excludeSelectorList.forEach(selector => {
      $(selector).css("-webkit-filter", colorInvertCSSRule)
    })
  }

  return mode
})()
