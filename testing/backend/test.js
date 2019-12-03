/*
Note about model test:
Tests whether or not the model for fetching data gets the correct values
*/

var should = require('should'), 
    utilities = require('../client/src/App.js'),
    contaminents = require('../client/src/index.js'),
    config = require('../config/config');

var utilities, contaminents;

//Value to change for different cases to compare to EWS
utilities =  {
  zip:"32608", //Zip code entered 
  name: "Gainesville Regional Utilities (GRU) - Murphree WTP", //Name of Utilities Companu
}

describe('Water Cleanliness Zip Codes Test', function() {

  describe('Results are Valid', function() {
    //Here we basically compare the results from EWS to the results from our app
    
    this.timeout(10000);

    it('should return correct utilities', function() {
	  expect(utilities).to.be.an('array').that.includes('Arredondo Estates'); //Random value for control
	  expect(utilities).to.have.lengthOf(15); //Exact length
	  done();
	});

    //Testing out contaminants for utility specified
    it('returns correct contaminants', function(done){
      expect(contaminants).to.be.an('array').that.includes('Flouride'); //Random value for control
	  expect(contaminants).to.have.lengthOf(8); //Exact length
	  done();
    });

  });

  //Clear search after each test
  afterEach(function(done) {
  	utilities.zip = NULL;
  	utilities.name = NULL;
  	function(utilities);
  	done();
  });
});
