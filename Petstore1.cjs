const chai = require('chai')
const chaiHttp = require("chai-http")
const { describe } = require('mocha')
const expect = chai.expect
chai.use(chaiHttp)


describe("Petstore Test Cases", ()=>{



it("Create the users", (done)=>{
chai
    .request("https://petstore.swagger.io/v2")
    .post("/pet")
    .send({
           "id": 1,
            "category": {
              "id": 1,
              "name": "Bruno"
            },
            "name": "doggie",
            "photoUrls": [
              "https://httpstatusdogs.com/"
            ],
            "tags": [
              {
                "id": 1,
                "name": "Bruno"
              }
            ],
            "status": "available"
          }
        )
    .end((err, res)=>{
        expect(res).to.have.status(200)
        expect(res.body).to.have.property("id")    
        expect(res.body.category).to.have.property("id")    
        expect(res.body.category).to.have.property("name")
        expect(res.body).to.have.property("name")
        expect(res.body.tags[0]).to.have.property("id")
        expect(res.body.tags[0]).to.have.property("name")
        expect(res.body).to.have.property("status")
        console.log(res.body)

    done()
    })
})


    it("Get the pet", (done)=>{
    chai
        .request("https://petstore.swagger.io/v2")        
        .get("/pet/1")
        .end((err, res)=>{
         expect(res).to.have.status(200)   
         console.log(res.body)
         done()   
        })
    })


    it("Update the Pet", (done)=>{
    chai
        .request("https://petstore.swagger.io/v2")    
        .put("/pet")
        .send({

            "id": 1,
            "category": {
              "id": 2,
              "name": "Doffie"
            },
            "name": "doggie",
            "photoUrls": [
              "https://httpstatusdogs.com/"
            ],
            "tags": [
              {
                "id": 3,
                "name": "Bruno"
              }
            ],
            "status": "available"


        })

        .end((err, res)=>{
          expect(res).to.include.status(200)
          console.log(res.body)
            
          done()  
        })


    })

it("delete the pet", (done)=>{
chai
    .request("https://petstore.swagger.io/v2")
    .delete("/pet/1")
    .end((err, res)=>{
     expect(res).to.have.status(200)   
     done()
     })
})



})



