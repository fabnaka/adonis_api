'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const SellRent = use('App/Models/SellRent')
/**
 * Resourceful controller for interacting with sellrents
 */
class SellRentController {
  /**
   * Show a list of all sellrents.
   * GET sellrents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const sellRent = await SellRent.all()

    return response.json(sellRent);

  }

  
  /**
   * Create/save a new sellrent.
   * POST sellrents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const sellRentData = request.only([
      "immobile_id",
      "payment_id",
      "employee_id",
      "user_id",
      "contrato",
      "tipo",
      "valor",
      "porcentagem_imobiliaria",
      "porcentagem_funcionario",
      "data"
    ]);

    console.log(sellRentData)

    try{

      const sellRent = await SellRent.create(sellRentData);


      return response.json({
        status: 'sucess',
        sellRent: sellRent
      })

    } catch (error) {
      return response.json({
        status: 'error',
        message: 'ocorreu um erro ao cadastrar uma operação de venda/alugel!',
        technical: error
      })

    }
  }

  /**
   * Display a single sellrent.
   * GET sellrents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    try{  
      
      const sellRent = await SellRent.findOrFail (params.id)
      
      return sellRent;

    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Operação venda/alugel não encontrado!",
      })
    }
  }

  
  /**
   * Update sellrent details.
   * PUT or PATCH sellrents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const sellRentData = request.only([
      "immobile_id",
      "payment_id",
      "employee_id",
      "user_id",
      "contrato",
      "tipo",
      "valor",
      "porcentagem_imobiliaria",
      "porcentagem_funcionario",
      "data"
    ]);

    try {
      
      const sellRent = await SellRent.findOrFail(params.id);

      sellRent.immobile_id = sellRent.immobile_id;
      sellRent.payment_id = sellRent.payment_id;
      sellRent.employee_id = sellRent.employee_id;
      sellRent.user_id = sellRent.user_id;
      sellRent.contrato = sellRent.contrato;
      sellRent.tipo = sellRent.tipo;
      sellRent.valor = sellRent.valor;
      sellRent.porcentagem_imobiliaria = sellRent.porcentagem_imobiliaria;
      sellRent.porcentagem_funcionario = sellRent.porcentagem_funcionario;
      sellRent.data = sellRent.data;

      await sellRent.save();

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
   * Delete a sellrent with id.
   * DELETE sellrents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    try{
      const sellRent = await SellRent.findOrFail(params.id);

      await sellRent.delete();

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

module.exports = SellRentController
