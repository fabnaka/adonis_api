'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Payment = use('App/Models/Payment')
/**
 * Resourceful controller for interacting with payments
 */
class PaymentController {
  /**
   * Show a list of all payments.
   * GET payments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const payment = await Payment.all()

    return response.json(payment);

  }


  /**
   * Create/save a new payment.
   * POST payments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const paymentData = request.only([
      "nome"
    ]);

    console.log(paymentData)

    try{

      const payment = await Payment.create(paymentData);


      return response.json({
        status: 'sucess',
        payment: payment
      })

    } catch (error) {
      return response.json({
        status: 'error',
        message: 'ocorreu um erro ao cadastrar o pagamento!',
        technical: error
      })

    }

  }

  /**
   * Display a single payment.
   * GET payments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    try {
      return response.json(await Payment.findOrFail(params.id));
    
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Cargo não encontrado!",
      });
    }
  }

  /**
   * Update payment details.
   * PUT or PATCH payments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const paymentData = request.only(['nome']);

    try {
      
      const payment = await Payment.findOrFail(params.id);

      payment.nome = paymentData.nome;

      await payment.save();

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
   * Delete a payment with id.
   * DELETE payments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    try{
      const payment = await Payment.findOrFail(params.id);

      await payment.delete();

      return response.json({
        status: "success",
        message: "Pagamento removido com o sucesso!",
      });

    } catch {
      return response.status(404).json({
        status: "error",
        message: "Pagamento não encontrado!",
      });
    }
  }
}

module.exports = PaymentController
