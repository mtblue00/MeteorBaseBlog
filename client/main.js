FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render('layout', { main: 'main' });
    }
});

Template.main.onCreated(function() {

})

Template.main.onRendered(function() {

})

Template.main.helpers({
    posts: function() {
        return Posts.find({}, { sort: { createdAt: -1 } });
    }
})

Template.main.events({

})