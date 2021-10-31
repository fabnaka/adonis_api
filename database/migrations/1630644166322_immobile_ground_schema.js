'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImmobileGroundSchema extends Schema {
  up () {
    this.create('immobile_grounds', (table) => {
      table.increments()
      table.integer('immobile_id').unsigned().references('id').inTable('immobiles').notNullable().unique()
      table.decimal('area').notNullable()
      table.decimal('largura').notNullable()
      table.decimal('comprimento').notNullable()
      table.boolean('possui_aclive').notNullable()
      table.boolean('possui_declive').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('immobile_grounds')
  }
}

module.exports = ImmobileGroundSchema
