'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ImmobileComercialRoom = use('App/Models/ImmobileComercialRoom')

/**
 * Resourceful controller for interacting with immobilecomercialrooms
 */
class ImmobileComercialRoomController {
  /**
   * Show a list of all immobilecomercialrooms.
   * GET immobilecomercialrooms
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const immobileComercialRoom = await ImmobileComercialRoom.all()

    return response.json(immobileComercialRoom);
  }

  /**
   * Render a form to be used for creating a new immobilecomercialroom.
   * GET immobilecomercialrooms/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new immobilecomercialroom.
   * POST immobilecomercialrooms
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const immobileComercialRoomData = request.only(['immobile_id',
                                                'area',
                                                'qtde_banheiro',
                                                'qtde_comodo'
    ])


    console.log(immobileComercialRoomData);

    try{

      const immobileComercialRoom = await ImmobileComercialRoom.create(immobileComercialRoomData);

      return response.json({
        status: 'sucess',
        immobileComercialRoom: immobileComercialRoom,
      })

    } catch (error) {
      return response.json({
        status: 'error',
        message: 'ocorreu um erro inesperado!',
        technical: error
      })

    }
  }

  /**
   * Display a single immobilecomercialroom.
   * GET immobilecomercialrooms/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    try{  
      
      const immobileComercialRoom = await ImmobileComercialRoom.findOrFail (params.id)
      
      return immobileComercialRoom;

    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Apartamento não encontrado não encontrado!",
      })
    }
  }

  /**
   * Render a form to update an existing immobilecomercialroom.
   * GET immobilecomercialrooms/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update immobilecomercialroom details.
   * PUT or PATCH immobilecomercialrooms/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const immobileComercialRoomData = request.only(['immobile_id',
                                                'area',
                                                'qtde_banheiro',
                                                'qtde_comodo'
    ]);

    try {
      
      const immobileComercialRoom = await ImmobileComercialRoom.findOrFail(params.id);
      
      immobileComercialRoom.immobile_id = immobileComercialRoom.immobile_id;
      immobileComercialRoom.area = immobileComercialRoom.area;
      immobileComercialRoom.qtde_banheiro = immobileComercialRoom.qtde_banheiro;
      immobileComercialRoom.qtde_comodo = immobileComercialRoom.qtde_comodo;
      


      await immobileComercialRoom.save();

      return response.json({
        status: "sucess",
        message: "Dados atualizados com sucesso"
      })

      
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Não foi possível atualizar a sala comercial!",
      });
    }
  }

  /**
   * Delete a immobilecomercialroom with id.
   * DELETE immobilecomercialrooms/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    try{
      const immobileComercialRoom = await ImmobileComercialRoom.findOrFail(params.id);

      await immobileComercialRoom.delete();

      return response.json({
        status: "success",
        message: "Sala comercial removida com o sucesso!",
      });

    } catch {
      return response.status(404).json({
        status: "error",
        message: "Sala comercial não encontrado!",
      });
    }
  }
}

module.exports = ImmobileComercialRoomController
