Template.Archive.helpers({
  posts() {
    return YAMLs.find({
      type: "post"
    }, {
      sort: {
        date: 1
      }
    })
  }
})

Template.Archive.rendered = () => {
  DarkThemeMode.update()
}
