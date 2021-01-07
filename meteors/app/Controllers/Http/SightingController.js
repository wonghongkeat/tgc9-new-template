'use strict'

class SightingController {


about(c){
  return c.view.render('sighting-index')
}

index({response}){
return response.json({
  "sightings":[
    {
      "date": "22/01/2020",
      "coordinate":{
        "lat":1.07,
        "lng":2.02
      }
    }
  ]
})
}
details({view, params}){
let x = params.detail_id
  return view.render('sightings-details',
  {x} )
}

create({view,request}){

return view.render('sightings-create')
}

processCreate({request}){
let sighting = request.post()
  return sighting

}

}

module.exports = SightingController
