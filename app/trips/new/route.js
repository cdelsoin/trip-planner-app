import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('trip', {});
  },

  actions: {
    createTrip(data) {
      let trip = this.get('store').createRecord('trip', data);
      trip.save()
      .then(()=>this.transitionTo('trips'));
    },

    cancelCreateTrip(trip) {
      trip.rollbackAttributes();
      this.transitionTo('trips');
    },
  },
});
