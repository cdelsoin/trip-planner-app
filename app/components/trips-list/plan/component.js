import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['tripPlanImportant'],
  tripPlanImportant: Ember.computed.alias('plan.important'),
  actions: {
    toggleImportant () {
      return this.sendAction('toggleImportant', this.get('plan'));
    },
  },
});
