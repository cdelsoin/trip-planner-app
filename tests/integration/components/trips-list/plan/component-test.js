import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('trips-list/plan', 'Integration | Component | trips list/plan', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{trips-list/plan}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#trips-list/plan}}
      template block text
    {{/trips-list/plan}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
