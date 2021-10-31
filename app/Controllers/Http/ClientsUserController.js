'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ClientsUser = use('App/Models/ClientsUser')
/**
 * Resourceful controller for interacting with clientsusers
 */
class ClientsUserController {
  /**
   * Show a list of all clientsusers.
   * GET clientsusers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   * 
   */
  async index ({ request, response, view }) {

    const clientsUser = await ClientsUser.all()

    return response.json(clientsUser);
  }


  async store ({ request, response, auth }) {

    const clientsUserData = request.only([
      "clients_id",
      "fiador",
      "indicacao_pessoa1",
      "indicacao_pessoa2",
    ]);

    console.log(clientsUserData)

    try{

      const clientsUser = await ClientsUser.create(clientsUserData);

      const token = await auth.generate (clientsUser)

      return response.json({
        status: 'sucess',
        clientsUser: clientsUser,
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
   * Display a single clientsuser.
   * GET clientsusers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params,response }) {
    try {
      return response.json(await ClientsUser.findOrFail(params.id));
    
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Cliente usuário não encontrado!",
      });
    }
  }

  async updateProfile({ auth, request, response }) {
    const clientUserData = request.only([
      "fiador",
      "indicacao_pessoa1",
      "indicacao_pessoa2"
    ]);

    try {
      const clientsUser = auth.current.clientUserData;

      clientsUser.fiador = clientUserData.fiador;
      clientsUser.indicacao_pessoa1 = clientUserData.indicacao_pessoa1;
      clientsUser.indicacao_pessoa2 = clientUserData.indicacao_pessoa2;

      await clientsUser.save();
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Não foi possível atualizar o seu perfil!",
      });
    }
  }
  

  /**
   * Update clientsuser details.
   * PUT or PATCH clientsusers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
   async update({ auth, params, request, response }) {
    const clientUserData = request.only([
      "fiador",
      "indicacao_pessoa1",
      "indicacao_pessoa2"
    ]);

    try {
      const clientsUser = await ClientsUser.findOrFail(params.id);

      clientsUser.fiador = clientUserData.fiador;
      clientsUser.indicacao_pessoa1 = clientUserData.indicacao_pessoa1;
      clientsUser.indicacao_pessoa2 = clientUserData.indicacao_pessoa2;

      await clientsUser.save();
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Não foi possível atualizar o seu perfil!",
      });
    }
  }

  /**
   * Delete a clientsuser with id.
   * DELETE clientsusers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const clientsUser = await ClientsUser.findOrFail(params.id);

      await clientsUser.delete();

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

module.exports = ClientsUserController
