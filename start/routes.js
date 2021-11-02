'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

//Listar usuários
Route.post('/login','UserController.login')
Route.post('/users','UserController.signup')
Route.resource("users", "UserController").apiOnly()

Route.group ( () => {
  //Route.resource("users", "UserController").apiOnly()
  Route.put("/update_profile","UserController.updateProfile")
  //Route.put('/users','UserController.update')
  
}).middleware (["auth"]);

//Route.post('/clients','ClientController.create')
//Route.get('/clients','ClientController.index')

Route.resource("clients", "ClientController").apiOnly()

Route.resource("clients_users", "ClientsUserController").apiOnly()

Route.resource("clients_guarantor_recommendations", "ClientsGuarantorRecommendationController").apiOnly()

Route.resource("clients_owners", "ClientsOwnerController").apiOnly()

Route.resource("employees", "EmployeeController").apiOnly()

Route.resource("immobiles", "ImmobileController").apiOnly()

Route.resource("immobiles_houses", "ImmobileHouseController").apiOnly()

Route.resource("immobiles_apartments", "ImmobileApartmentController").apiOnly()

Route.resource("immobiles_comercial_rooms", "ImmobileComercialRoomController").apiOnly()

Route.resource("immobiles_grounds", "ImmobileGroundController").apiOnly()

Route.resource("roles", "RoleController").apiOnly()

Route.resource("payment", "PaymentController").apiOnly()

Route.resource("sell_rents", "SellRentController").apiOnly()

Route.resource("operation_immobiles", "OperationImmobileController").apiOnly()

Route.resource("immobiles_historic", "ImmobileHistoricController").apiOnly()