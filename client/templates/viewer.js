
Template.viewer.helpers({
  onlineUserCount: function(){
    var onlineUserCount = UserConnections.find({}).count()
    if (onlineUserCount) {
      return onlineUserCount
    }
    return ""
  }
});
