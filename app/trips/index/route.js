import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteTrip(trip) {
    trip.destroyRecord()
      .then(() => this.transitionTo('trips'));
    },
  },
});
