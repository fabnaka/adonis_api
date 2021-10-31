'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OperationImmobileSchema extends Schema {
  up () {
    this.create('operation_immobiles', (table) => {
      table.increments()
      table.integer('sell_rent_id').unsigned().references('id').inTable('sell_rents').notNullable()
      table.integer('immobile_id').unsigned().references('id').inTable('immobiles').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('operation_immobiles')
  }
}

module.exports = OperationImmobileSchema
