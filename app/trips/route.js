import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('trip');
  },

  actions: {
    editTrip (trip) {
      this.transitionTo('trip.edit', trip);
    },

    // editTrip (trip) {
    //   this.transitionTo('trip.edit', trip);
    // },
  },
});
