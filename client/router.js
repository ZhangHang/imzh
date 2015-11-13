Router.route('/', function() {
  this.layout('ApplicationLayout')
  this.render("Home")
})
Router.route('/about', function() {
  this.layout('ApplicationLayout')
  this.render('About')
})
Router.route('/archive', function() {
  this.layout('ApplicationLayout')
  this.render('Archive')
})
Router.route('/posts/:postname', function() {
  const params = this.params
  this.layout('ApplicationLayout')
  const targetPost = Posts.findOne({
    postname: params["postname"]
  })
  if (targetPost) {
    this.render('Post', {
      data: targetPost
    })
  } else {
    this.render('Void')
  }
})
