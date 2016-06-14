var expect = chai.expect;
describe('findSimilar', function() {

		describe('classFeatures', function(){
				it('Should only return doctors from the same area', function(){
						var testSet = FindSimilar(doctors[0]);
						expect(testSet[0].area).to.equal(testSet[1].area);
				});
		});



});
