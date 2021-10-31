'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Employee = use('App/Models/Employee')
/**
 * Resourceful controller for interacting with employees
 */
class EmployeeController {
  /**
   * Show a list of all employees.
   * GET employees
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const employee = await Employee.all()

    return response.json(employee);

  }

  /**
   * Create/save a new employee.
   * POST employees
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const employeeData = request.only([
      "user_id",
      "role_id",
      "CPF",
      "nome",
      "endereco_rua",
      "endereco_numero",
      "endereco_complemento",
      "endereco_bairro",
      "endereco_cep",
      "telefone_contato",
      "telefone_celular",
      "data_ingresso",
      "salario_comissao",
      "salario_final",
      "user",
      "senha",
    ]);

    console.log(employeeData)

    try{

      const employee = await Employee.create(employeeData);

      const token = await auth.generate (employee)

      return response.json({
        status: 'sucess',
        employee: employee,
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
   * Display a single employee.
   * GET employees/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {

    try{  
      
      const employee = await Employee.findOrFail (params.id)
      
      return employee;

    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Funcionário não encontrado!",
      })
    }
  }

  async updateProfile({ auth, request, response }) {
    const employeeData = request.only([
      "user_id",
      "role_id",
      "CPF",
      "nome",
      "endereco_rua",
      "endereco_numero",
      "endereco_complemento",
      "endereco_bairro",
      "endereco_cep",
      "telefone_contato",
      "telefone_celular",
      "data_ingresso",
      "salario_comissao",
      "salario_final",
      "user",
      "senha",
    ]);

    try {
      const employee = auth.current.employeeData;
      
      employee.user_id = employeeData.user_id;
      employee.role_id = employeeData.role_id;
      employee.CPF = employeeData.CPF;
      employee.nome = employeeData.nome;
      employee.endereco_rua = employeeData.endereco_rua;
      employee.endereco_numero = employeeData.endereco_numero;
      employee.endereco_complemento = employeeData.endereco_complemento;
      employee.endereco_bairro = employeeData.endereco_bairro;
      employee.endereco_cep = employeeData.endereco_cep;
      employee.telefone_contato = employeeData.telefone_contato;
      employee.telefone_celular = employeeData.telefone_celular;
      employee.data_ingresso = employeeData.data_ingresso;
      employee.salario_comissao = employeeData.salario_comissao;
      employee.salario_final = employeeData.salario_final;
      employee.user = employeeData.user;
      employee.senha = employeeData.senha;

      await employee.save();
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Não foi possível atualizar o seu perfil!",
      });
    }
  }

  /**
   * Update employee details.
   * PUT or PATCH employees/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const employeeData = request.only([
      "user_id",
      "role_id",
      "CPF",
      "nome",
      "endereco_rua",
      "endereco_numero",
      "endereco_complemento",
      "endereco_bairro",
      "endereco_cep",
      "telefone_contato",
      "telefone_celular",
      "data_ingresso",
      "salario_comissao",
      "salario_final",
      "user",
      "senha",
    ]);

    try {
      const employee = await Employee.findOrFail(params.id);

      employee.user_id = employeeData.user_id;
      employee.role_id = employeeData.role_id;
      employee.CPF = employeeData.CPF;
      employee.nome = employeeData.nome;
      employee.endereco_rua = employeeData.endereco_rua;
      employee.endereco_numero = employeeData.endereco_numero;
      employee.endereco_complemento = employeeData.endereco_complemento;
      employee.endereco_bairro = employeeData.endereco_bairro;
      employee.endereco_cep = employeeData.endereco_cep;
      employee.telefone_contato = employeeData.telefone_contato;
      employee.telefone_celular = employeeData.telefone_celular;
      employee.data_ingresso = employeeData.data_ingresso;
      employee.salario_comissao = employeeData.salario_comissao;
      employee.salario_final = employeeData.salario_final;
      employee.user = employeeData.user;
      employee.senha = employeeData.senha;

      await employee.save();
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Não foi possível atualizar o seu perfil!",
      });
    }
  }

  /**
   * Delete a employee with id.
   * DELETE employees/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    try {
      const employee = await Employee.findOrFail(params.id);

      await employee.delete();

      return response.json({
        status: "success",
        message: "Funcionario removido com o sucesso!",
      });
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Funcionario não encontrado!",
      });
    }

  }
}

module.exports = EmployeeController
