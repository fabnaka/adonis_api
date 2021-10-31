'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const ImmobileHistoric = use('App/Models/ImmobileHistoric')
/**
 * Resourceful controller for interacting with immobilehistorics
 */
class ImmobileHistoricController {
  /**
   * Show a list of all immobilehistorics.
   * GET immobilehistorics
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const immobileHistoric = await ImmobileHistoric.all()

    return response.json(immobileHistoric);
  }

  
  /**
   * Create/save a new immobilehistoric.
   * POST immobilehistorics
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {


    const immobileHistoricData = request.only(['operation_immobile_id',
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
                                                'data_anuncio_venda'
    ])

    console.log(immobileHistoricData)

    try{

      const immobileHistoric = await ImmobileHistoric.create(immobileHistoricData);

      return response.json({
        status: 'sucess',
        immobileHistoric: immobileHistoric
      })

    } catch (error) {
      return response.json({
        status: 'error',
        message: 'ocorreu um erro ao cadastrar o histórico!',
        technical: error
      })

    }
  }

  /**
   * Display a single immobilehistoric.
   * GET immobilehistorics/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    try{  
      
      const immobileHistoric = await ImmobileHistoric.findOrFail (params.id)
      
      return immobileHistoric;

    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Histórico não encontrado!",
      })
    }
  }

  
  /**
   * Update immobilehistoric details.
   * PUT or PATCH immobilehistorics/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {


    const immobileHistoricData = request.only(['operation_immobile_id',
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
                                                'data_anuncio_venda'
    ])

    try {
      
      const immobileHistoric = await ImmobileHistoric.findOrFail(params.id);

      immobileHistoric.operation_immobile_id = immobileHistoricData.operation_immobile_id;
      immobileHistoric.locacao = immobileHistoricData.locacao;
      immobileHistoric.venda = immobileHistoricData.venda;
      immobileHistoric.locacao = immobileHistoricData.locacao;
      immobileHistoric.ja_foi_locado = immobileHistoricData.ja_foi_locado;
      immobileHistoric.locacao = immobileHistoricData.locacao;
      immobileHistoric.ja_foi_vendido = immobileHistoricData.ja_foi_vendido;
      immobileHistoric.foto = immobileHistoricData.foto;
      immobileHistoric.data_construcao = immobileHistoricData.data_construcao;
      immobileHistoric.categoria = immobileHistoricData.categoria;
      immobileHistoric.endereco_rua = immobileHistoricData.endereco_rua;
      immobileHistoric.endereco_numero = immobileHistoricData.endereco_numero;
      immobileHistoric.endereco_complemento = immobileHistoricData.endereco_complemento;
      immobileHistoric.endereco_bairro = immobileHistoricData.endereco_bairro;
      immobileHistoric.endereco_cep = immobileHistoricData.endereco_cep;
      immobileHistoric.valor_venda = immobileHistoricData.valor_venda;
      immobileHistoric.valor_aluguel = immobileHistoricData.valor_aluguel;
      immobileHistoric.data_anuncio_locacao = immobileHistoricData.data_anuncio_locacao;
      immobileHistoric.data_anuncio_venda = immobileHistoricData.data_anuncio_venda;
      

      await immobileHistoric.save();

      return response.json({
        status: "sucess",
        message: "Dados atualizados com sucesso"
      })

      
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Não foi possível atualizar o seu histórico!",
      });
    }
  }

  /**
   * Delete a immobilehistoric with id.
   * DELETE immobilehistorics/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    try{
      const immobileHistoric = await ImmobileHistoric.findOrFail(params.id);

      await immobileHistoric.delete();

      return response.json({
        status: "success",
        message: "Histórico removido com o sucesso!",
      });

    } catch {
      return response.status(404).json({
        status: "error",
        message: "Histórico não encontrado!",
      });
    }
    

  }
}

module.exports = ImmobileHistoricController
