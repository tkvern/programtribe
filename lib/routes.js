FlowRouter.route('/', {
  name: 'index',
  action: function() {
    BlazeLayout.render("layout");
  }
});
