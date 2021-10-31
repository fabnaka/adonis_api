'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OperationImmobile extends Model {

    immobile(){
        return this.belongsTo('App/Models/Immobile')
    }

    sellRent(){
        return this.belongsTo('App/Models/SellRent')
    }



}

module.exports = OperationImmobile
