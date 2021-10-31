'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ClientsUser extends Model {

    client(){
        return this.belongsTo('App/Models/Client')
    }

    guarantor_recommendation(){
        return this.hasMany('App/Models/ClientsGuarantorRecommendation')
    }
}

module.exports = ClientsUser
