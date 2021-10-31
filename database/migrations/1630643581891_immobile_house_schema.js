'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImmobileHouseSchema extends Schema {
  up () {
    this.create('immobile_houses', (table) => {
      table.increments()
      table.integer('immobile_id').unsigned().references('id').inTable('immobiles').notNullable().unique()
      table.integer('qtde_quarto').notNullable()
      table.integer('qtde_suite').notNullable()
      table.integer('qtde_sala_de_estar').notNullable()
      table.integer('qtde_sala_de_jantar').notNullable()
      table.integer('qtde_vagas_garagem').notNullable()
      table.decimal('area').notNullable()
      table.boolean('possui_armario_embutido').notNullable()
      table.string('descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('immobile_houses')
  }
}

module.exports = ImmobileHouseSchema
