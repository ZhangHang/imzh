Template.Archive.helpers({
  hasPosts() {
      return YAMLs.find({
        type: "post"
      }).count() > 0
    },
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
  Light.update()
}
