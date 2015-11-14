let recentPostsLimitCount = 3

Template.Home.helpers({
  recentPosts() {
    return YAMLs.find({
      type: "post"
    }, {
      sort: {
        date: 1
      },
      limit: recentPostsLimitCount
    })
  }
})
