'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Immobile extends Model {

    clientOwner(){
        return this.belongsTo('App/Models/ClientsOwner')
    }

    

}

module.exports = Immobile
