'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientsUserSchema extends Schema {
  up () {

    this.create('clients_guarantor_recommendations', (table) => {
      table.increments()
      table.integer('clients_id').unsigned().references('id').inTable('clients').notNullable().unique()
      table.timestamps()
    })

    

  }

  down () {

    this.drop('clients_guarantor_recommendations')
    
    
  }
}

module.exports = ClientsUserSchema
