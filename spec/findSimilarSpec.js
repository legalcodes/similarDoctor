var expect = chai.expect;
describe('findSimilar', function() {

		describe('classFeatures', function(){
				var testSet = findSimilar(doctors, doctors[0]);

				var testDoctors = [
						{
								name: 'Mary',
								specialty: 'neurological',
								area: 'surgery',
								review: 0,
								experience: 0
						},
						{
								name: 'Adam',
								specialty: 'neurological',
								area: 'surgery',
								review: 0,
								experience: 0
						}
				];

				it('Should only return doctors from the same area', function(){
						expect(testSet[0].area).to.equal(testSet[1].area);
				});


				it('Should not duplicate the target doctor', function(){
						var testSet2 = findSimilar(testDoctors, testDoctors[0]);

						expect(testSet2.length).to.equal(1);
				});

				it('Should add 10 points for a matching similarity', function(){
						var testSet2 = findSimilar(testDoctors, testDoctors[0]);

						expect(testSet2[0].similarity).to.equal(10);
				});

		});



});
