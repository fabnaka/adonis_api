'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ImmobileApartment extends Model {

    immobile(){
        return this.belongsTo('App/Models/Immobile')
    }

}

module.exports = ImmobileApartment
