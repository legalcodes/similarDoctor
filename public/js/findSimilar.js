/* Model Data */

window.doctors = [
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

var filter = function(collection, callback){
		var results = [];
		for (var i = 0; i < collection.length; i++){
				if (callback(collection[i])){
						results.push(collection[i]);
				}
		};
		return results;
};


var findSimilar = function(collection, targetDoctor){
		// filter subset of doctors with matching area
		var subset = filter(collection, function(doctor){
				return doctor.area === targetDoctor.area &&
						doctor.name !== targetDoctor.name;
		});

		// traverse collection to generate similarity score
		for (var i = 0; i < subset.length; i++){
				var doctor = subset[i];
				doctor.similarity = 0;
				// add 10 points for same specialty
				if (doctor.specialty === targetDoctor.specialty){
						doctor.similarity += 10;
				}
		};

		console.log('Output: ', subset);
		return subset;
};
