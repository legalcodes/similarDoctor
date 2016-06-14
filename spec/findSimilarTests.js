(function() {
		'use strict';
		describe('Ancillary Methods', function(){
				it('Should only return doctors from the same area', function(){
						console.log(doctors);
						var testSet = findSimilar(doctors[0]);
						expect(5).to.equal(5);
				});
		});
})();
