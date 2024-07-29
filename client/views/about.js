FlowRouter.route('/about', {
    action: function() {
        BlazeLayout.render('layout', { main: 'about' });
    }
});


Template.about.helpers({
    //add you helpers here
});

Template.about.events({
    //add your events here
});

Template.about.onCreated(function () {
    //add your statement here
});

Template.about.onRendered(function () {
    //add your statement here
});

Template.about.onDestroyed(function () {
    //add your statement here
});

