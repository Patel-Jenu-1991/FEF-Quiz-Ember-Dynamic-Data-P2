import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.ajax('cookies.json');
  }
});
