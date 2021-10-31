'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientsOwnerSchema extends Schema {
  up () {
    this.create('clients_owners', (table) => {
      table.increments()
      table.integer('clients_id').unsigned().references('id').inTable('clients').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('clients_owners')
  }
}

module.exports = ClientsOwnerSchema
