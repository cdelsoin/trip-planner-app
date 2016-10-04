import Ember from 'ember';

export default Ember.Component.extend({
  newTrip: {
    location: null,
    start_date: null,
    end_date: null,
    who: null,
    more_info: null,
  },

  actions: {

    save () {
      let data = this.get('newTrip');
      data.trip = this.get('trip');
      this.sendAction('save', data);
      this.set('newTrip.location', null);
      this.set('newTrip.start_date', null);
      this.set('newTrip.end_date', null);
      this.set('newTrip.who', null);
      this.set('newTrip.more_info', null);
      this.set('newTrip', {});
    },

    cancel () {
      this.sendAction('cancel', this.get('trip'));
    },
  },
});
