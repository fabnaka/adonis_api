'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Role = use('App/Models/Role')
/**
 * Resourceful controller for interacting with roles
 */
class RoleController {
  /**
   * Show a list of all roles.
   * GET roles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const roles = await Role.all()

    return response.json(roles);


  }

  
  /**
   * Create/save a new role.
   * POST roles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const roleData = request.only([
      "nome_cargo",
      "salario"
    ]);

    console.log(roleData)

    try{

      const role = await Role.create(roleData);


      return response.json({
        status: 'sucess',
        role: role
      })

    } catch (error) {
      return response.json({
        status: 'error',
        message: 'ocorreu um erro ao cadastrar o cargo!',
        technical: error
      })

    }
  }

  /**
   * Display a single role.
   * GET roles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    try {
      return response.json(await Role.findOrFail(params.id));
    
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Cargo não encontrado!",
      });
    }

  }

  
  /**
   * Update role details.
   * PUT or PATCH roles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const roleData = request.only(['nome_cargo',
                                  'salario'
    ]);

    try {
      
      const role = await Role.findOrFail(params.id);

      role.nome_cargo = roleData.nome_cargo;
      role.salario = roleData.salario;

      await role.save();

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
   * Delete a role with id.
   * DELETE roles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    try{
      const role = await Role.findOrFail(params.id);

      await role.delete();

      return response.json({
        status: "success",
        message: "Cargo removido com o sucesso!",
      });

    } catch {
      return response.status(404).json({
        status: "error",
        message: "Cargo não encontrado!",
      });
    }
  }
}

module.exports = RoleController
