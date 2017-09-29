var add = require("../simple-function");
var chai = require("chai");
var expect = chai.expect;

console.log(add.add(3,4));

describe("Add function", function(){
    it("Should return the sum of 2 numbers", function(done){
        expect(add.add(2,4)).to.equal(6);
        done();
    });
})