'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ClientsGuarantorRecommendation = use('App/Models/ClientsGuarantorRecommendation')
/**
 * Resourceful controller for interacting with clientsguarantorrecommendations
 */
class ClientsGuarantorRecommendationController {
  /**
   * Show a list of all clientsguarantorrecommendations.
   * GET clientsguarantorrecommendations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const clientsGuarantorRecommendation = await ClientsGuarantorRecommendation.all()

    return response.json(clientsGuarantorRecommendation);

  }

  
  async store ({ request, response, auth }) {

    const clientsGuarantorRecommendationData = request.only([
      "clients_id",
    ]);

    console.log(clientsGuarantorRecommendationData)

    try{

      const clientsGuarantorRecommendation = await ClientsGuarantorRecommendation.create(clientsGuarantorRecommendationData);

      const token = await auth.generate (clientsGuarantorRecommendation)

      return response.json({
        status: 'sucess',
        clientsGuarantorRecommendation: clientsGuarantorRecommendation,
        data: token,
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
   * Display a single clientsguarantorrecommendation.
   * GET clientsguarantorrecommendations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {

    try {
      return response.json(await ClientsGuarantorRecommendation.findOrFail(params.id));
    
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Usuario fiador ou recomenda não encontrado!",
      });
    }


  }

  async updateProfile({ auth, request, response }) {
    const clientsGuarantorRecommendationData = request.only([
      
    ]);

    try {
      const clientsGuarantorRecommendationData = auth.current.clientsGuarantorRecommendationData;

      await clientsGuarantorRecommendationData.save();
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Não foi possível atualizar o seu perfil!",
      });
    }
  }

  /**
   * Update clientsguarantorrecommendation details.
   * PUT or PATCH clientsguarantorrecommendations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({auth, params, request, response }) {

    const clientsGuarantorRecommendationData = request.only([
      
    ]);

    try {
      const clientsGuarantorRecommendationData = await ClientsGuarantorRecommendation.findOrFail(params.id);

      await clientsGuarantorRecommendationData.save();
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Não foi possível atualizar o seu perfil!",
      });
    }
  }

  /**
   * Delete a clientsguarantorrecommendation with id.
   * DELETE clientsguarantorrecommendations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const clientsGuarantorRecommendation = await ClientsGuarantorRecommendation.findOrFail(params.id);

      await clientsGuarantorRecommendation.delete();

      return response.json({
        status: "success",
        message: "Cliente usuario removido com o sucesso!",
      });
      
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Cliente usuario não encontrado!",
      });
    }
  }
}

module.exports = ClientsGuarantorRecommendationController
