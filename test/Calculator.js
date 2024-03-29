//load chai assertion library
const chai = require("chai");
const expect = chai.expect;

const asserttype = require('chai-asserttype');
chai.use(asserttype);


//load calculator code
var Calculator = require("../Calculator");
var calc = new Calculator();

describe("Calculator Tests",function(){
 
  it("Adds 1 and 2",function(){
	expect(calc.add(1,2)).to.be.equal(3);
 });

  it("Add Allows one parameter",function(){
    expect(calc.add(1)).to.be.equal(1);
 });
  
  it("Add Allows no parameters",function(){
   expect(calc.add()).to.be.equal(0);
 });

  it("Add turns strings to zeros",function(){
   expect(calc.add("frog","toad")).to.be.number();
 });

  it("Divides 8 by 4",function(){
	 expect(calc.divide(8,4)).to.be.equal(2);
 });

  it("Divides 8 by zero",function(){
	 expect(calc.divide(8,0)).to.be.equal("Divide by zero error");
 });


});

