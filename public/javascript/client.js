(function() {
    $(document).ready(function() {
        recipeStart();
    });
})();
/**
  This function bootstraps the spotify request functionality.
*/

$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    options.async = true;
});

function recipeStart() {
    var test = [{
        "id": 641803,
        "title": "Easy & Delish! ~ Apple Crumble",
        "image": "https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 4,
        "likes": 1
    }, {
        "id": 658774,
        "title": "Rose Apple Tart for mother's day",
        "image": "https://spoonacular.com/recipeImages/Rose-Apple-Tart-for-mothers-day-658774.jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 5,
        "likes": 2
    }, {
        "id": 657563,
        "title": "Quick Apple Ginger Pie",
        "image": "https://spoonacular.com/recipeImages/Quick-Apple-Ginger-Pie-657563.jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 6,
        "likes": 1
    }, {
        "id": 638820,
        "title": "Chocolate Apple Cake",
        "image": "https://spoonacular.com/recipeImages/Chocolate-Apple-Cake-638820.jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 7,
        "likes": 1
    }, {
        "id": 632573,
        "title": "Apple Pie Bars",
        "image": "https://spoonacular.com/recipeImages/Apple-Pie-Bars-632573.jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 8,
        "likes": 78
    }, {
        "id": 639487,
        "title": "Cinnamon Sugar Fried Apples",
        "image": "https://spoonacular.com/recipeImages/Cinnamon-Sugar-Fried-Apples-639487.jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 8,
        "likes": 45
    }, {
        "id": 662896,
        "title": "Tarte Aux Pommes",
        "image": "https://spoonacular.com/recipeImages/Tarte-Aux-Pommes-662896.jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 8,
        "likes": 1
    }, {
        "id": 644789,
        "title": "Gluten Free Apple Strudel",
        "image": "https://spoonacular.com/recipeImages/Gluten-Free-Apple-Strudel-644789.jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 9,
        "likes": 1
    }, {
        "id": 636989,
        "title": "Caramel Apple-Brownie Cheesecake",
        "image": "https://spoonacular.com/recipeImages/Caramel-Apple-Brownie-Cheesecake-636989.jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 10,
        "likes": 13
    }, {
        "id": 665269,
        "title": "Whole Wheat Apple Orange Muffins",
        "image": "https://spoonacular.com/recipeImages/Whole-Wheat-Apple-Orange-Muffins-665269.jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 11,
        "likes": 1
    }, {
        "id": 636974,
        "title": "Caramel Apple Cake",
        "image": "https://spoonacular.com/recipeImages/Caramel-Apple-Cake-636974.jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 11,
        "likes": 1
    }, {
        "id": 643426,
        "title": "Fresh Apple Cake With Caramel Sauce",
        "image": "https://spoonacular.com/recipeImages/Fresh-Apple-Cake-With-Caramel-Sauce-643426.jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 12,
        "likes": 9
    }, {
        "id": 642548,
        "title": "Fall Apple Yeast Bread",
        "image": "https://spoonacular.com/recipeImages/Fall-Apple-Yeast-Bread-642548.jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 12,
        "likes": 1
    }, {
        "id": 657011,
        "title": "Potato-Cheese Pie",
        "image": "https://spoonacular.com/recipeImages/Potato-Cheese-Pie-657011.jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 13,
        "likes": 1
    }, {
        "id": 652976,
        "title": "Naturally Sweet Apple Turnovers",
        "image": "https://spoonacular.com/recipeImages/Naturally-Sweet-Apple-Turnovers-652976.jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 15,
        "likes": 17
    }, {
        "id": 638981,
        "title": "Chocolate Crinkle Cookies",
        "image": "https://spoonacular.com/recipeImages/Chocolate-Crinkles-638981.jpg",
        "usedIngredientCount": 2,
        "missedIngredientCount": 6,
        "likes": 4
    }, {
        "id": 655384,
        "title": "Peanutbutter Sandwich Cookies",
        "image": "https://spoonacular.com/recipeImages/Peanutbutter-Sandwich-Cookies-655384.jpg",
        "usedIngredientCount": 2,
        "missedIngredientCount": 11,
        "likes": 1
    }, {
        "id": 655394,
        "title": "Pear and chocolate frangipane tart",
        "image": "https://spoonacular.com/recipeImages/Pear-and-chocolate-frangipane-tart-655394.jpg",
        "usedIngredientCount": 2,
        "missedIngredientCount": 13,
        "likes": 1
    }, {
        "id": 638989,
        "title": "Chocolate Cupcakes with Vanilla Whipped Cream Frosting",
        "image": "https://spoonacular.com/recipeImages/Chocolate-Cupcakes-with-Vanilla-Whipped-Cream-Frosting-638989.jpg",
        "usedIngredientCount": 2,
        "missedIngredientCount": 15,
        "likes": 1
    }, {
        "id": 639017,
        "title": "Chocolate Espresso Cupcakes With Mocha Buttercream",
        "image": "https://spoonacular.com/recipeImages/Chocolate-Espresso-Cupcakes-With-Mocha-Buttercream-639017.jpg",
        "usedIngredientCount": 2,
        "missedIngredientCount": 16,
        "likes": 1
    }];

    console.log(test);
    // var divPlaceholder = $('#q-results');
    $('#recipe-q-button').on('click', function ajaxRequest() {

        params = {
            ingredients: $('#recipe-q').val()
        };

        $.get('/ingredients', params, function ajaxCallback(data) {
<<<<<<< HEAD
          console.log(data);

=======
            console.log(data);
            // do all client injection javascript in here
>>>>>>> d6410347fa844cf854234ad0250f25c1be334eeb
        });

    });
<<<<<<< HEAD
}

        
=======
}
>>>>>>> d6410347fa844cf854234ad0250f25c1be334eeb
