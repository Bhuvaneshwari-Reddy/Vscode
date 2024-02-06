const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);

describe("Reqres Test Cases", ()=>{

    it("Get Request Status code 200", (done)=>{

        chai.request("https://reqres.in/")
        .get("api/users/2")
        .end((reject, resolve)=>{
            expect(resolve).to.have.status(200)
            done();
            // console.log(resolve.body);

        })
    })


    it("Verift all the list of reqres", (done)=>{
        chai.request("https://reqres.in/")
        .get("api/users?page=2") 
        .end((err, res)=>{
            // expect(res.body).to.an("object")
            expect(res.body).to.have.property('data')
            done()
            console.log(res.body)
             })
        })    

    it("Create users in reqres", (done)=>{
        const a={
            
                "name": "Vinay",
                "job": "QA"
         }
         chai.request("https://reqres.in/")
         .post("api/users")
         .send(a)
         .end((err, res)=>{
            expect(res.body).to.have.property('id')
            done()
         })
    })
    
    it("Update users", (done)=>{
        const a={
            
            "name": "Vinay Shah",
            "job": "QA"
     }
     chai.request("https://reqres.in/")
     .patch("api/users/12")
     .send(a)
     .end((err, res)=>{
        expect(res.body).to.have.property('name')
        expect(res.body).to.have.property('job')
        expect(res.body).to.have.property('updatedAt')

              a =res.body.name;
        done()
     })
    })

    it("delete user", (done)=>{
    chai.request("https://reqres.in/")    
    .delete("api/users/12")
    
    
    .end((err, res)=>{
        expect(res).to.have.status(204)
        done()
})    




    })


})