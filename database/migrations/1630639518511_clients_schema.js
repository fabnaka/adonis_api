'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientsSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable().unique()
      table.integer('cpf').notNullable().unique()
      table.string('nome').notNullable()
      table.string('endereco_rua').notNullable()
      table.integer('endereco_numero').notNullable()
      table.string('endereco_complemento')
      table.string('endereco_bairro').notNullable()
      table.integer('endereco_cep').notNullable()
      table.integer('telefone1').notNullable()
      table.integer('telefone2')
      table.string('email').notNullable().unique()
      table.integer('sexo').notNullable()
      table.integer('estado_civil').notNullable()
      table.string('profissao').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientsSchema
