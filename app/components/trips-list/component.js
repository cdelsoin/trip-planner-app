import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    togglePlanImportant (plan) {
      return this.sendAction('togglePlanImportant', plan);
    },

    togglePlanStrict (plan) {
      return this.sendAction('togglePlanStrict', plan);
    },

    deletePlan (plan) {
      return this.sendAction('deletePlan', plan);
    },
  },
});
