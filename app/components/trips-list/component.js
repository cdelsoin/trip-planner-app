import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    togglePlanImportant (plan) {
      return this.sendAction('togglePlanImportant', plan);
    },
  },
});
