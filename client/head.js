Meteor.subscribe("yamls")

Light = (() => {
  let core = {}
  let excludeSelectors = ["img", ".keep-light"]

  let IS_LIGHT_ON_KEY = "isLightOn"
  Session.set(IS_LIGHT_ON_KEY, true)

  core.exclude = (selector) => {
    console.assert(typeof selector === "string")
    excludeSelectors.push(selector)
  }

  core.on = () => {
    Session.set(IS_LIGHT_ON_KEY, true)
    core.update()
  }

  core.off = () => {
    Session.set(IS_LIGHT_ON_KEY, false)
    core.update()
  }

  core.isOn = () => {
    return Session.get(IS_LIGHT_ON_KEY)
  }

  core.update = () => {
    const colorInvertCSSRule = `invert(${core.isOn() ? 0 : 100}%)`
    $("body").css("-webkit-filter", colorInvertCSSRule)
    excludeSelectors.forEach(selector => {
      $(selector).css("-webkit-filter", colorInvertCSSRule)
    })
  }

  return core
})()
