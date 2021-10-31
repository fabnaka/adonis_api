'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SellRent extends Model {

    clientUser(){
        return this.belongsTo('App/Models/ClientsUser')
    }

    employee(){
        return this.belongsTo('App/Models/Employee')
    }

    payment(){
        return this.belongsTo('App/Models/Payment')
    }

    immobile(){
        return this.belongsTo('App/Models/Immobile')
    }

}

module.exports = SellRent
