var expect = chai.expect;
describe('findSimilar', function() {

		describe('classFeatures', function(){

				/* Model Data */

				var doctors = [
						{
								name: 'Kiira',
								specialty: 'neurological',
								area: 'surgery',
								review: 9,
								experience: 9
						},
						{
								name: 'Matt',
								specialty: 'thoracic',
								area: 'surgery',
								review: 8,
								experience: 8
						},
						{
								name: 'Count',
								specialty: 'opthalmic',
								area: 'surgery',
								review: 7,
								experience: 7
						},
						{
								name: 'Chris',
								specialty: 'neurological',
								area: 'surgery',
								review: 6,
								experience: 6
						},
						{
								name: 'Scott',
								specialty: 'chronic',
								area: 'dermatology',
								review: 5,
								experience: 5
						},
						{
								name: 'Nathaniel',
								specialty: 'cosmetic',
								area: 'dermatology',
								review: 4,
								experience: 4
						},
						{
								name: 'Alfredo',
								specialty: 'medical',
								area: 'dermatology',
								review: 3,
								experience: 3
						},
						{
								name: 'Duke',
								specialty: 'surgical',
								area: 'dermatology',
								review: 2,
								experience: 2
						},
						{
								name: 'Humphrey',
								specialty: 'cosmetic',
								area: 'dermatology',
								review: 1,
								experience: 1
						},
						{
								name: 'Dana',
								specialty: 'medical',
								area: 'dermatology',
								review: 9,
								experience: 9
						},
						{
								name: 'Fox',
								specialty: 'surgical',
								area: 'urology',
								review: 8,
								experience: 8
						}

				];


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

				var reviewDoctors = [
						{
								name: 'Ainsley',
								specialty: 'neurological',
								area: 'surgery',
								review: 0,
								experience: 0
						},
						{
								name: 'Grisanu',
								specialty: 'neurological',
								area: 'surgery',
								review: 10,
								experience: 10
						}
				];




				it('Should only return doctors from the same area', function(){
						var testSet = findSimilar(doctors, doctors[0]);
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

				it('Should add points according to review and experience', function(){
						var testSet3 = findSimilar(reviewDoctors, reviewDoctors[0]);
						expect(testSet3[0].similarity).to.equal(30);

				});

				it('Should return doctors in order of similarity', function(){
						var testSet4 = findSimilar(doctors, doctors[0]);

						var checkOrder = function(doctorSet){
								var flag = true;
								if (doctorSet.length > 1){
										for (var i = 1; i < doctorSet.length; i++){
												var currentDoctor = doctorSet[i];
												var priorDoctor = doctorSet[i-1];
												if (currentDoctor.similarity > priorDoctor.similarity){
														flag = false;
												};
										}
								}
								return flag;
						};

						var isOrderedBySimilarity = checkOrder(testSet4);

						expect(isOrderedBySimilarity).to.be.true;
				});
		});
});
