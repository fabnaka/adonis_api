'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Immobile = use('App/Models/Immobile')
/**
 * Resourceful controller for interacting with immobiles
 */
class ImmobileController {
  /**
   * Show a list of all immobiles.
   * GET immobiles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const immobile = await Immobile.all()

    return response.json(immobile);
  }

  /**
   * Render a form to be used for creating a new immobile.
   * GET immobiles/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {

    
  }

  /**
   * Create/save a new immobile.
   * POST immobiles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const immobileData = request.only(['client_owners_id',
                                                'locacao',
                                                'venda',
                                                'ja_foi_locado',
                                                'ja_foi_vendido',
                                                'foto', 
                                                'data_construcao',
                                                'categoria', 
                                                'endereco_rua', 
                                                'endereco_numero', , 
                                                'endereco_complemento', 
                                                'endereco_bairro', 
                                                'endereco_cep',
                                                'valor_venda',
                                                'valor_aluguel', ,
                                                'data_anuncio_locacao',
                                                'data_anuncio_venda',
                                                'disponibilidade'
    ])

    console.log(immobileData)

    try{

      const immobile = await Immobile.create(immobileData);

      return response.json({
        status: 'sucess',
        immobile: immobile
      })

    } catch (error) {
      return response.json({
        status: 'error',
        message: 'ocorreu um erro ao cadastrar o imóvel!',
        technical: error
      })

    }
  }

  /**
   * Display a single immobile.
   * GET immobiles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    
    try{  
      
      const immobile = await Immobile.findOrFail (params.id)
      
      return immobile;

    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Usuario não encontrado!",
      })
    }
  }

  /**
   * Update immobile details.
   * PUT or PATCH immobiles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const immobileData = request.only(['client_owners_id',
                                                'locacao',
                                                'venda',
                                                'ja_foi_locado',
                                                'ja_foi_vendido',
                                                'foto', 
                                                'data_construcao',
                                                'categoria', 
                                                'endereco_rua', 
                                                'endereco_numero', , 
                                                'endereco_complemento', 
                                                'endereco_bairro', 
                                                'endereco_cep',
                                                'valor_venda',
                                                'valor_aluguel', ,
                                                'data_anuncio_locacao',
                                                'data_anuncio_venda',
                                                'disponibilidade'
    ]);

    try {
      
      const immobile = await Immobile.findOrFail(params.id);

      immobile.client_owners_id = immobileData.client_owners_id;
      immobile.locacao = immobileData.locacao;
      immobile.venda = immobileData.venda;
      immobile.locacao = immobileData.locacao;
      immobile.ja_foi_locado = immobileData.ja_foi_locado;
      immobile.ja_foi_vendido = immobileData.ja_foi_vendido;
      immobile.foto = immobileData.foto;
      immobile.data_construcao = immobileData.data_construcao;
      immobile.categoria = immobileData.categoria;
      immobile.endereco_rua = immobileData.endereco_rua
      immobile.endereco_numero = immobileData.endereco_numero;
      immobile.endereco_complemento = immobileData.endereco_complemento;
      immobile.endereco_bairro = immobileData.endereco_bairro;
      immobile.endereco_cep = immobileData.endereco_cep;
      immobile.valor_venda = immobileData.valor_venda;
      immobile.valor_aluguel = immobileData.valor_aluguel;
      immobile.data_anuncio_locacao = immobileData.data_anuncio_locacao;
      immobile.data_anuncio_venda = immobileData.data_anuncio_venda;
      immobile.disponibilidade = immobileData.disponibilidade;

      await immobile.save();

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
   * Delete a immobile with id.
   * DELETE immobiles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    try{
      const immobile = await Immobile.findOrFail(params.id);

      await immobile.delete();

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

module.exports = ImmobileController
