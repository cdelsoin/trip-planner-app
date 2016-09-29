
import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    console.error(params);
    return this.get('store').findRecord('trip', params.trip_id);
  },

  actions: {
    saveTrip(trip) {
      trip.save()
        .then(()=>this.transitionTo('trips'));
    },
  },
});
