'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployeeSchema extends Schema {
  up () {
    this.create('employees', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable().unique()
      table.integer('role_id').unsigned().references('id').inTable('roles')
      table.integer('cpf').notNullable().unique()
      table.string('nome').notNullable()
      table.string('endereco_rua').notNullable()
      table.integer('endereco_numero').notNullable()
      table.string('endereco_complemento')
      table.string('endereco_bairro').notNullable()
      table.integer('endereco_cep').notNullable()
      table.integer('telefone_contato').notNullable()
      table.integer('telefone_celular')
      table.date('data_ingresso').notNullable()
      table.decimal('salario_comissao').notNullable()
      table.decimal('salario_final').notNullable()
      table.string('user').notNullable().unique()
      table.string('senha').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('employees')
  }
}

module.exports = EmployeeSchema
