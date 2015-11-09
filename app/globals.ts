export var Template;

if (Meteor.isServer) {
  // Template does not support server side
  Template = {
    loginButtons: 'any'
  };
} else {
  Template = window['Template'];
}
