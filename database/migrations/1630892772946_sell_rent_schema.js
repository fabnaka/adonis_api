'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SellRentSchema extends Schema {
  up () {
    this.create('sell_rents', (table) => {
      table.increments()
      table.integer('immobile_id').unsigned().references('id').inTable('immobiles').notNullable()
      table.integer('payment_id').unsigned().references('id').inTable('payments').notNullable()
      table.integer('employee_id').unsigned().references('id').inTable('employees').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('clients_users').notNullable()
      table.integer('contrato').notNullable().unique()
      table.integer('tipo').notNullable()
      table.decimal('valor').notNullable()
      table.decimal('porcentagem_imobiliaria').notNullable()
      table.decimal('porcentagem_funcionario').notNullable()
      table.date('data').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('sell_rents')
  }
}

module.exports = SellRentSchema
