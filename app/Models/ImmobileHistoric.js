'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ImmobileHistoric extends Model {

    operationImmobile(){
        return this.belongsTo('App/Models/OperationImmobile')
    }

}

module.exports = ImmobileHistoric
