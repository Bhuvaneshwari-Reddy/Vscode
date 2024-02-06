const chai = require('chai')
const chaiHttp = require('chai-http')
var expect=chai.expect
chai.use(chaiHttp)


// describe("Test cases for Pet Store", function(){

//     it("Create user in Pet store", (done)=>{
//     // const obj={
//     //     "id": 1,
//     //     "username": "Hello@123",
//     //     "firstName": "Vinay",
//     //     "lastName": "shah",
//     //     "email": "vns@gmail.com",
//     //     "password": "123456789",
//     //     "phone": "9876543211",
//     //     "userStatus": 1
//     // }
//     chai.request("https://petstore.swagger.io/v2/")
//     .post("user")
//     .send({
//         "id": 1,
//         "username": "Hello@123",
//         "firstName": "Vinay",
//         "lastName": "shah",
//         "email": "vns@gmail.com",
//         "password": "123456789",
//         "phone": "9876543211",
//         "userStatus": 1
//     })
//     .end((err, res)=>{
//     expect(res.body).to.have.property("code")

//     expect(res.body).to.have.property("type")
//     expect(res.body).to.have.property("message")
//     expect(res).to.have.status(200)
    
//     done()
//     console.log(res.body)
    
//     })
   
// })
// it("Update user in Pet Store",(done)=>{
//     chai.request("https://petstore.swagger.io/v2/")
//     .put("user/Hello@123")
//     .send({
//         "id": 1,
//         "username": "Hello@123",
//         "firstName": "Vinay shah",
//         "lastName": "D",
//         "email": "vinay@gmail.com",
//         "password": "123456789",
//         "phone": "9876543211",
//         "userStatus": 1
//     })
//     .end((err,res)=>{
//         expect(res.body).to.have.property("code")
//         expect(res).to.have.status(200)
//   done(); 
//     })
// })
// it("Get the user in Pet Store",(done)=>{
//     chai.request("https://petstore.swagger.io/v2/")
//     .get("user/Hello@123")
//     .end((err,res)=>{
//         expect(res).to.have.status(200)
//         done()
//     })
// })
// it("Delete the user in Pet Store",(done)=>{
//     chai.request("https://petstore.swagger.io/v2/")
//     .delete("user/Hello@123")
//     .end((err,res)=>{
//         expect(res).to.have.status(200)
//         done();
//         // console.log(res.body)
//     })
// })
// })



