'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientsGuarantorRecommendationSchema extends Schema {
  up () {

    

    this.create('clients_users', (table) => {

      
      table.increments()
      table.integer('clients_id').unsigned().references('id').inTable('clients').notNullable().unique()
      table.integer('fiador').unsigned().references('id').inTable('clients_guarantor_recommendations').notNullable()
      table.integer('indicacao_pessoa1').unsigned().references('id').inTable('clients_guarantor_recommendations').notNullable()
      table.integer('indicacao_pessoa2').unsigned().references('id').inTable('clients_guarantor_recommendations').notNullable()
      table.timestamps()
    })

  }

  down () {
    
    this.drop('clients_users')
    
  }
}

module.exports = ClientsGuarantorRecommendationSchema
