'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const OperationImmobile = use('App/Models/OperationImmobile')
/**
 * Resourceful controller for interacting with operationimmobiles
 */
class OperationImmobileController {
  /**
   * Show a list of all operationimmobiles.
   * GET operationimmobiles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const operationImmobile = await OperationImmobile.all()

    return response.json(operationImmobile);

  }

  
  /**
   * Create/save a new operationimmobile.
   * POST operationimmobiles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const operationImmobileData = request.only(['sell_rent_id',
                                                'immobile_id'
    ])

    console.log(operationImmobileData)

    try{

      const operationImmobile = await OperationImmobile.create(operationImmobileData);

      return response.json({
        status: 'sucess',
        operationImmobile: operationImmobile
      })

    } catch (error) {
      return response.json({
        status: 'error',
        message: 'ocorreu um erro ao cadastrar uma operacao!',
        technical: error
      })

    }


  }

  /**
   * Display a single operationimmobile.
   * GET operationimmobiles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    try{  
      
      const operationImmobile = await OperationImmobile.findOrFail (params.id)
      
      return operationImmobile;

    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Operação não encontrado!",
      })
    }

  }

  
  /**
   * Update operationimmobile details.
   * PUT or PATCH operationimmobiles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const operationImmobileData = request.only(['sell_rent_id',
                                                'immobile_id'
    ])

    try {
      
      const operationImmobile = await OperationImmobile.findOrFail(params.id);

      operationImmobile.sell_rent_id = operationImmobileData.sell_rent_id;
      operationImmobile.immobile_id = operationImmobileData.immobile_id;

      await operationImmobile.save();

      return response.json({
        status: "sucess",
        message: "Dados atualizados com sucesso"
      })

      
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Não foi possível atualizar a operação!",
      });
    }

  }

  /**
   * Delete a operationimmobile with id.
   * DELETE operationimmobiles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    try{
      const operationImmobile = await OperationImmobile.findOrFail(params.id);

      await operationImmobile.delete();

      return response.json({
        status: "success",
        message: "Operação removida com o sucesso!",
      });

    } catch {
      return response.status(404).json({
        status: "error",
        message: "Operação não encontrado!",
      });
    }


  }
}

module.exports = OperationImmobileController
