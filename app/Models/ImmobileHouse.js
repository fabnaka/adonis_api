'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ImmobileHouse extends Model {

    immobile(){
        return this.belongsTo('App/Models/Immobile')
    }
}

module.exports = ImmobileHouse
