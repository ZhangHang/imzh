Template.viewer.helpers({
  onlineViewerCount: function(){
    var onlineUserCount = userPresence.find({}).count();
    return onelineUserCount > 0 ? onelineUserCount:""
  }
});
