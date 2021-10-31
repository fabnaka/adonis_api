'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ImmobileApartment = use('App/Models/ImmobileApartment')

/**
 * Resourceful controller for interacting with immobileapartments
 */
class ImmobileApartmentController {
  /**
   * Show a list of all immobileapartments.
   * GET immobileapartments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const immobileapartment = await ImmobileApartment.all()

    return response.json(immobileapartment);

  }

  /**
   * Render a form to be used for creating a new immobileapartment.
   * GET immobileapartments/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new immobileapartment.
   * POST immobileapartments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const immobileApartmentData = request.only(['immobile_id',
                                            'qtde_quarto',
                                            'qtde_suite',
                                            'qtde_sala_de_estar',,
                                            'qtde_sala_de_jantar',
                                            'qtde_vagas_garagem',
                                            'area',
                                            'possui_armario_embutido',
                                            'descricao',
                                            'andar',
                                            'valor_condominio',
                                            'portaria_24h'
    ])

    console.log(immobileApartmentData);

    try{

      const immobileapartment = await ImmobileApartment.create(immobileApartmentData);

      return response.json({
        status: 'sucess',
        immobileapartment: immobileapartment,
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
   * Display a single immobileapartment.
   * GET immobileapartments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    try{  
      
      const immobileApartment = await ImmobileApartment.findOrFail (params.id)
      
      return immobileApartment;

    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Apartamento não encontrado não encontrado!",
      })
    }
  }

  /**
   * Render a form to update an existing immobileapartment.
   * GET immobileapartments/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update immobileapartment details.
   * PUT or PATCH immobileapartments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const immobileApartmentData = request.only(['immobile_id',
                                            'qtde_quarto',
                                            'qtde_suite',
                                            'qtde_sala_de_estar',,
                                            'qtde_sala_de_jantar',
                                            'qtde_vagas_garagem',
                                            'area',
                                            'possui_armario_embutido',
                                            'descricao',
                                            'andar',
                                            'valor_condominio',
                                            'portaria_24h'
    ]);

    try {
      
      const immobileApartment = await ImmobileApartment.findOrFail(params.id);

      
      immobileApartment.immobile_id = immobileApartment.immobile_id;
      immobileApartment.qtde_quarto = immobileApartment.qtde_quarto;
      immobileApartment.qtde_suite = immobileApartment.qtde_suite;
      immobileApartment.qtde_sala_de_estar = immobileApartment.qtde_sala_de_estar;
      immobileApartment.qtde_sala_de_jantar = immobileApartment.qtde_sala_de_jantar;
      immobileApartment.qtde_vagas_garagem = immobileApartment.qtde_vagas_garagem;
      immobileApartment.area = immobileApartment.area;
      immobileApartment.possui_armario_embutido = immobileApartment.possui_armario_embutido;
      immobileApartment.descricao = immobileApartment.descricao;
      immobileApartment.andar = immobileApartment.andar;
      immobileApartment.valor_condominio = immobileApartment.valor_condominio;
      immobileApartment.portaria_24h = immobileApartment.portaria_24h;


      await immobileApartment.save();

      return response.json({
        status: "sucess",
        message: "Dados atualizados com sucesso"
      })

      
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Não foi possível atualizar o apartamento!",
      });
    }
  }

  /**
   * Delete a immobileapartment with id.
   * DELETE immobileapartments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    try{
      const immobileApartment = await ImmobileApartment.findOrFail(params.id);

      await immobileApartment.delete();

      return response.json({
        status: "success",
        message: "Apartamento removido com o sucesso!",
      });

    } catch {
      return response.status(404).json({
        status: "error",
        message: "Apartamento não encontrado!",
      });
    }
  }
}

module.exports = ImmobileApartmentController
