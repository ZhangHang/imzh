var totem = ["🐵","🙈","🙉","🙊","🐒"]
Template.viewer.helpers({
  totem: function(){
    var onlineUserCount = UserConnections.find({}).count()
    return totem[onlineUserCount % totem.length]
  }
});
