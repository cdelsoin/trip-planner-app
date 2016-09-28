import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('trip', params.trip_id);
  },

  actions: {
    togglePlanImportant (plan) {
      plan.toggleProperty('important');
      plan.save();
    },
  },
});
