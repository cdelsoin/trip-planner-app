import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr('string'),
  start_date: DS.attr('string'),
  end_date: DS.attr('string'),
  who: DS.attr('string'),
  more_info: DS.attr('string'),
  plans: DS.hasMany('plan'),
});
