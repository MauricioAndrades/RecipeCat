var ingredientsArr = [{
	id: 655235,
	title: 'Peanut Butter and Jelly Smoothie',
	image: 'https://spoonacular.com/recipeImages/Peanut-Butter-and-Jelly-Smoothie-655235.jpg',
	usedIngredientCount: 1,
	missedIngredientCount: 3,
	likes: 58
}, {
	id: 652929,
	title: 'Namachokobanana Crepe',
	image: 'https://spoonacular.com/recipeImages/Namachokobanana-Crepe-652929.jpg',
	usedIngredientCount: 1,
	missedIngredientCount: 3,
	likes: 1
}, {
	id: 660227,
	title: 'Skinny Green Monster Smoothie',
	image: 'https://spoonacular.com/recipeImages/Skinny-Green-Monster-Smoothie-660227.jpg',
	usedIngredientCount: 1,
	missedIngredientCount: 4,
	likes: 3
}, {
	id: 638604,
	title: 'Chilled Swiss Oatmeal',
	image: 'https://spoonacular.com/recipeImages/Chilled-Swiss-Oatmeal-638604.jpg',
	usedIngredientCount: 1,
	missedIngredientCount: 6,
	likes: 6
}, {
	id: 663689,
	title: 'Torta Di Banana (Banana Cake)',
	image: 'https://spoonacular.com/recipeImages/Torta-Di-Banana-(Banana-Cake)-663689.jpg',
	usedIngredientCount: 1,
	missedIngredientCount: 7,
	likes: 1
}, {
	id: 639749,
	title: 'Coconut Cream Pie Vegan Milkshake',
	image: 'https://spoonacular.com/recipeImages/Coconut-Cream-Pie-Vegan-Milkshake-639749.jpg',
	usedIngredientCount: 1,
	missedIngredientCount: 8,
	likes: 20
}, {
	id: 654729,
	title: 'Party Fruit Salad',
	image: 'https://spoonacular.com/recipeImages/Party-Fruit-Salad-654729.jpg',
	usedIngredientCount: 1,
	missedIngredientCount: 8,
	likes: 1
}, {
	id: 655241,
	title: 'Peanut Butter Banana Muffins',
	image: 'https://spoonacular.com/recipeImages/Peanut-Butter-Banana-Muffins-655241.jpg',
	usedIngredientCount: 1,
	missedIngredientCount: 8,
	likes: 1
}, {
	id: 640389,
	title: 'Cranberry Orange Banana Bread',
	image: 'https://spoonacular.com/recipeImages/Cranberry-Orange-Banana-Bread-640389.jpg',
	usedIngredientCount: 1,
	missedIngredientCount: 11,
	likes: 13
}, {
	id: 641411,
	title: 'Delicious RAW Macadamia Zucchini GREEN Smoothie',
	image: 'https://spoonacular.com/recipeImages/Delicious-RAW-Macadamia-Zucchini-GREEN-Smoothie-641411.jpg',
	usedIngredientCount: 1,
	missedIngredientCount: 11,
	likes: 1
}];

// for (var i = 0; i < ajaxrequestarray.length; i++) {
// 	console.log(ajaxrequestarray[i].id);
// }

var recipeIdsArr = ingredientsArr.map(function(array) {
	return {
		name: array.title,
		id: array.id
	};
});

recipeIdsArr.forEach(function(object){
	console.log(object.id);
})
console.log(recipeIdsArr);