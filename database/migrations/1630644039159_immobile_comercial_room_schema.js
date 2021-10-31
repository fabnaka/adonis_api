'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImmobileComercialRoomSchema extends Schema {
  up () {
    this.create('immobile_comercial_rooms', (table) => {
      table.increments()
      table.integer('immobile_id').unsigned().references('id').inTable('immobiles').notNullable().unique()
      table.integer('qtde_banheiro').notNullable()
      table.integer('qtde_comodo').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('immobile_comercial_rooms')
  }
}

module.exports = ImmobileComercialRoomSchema
