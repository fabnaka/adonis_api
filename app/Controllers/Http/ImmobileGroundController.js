'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ImmobileGround = use('App/Models/ImmobileGround')

/**
 * Resourceful controller for interacting with immobilegrounds
 */
class ImmobileGroundController {
  /**
   * Show a list of all immobilegrounds.
   * GET immobilegrounds
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const immobileGround = await ImmobileGround.all()

    return response.json(immobileGround);
  }

  /**
   * Render a form to be used for creating a new immobileground.
   * GET immobilegrounds/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new immobileground.
   * POST immobilegrounds
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const immobileGroundData = request.only(['immobile_id',
                                                'area',
                                                'largura',
                                                'comprimento',
                                                'possui_aclive',
                                                'possui_declive'
    ])



    console.log(immobileGroundData);

    try{

      const immobileGround = await ImmobileGround.create(immobileGroundData);

      return response.json({
        status: 'sucess',
        immobileGround: immobileGround,

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
   * Display a single immobileground.
   * GET immobilegrounds/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    try{  
      
      const immobileGround = await ImmobileGround.findOrFail (params.id)
      
      return immobileGround;

    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Terreno não encontrado não encontrado!",
      })
    }
  }

  /**
   * Render a form to update an existing immobileground.
   * GET immobilegrounds/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update immobileground details.
   * PUT or PATCH immobilegrounds/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const immobileGroundData = request.only(['immobile_id',
                                                'area',
                                                'largura',
                                                'comprimento',
                                                'possui_aclive',
                                                'possui_declive'
    ])

    try {
      
      const immobileGround = await ImmobileGround.findOrFail(params.id);
      
      immobileGround.immobile_id = immobileGround.immobile_id;
      immobileGround.area = immobileGround.area;
      immobileGround.largura = immobileGround.largura;
      immobileGround.comprimento = immobileGround.comprimento;
      immobileGround.possui_aclive = immobileGround.possui_aclive;
      immobileGround.possui_declive = immobileGround.possui_declive;
      
      
      await immobileGround.save();

      return response.json({
        status: "sucess",
        message: "Dados atualizados com sucesso"
      })

      
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Não foi possível atualizar o terreno!",
      });
    }
  }

  /**
   * Delete a immobileground with id.
   * DELETE immobilegrounds/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    try{
      const immobileGround = await ImmobileGround.findOrFail(params.id);

      await immobileGround.delete();

      return response.json({
        status: "success",
        message: "Terreno removido com o sucesso!",
      });

    } catch {
      return response.status(404).json({
        status: "error",
        message: "Terreno não encontrado!",
      });
    }
  }
}

module.exports = ImmobileGroundController
