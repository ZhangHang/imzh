let recentPostsLimitCount = 3

Template.Home.helpers({
  hasRecentPosts() {
      return YAMLs.find({
        type: "post"
      }).count() > 0
    },
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

Template.Home.rendered = () => {
  DarkThemeMode.update()
}
