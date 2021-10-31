'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Employee extends Model {

    user(){
        return this.belongsTo('App/Models/User')
    }

    role(){
        return this.belongsTo('App/Models/Role')
    }
}

module.exports = Employee
