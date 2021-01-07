'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.on('/about-us').render('about-us')
// or
Route.get('about_us', ()=>{
  return `about us`
})

Route.get('view_record/:record_id', ({ params }) => {
  return `post ${params.record_id}`
})

Route.get('special/', ()=>{
}).as('special.index')



Route.get('controller/', 'SightingController.index')

// Route.on('/sightings/about').render('sighting-index')

Route.get('sightings/about', 'SightingController.about')

Route.get('sightings/details/:detail_id/view', 'SightingController.details')

Route.get('sightings/details/:detail_id/create', 'SightingController.create')
Route.post('sightings/details/:detail_id/create', 'SightingController.processCreate')
