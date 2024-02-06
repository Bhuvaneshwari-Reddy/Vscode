const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);


describe("Sample API Tests", () => {

    it("should return a 200 OK response for GET request", (done) => {
        chai.request("https://reqres.in")
            .get('/api/users?page=2')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                done();
            });
    });

    it("should return a 201 Created response for POST request", (done) => {
        const userData = {
            name: "John Doe",
            job: "Engineer"
        };

        chai.request("https://reqres.in")
            .post('/api/users')
            .send(userData)
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object').that.includes(userData);
                done();
                //console.log(res.body)
            });
    });

    // Add more test cases as needed
    it("should return a code of 200 get response for GET request",(done)=>{
        chai.request("https://reqres.in")
        .get("/api/users?page=2")
        .end((err, res) => {
            expect(res).to.have.status(200);
            //expect(res.body).to.be.an('object').that.includes(userData);
            done();
            //console.log(res.body)

    });
});
    it("should return  status code 200 put response for PUT request",(done)=>{
        const Data = {
            name: "Bhuvana",
            job: "Doctor"
        };
        chai.request("https://reqres.in")
        .put("/api/users/2")
        .send(Data)
        .end((err,res)=>{
            expect(res).to.have.status(200);
            done();
            console.log(res.body)
        });
    });
    it("should return status code 204 delete response for DELETE request",(done)=>{
        chai.request("https://reqres.in")
        .delete("/api/users/2")
        .end((err,res)=>{
            expect(res).to.have.status(204)
            done();
        })
    })



    
})

