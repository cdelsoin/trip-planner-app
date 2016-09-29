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

    togglePlanStrict (plan) {
      plan.toggleProperty('strict_time');
      plan.save();
    },

    createPlan (data) {
      let plan = this.get('store').createRecord('plan', data);
      return plan.save();
    },

    deletePlan (plan) {
      return plan.destroyRecord();
    },

    saveTrip(trip) {
      trip.save()
      .then(()=>this.transitionTo('trips'));
    },
  },
});
