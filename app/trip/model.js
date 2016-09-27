import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr('string'),
  start_date: DS.attr('date'),
  end_date: DS.attr('date'),
  who: DS.attr('string'),
  // plans: DS.hasMany('plan'),
});
