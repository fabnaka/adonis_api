'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ClientsOwner = use('App/Models/ClientsOwner')
/**
 * Resourceful controller for interacting with clientsowners
 */
class ClientsOwnerController {
  /**
   * Show a list of all clientsowners.
   * GET clientsowners
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    
    const clientsOwner = await ClientsOwner.all()

    return response.json(clientsOwner);

  }

  /**
   * Create/save a new clientsowner.
   * POST clientsowners
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {

    const clientsOwnerData = request.only([
      "clients_id",
    ]);

    console.log(clientsOwnerData)

    try{

      const clientsOwner = await ClientsOwner.create(clientsOwnerData);

      const token = await auth.generate (clientsOwner)

      return response.json({
        status: 'sucess',
        clientsOwner: clientsOwner,
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
   * Display a single clientsowner.
   * GET clientsowners/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    try {
      return response.json(await ClientsOwner.findOrFail(params.id));
    
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Cliente proprietario não encontrado!",
      });
    }
  }

  async updateProfile({ auth, request, response }) {
    const clientOwnerData = request.only([
      
    ]);

    try {
      const clientsOwner = auth.current.clientOwnerData;

      await clientsOwner.save();
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Não foi possível atualizar o seu perfil!",
      });
    }
  }

  /**
   * Update clientsowner details.
   * PUT or PATCH clientsowners/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({auth, params, request, response }) {

    const clientOwnerData = request.only([
      
    ]);

    try {
      const clientsOwner = await ClientsOwner.findOrFail(params.id);

      await clientsOwner.save();
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Não foi possível atualizar o perfil!",
      });
    }
  }

  /**
   * Delete a clientsowner with id.
   * DELETE clientsowners/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const clientsOwner = await ClientsOwner.findOrFail(params.id);

      await clientsOwner.delete();

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

module.exports = ClientsOwnerController
