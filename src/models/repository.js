import {
	AsyncStorage,
} from 'react-native';

export default class Repository {
  getAllReviews() {
		return AsyncStorage.getItem('@cheesenerd:reviews').then((result) => {
			if(!result) return [];

      const reviews = JSON.parse(result);
			return reviews;
		});
  }

  saveAllReviews(reviews) {
    try {
			AsyncStorage.setItem('@cheesenerd:reviews', reviews);
    } catch (error) {
			console.log({error});
    }
  }
}
