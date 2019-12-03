/*Note about model test
  Tests whether or not the model for fetching data gets the correct values
  
  

var expect = require('chai').expect;
var numbers = [1, 2, 3, 4, 5];

expect(numbers).to.be.an('array').that.includes(2);
expect(numbers).to.have.lengthOf(5);


  */

var should = require('should'), 
    companies = require('../models/listings.server.model'),
    ,
    config = require('../config/config');

var listing, id, latitude, longitude;

listing =  {
  code: "LBWEST", 
  name: "Library West", 
  address: "1545 W University Ave, Gainesville, FL 32603, United States"
}

describe('Water Cleanliness Zip Codes Test', function() {

  before(function(done) {
    //connect to test items
    mongoose.connect(config.db.uri, { useNewUrlParser: true });
    done();
  });

  describe('Results are Valid', function() {
    /*
      Here we basically compare the results from EWS to the results from our app
     */
    this.timeout(10000);

    it('returns correct utilities', function(done){
      new Listing({
        name: listing.name, 
        code: listing.code
      }).save(function(err, listing){
        should.not.exist(err);
        id = listing._id;
        done();
      });
    });

    it('returns correct contaminants', function(done){
      new Listing(listing).save(function(err, listing){
        should.not.exist(err);
        id = listing._id;
        done();
      });
    });

  });

  //Clear search after each test
  afterEach(function(done) {
    if(id) {
      Listing.deleteOne({ _id: id }).exec(function() {
        id = null;
        done();
      });
    } else {
      done();
    }
  });
});
