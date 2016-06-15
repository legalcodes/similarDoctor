
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
				// add as many points as are assigned to review & experience
				doctor.similarity += doctor.review + doctor.experience;
		};

		// order results by similarity score
		subset.sort(function(a,b){
				return b.similarity - a.similarity;
		});

		return subset;
};
