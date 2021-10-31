'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ImmobileHouse = use('App/Models/ImmobileHouse')
/**
 * Resourceful controller for interacting with immobilehouses
 */
class ImmobileHouseController {
  /**
   * Show a list of all immobilehouses.
   * GET immobilehouses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const immobilehouse = await ImmobileHouse.all()

    return response.json(immobilehouse);

  }


  /**
   * Create/save a new immobilehouse.
   * POST immobilehouses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const immobileHouseData = request.only(['immobile_id',
                                            'qtde_quarto',
                                            'qtde_suite',
                                            'qtde_sala_de_estar',,
                                            'qtde_sala_de_jantar',
                                            'qtde_vagas_garagem',
                                            'area',
                                            'possui_armario_embutido',
                                            'descricao'
    ])

    console.log(immobileHouseData)

    try{

      const immobileHouse = await ImmobileHouse.create(immobileHouseData);

      return response.json({
        status: 'sucess',
        immobileHouse: immobileHouse,
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
   * Display a single immobilehouse.
   * GET immobilehouses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    try{  
      
      const immobileHouse = await ImmobileHouse.findOrFail (params.id)
      
      return immobileHouse;

    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Usuario não encontrado!",
      })
    }
  }

  /**
   * Render a form to update an existing immobilehouse.
   * GET immobilehouses/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {



  }

  /**
   * Update immobilehouse details.
   * PUT or PATCH immobilehouses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const immobileHouseData = request.only(['immobile_id',
                                            'qtde_quarto',
                                            'qtde_suite',
                                            'qtde_sala_de_estar',,
                                            'qtde_sala_de_jantar',
                                            'qtde_vagas_garagem',
                                            'area',
                                            'possui_armario_embutido',
                                            'descricao'
    ]);

    try {
      
      const immobileHouse = await ImmobileHouse.findOrFail(params.id);

      
      immobileHouse.immobile_id = immobileHouse.immobile_id;
      immobileHouse.qtde_quarto = immobileHouse.qtde_quarto;
      immobileHouse.qtde_suite = immobileHouse.qtde_suite;
      immobileHouse.qtde_sala_de_estar = immobileHouse.qtde_sala_de_estar;
      immobileHouse.qtde_sala_de_jantar = immobileHouse.qtde_sala_de_jantar;
      immobileHouse.qtde_vagas_garagem = immobileHouse.qtde_vagas_garagem;
      immobileHouse.area = immobileHouse.area;
      immobileHouse.possui_armario_embutido = immobileHouse.possui_armario_embutido;
      immobileHouse.descricao = immobileHouse.descricao;
      
      await immobileHouse.save();

      return response.json({
        status: "sucess",
        message: "Dados atualizados com sucesso"
      })

      
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Não foi possível atualizar o seu perfil!",
      });
    }


  }

  /**
   * Delete a immobilehouse with id.
   * DELETE immobilehouses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    
    try{
      const immobileHouse = await ImmobileHouse.findOrFail(params.id);

      await immobileHouse .delete();

      return response.json({
        status: "success",
        message: "Usuário removido com o sucesso!",
      });

    } catch {
      return response.status(404).json({
        status: "error",
        message: "Usuário não encontrado!",
      });
    }


  }
}

module.exports = ImmobileHouseController
