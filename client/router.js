Router.configure({
  layoutTemplate: 'ApplicationLayout'
});
Router.route('/', function() {
  this.render("Home")
})

Router.route('/archive', function() {
  this.render('Archive')
})

Router.route('/posts/:_id', function() {
  const params = this.params
  const yaml = YAMLs.findOne({
    "_id": params["_id"],
    type: "post"
  })

  if (!yaml) {
    this.render("Void")
    return
  }
  this.render("Post", {
    data: yaml
  })
})

Router.route('/pages/:_id', function() {
  const params = this.params
  const yaml = YAMLs.findOne({
    "_id": params["_id"],
    type: "page"
  })

  if (!yaml) {
    this.render("Void")
    return
  }
  this.render("About", {
    data: yaml
  })
})
