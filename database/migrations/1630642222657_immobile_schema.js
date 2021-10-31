'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImmobileSchema extends Schema {
  up () {
    this.create('immobiles', (table) => {
      table.increments()
      table.integer('client_owners_id').unsigned()
                                        .references('id')
                                        .inTable('clients_owners')
                                        .notNullable()
      table.boolean('locacao').notNullable()
      table.boolean('venda').notNullable()
      table.boolean('ja_foi_locado').notNullable()
      table.boolean('ja_foi_vendido').notNullable()
      table.string('foto').notNullable()
      table.date('data_construcao').notNullable()
      table.integer('categoria').notNullable()
      table.string('endereco_rua').notNullable()
      table.integer('endereco_numero').notNullable()
      table.string('endereco_complemento').notNullable()
      table.string('endereco_bairro').notNullable()
      table.integer('endereco_cep').notNullable()
      table.decimal('valor_venda')
      table.decimal('valor_aluguel')
      table.date('data_anuncio_locacao').notNullable()
      table.date('data_anuncio_venda').notNullable()
      table.integer('disponibilidade').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('immobiles')
  }
}

module.exports = ImmobileSchema
