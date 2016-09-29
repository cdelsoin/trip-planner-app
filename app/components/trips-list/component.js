import Ember from 'ember';

export default Ember.Component.extend({
  newPlan: {
    who: null,
    what: null,
    date: null,
    time: null,
    location: null,
    more_details: null,
    url: null,
  },

  actions: {
    togglePlanImportant (plan) {
      return this.sendAction('togglePlanImportant', plan);
    },

    togglePlanStrict (plan) {
      return this.sendAction('togglePlanStrict', plan);
    },

    createPlan () {
      let data = this.get('newPlan');
      data.trip = this.get('trip');
      // data.plan = this.get('plan');
      // console.log('data', data, 'data trip', data.trip, 'data pan', data.plan);
      this.sendAction('createPlan', data);
      this.set('newPlan.who', null);
      this.set('newPlan.what', null);
      this.set('newPlan.date', null);
      this.set('newPlan.time', null);
      this.set('newPlan.location', null);
      this.set('newPlan.more_details', null);
    },

    deletePlan (plan) {
      return this.sendAction('deletePlan', plan);
    },

    reset () {
      this.set('newPlan', {});
    },
  },
});
