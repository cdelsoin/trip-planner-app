import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit () {
      this.sendAction('edit', this.get('trip'));
    },

    delete () {
      this.sendAction('delete', this.get('trip'));
    },
  },
});
