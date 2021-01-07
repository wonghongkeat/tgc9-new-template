'use strict'

const authorsDB = [
   {
      "id":1,
	  "name":"JRR Tolkien"
   },
   {
	  "id":2,
	  "name":"CS Lewis"
   },
   {
	  "id":3,
	  "name":"Goh Sin Tub"
   },
   {
	  "id":4,
	  "name":"Catherine Lee"
   }

]

const Authors = use('App/Models/Author')

class AuthorController {
  async processCreate({request, response}){
    let info = request.post()
    let author = new Authors()
    author.first_name = info.first_name
    author.last_name = info.last_name
    author.dob = info.dob
    await author.save()
    return response.redirect('/authors')
    console.log(request.post())
  }

  create({view}){
    return view.render('create_author')
  }

  async author({view,params}){
    let authorID = params.id
    let author = await Authors.find(authorID)
    return view.render('authorid',{
      author
    })

  }

  async index({view}){
    let allAuthor = await Authors.all()
    return view.render('authors',{
      "index":allAuthor.toJSON()
    })
  }
}

module.exports = AuthorController
