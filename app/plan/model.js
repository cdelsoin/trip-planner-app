import DS from 'ember-data';

export default DS.Model.extend({
  who: DS.attr('string'),
  what: DS.attr('string'),
  date: DS.attr('string'),
  time: DS.attr('string'),
  location: DS.attr('string'),
  more_details: DS.attr('string'),
  url: DS.attr('string'),
  important: DS.attr('boolean'),
  strict_time: DS.attr('boolean'),
  trip: DS.belongsTo('trip'),

});
