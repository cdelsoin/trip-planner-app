import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['tripPlanImportant', 'tripPlanStrict'],
  tripPlanImportant: Ember.computed.alias('plan.important'),
  tripPlanStrict: Ember.computed.alias('plan.strict_time'),

  actions: {
    toggleImportant () {
      return this.sendAction('toggleImportant', this.get('plan'));
    },

    toggleStrict () {
      return this.sendAction('toggleStrict', this.get('plan'));
    },

  },
});
