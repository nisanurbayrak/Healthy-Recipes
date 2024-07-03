const recipe = [
    {
        id: 0,
        recipe_name: "Grilled Salmon",
        image: "https://img.freepik.com/premium-photo/salmon-baked-metal-tray-with-vegetables-rosemary-recipe-seafood-free-space-text_187166-44476.jpg?w=740",
        instructions: [
            "Marinate salmon with olive oil, lemon juice, and herbs.",
            "Grill until cooked through.",
            "Serve with steamed vegetables."
        ],
        ingredients: [
            "Salmon fillets",
            "Olive oil",
            "Lemon juice",
            "Garlic",
            "Fresh dill",
            "Asparagus"
        ]
    },
    {
        id: 1,
        recipe_name: "Stuffed Bell Peppers",
        image: "https://img.freepik.com/free-photo/front-view-cooked-bell-peppers-with-ground-meat-fresh-vegetables-dark-surface-meal-vegetable-food-meat-dolma_140725-74279.jpg?t=st=1719698295~exp=1719701895~hmac=0eb270847853886abbb171af9359cd18ed405bdc1beaa57640b78e21fe313c59&w=996",
        instructions: [
            "Cook quinoa /rice.",
            "Mix with ground turkey, tomatoes, and spices.",
            "Fill bell peppers and bake until tender."
        ],
        ingredients: [
            "Bell peppers",
            "Ground turkey",
            "Quinoa /rice",
            "Tomatoes",
            "Onion",
            "Cheese (optional)"
        ]
    },
    {
        id: 2,
        recipe_name: "Vegetable Stir-Fry",
        image: "https://img.freepik.com/free-photo/top-view-fried-vegetable-salad-mushroom-cherry-tomato-red-pepper-yellow-pepper-with-knife-fork_176474-660.jpg?t=st=1719698262~exp=1719701862~hmac=96e8a47351792f27b5d17817982a57d32779ddc9d1f0ba3789d8524e63983660&w=996",
        instructions: [
            "Stir-fry mixed vegetables (broccoli, bell peppers, carrots) in sesame oil.",
            "Add tofu or chicken and soy sauce.",
            "Serve over brown rice."
        ],
        ingredients: [
            "Broccoli",
            "Bell peppers",
            "Carrots",
            "Tofu /chicken",
            "Soy sauce",
            "Sesame oil"
        ]
    },
    {
        id: 3,
        recipe_name: "Chia Seed Pudding",
        image: "https://img.freepik.com/premium-photo/chia-pudding-top-view-fresh-berries-raspberries-blueberries_73872-990.jpg?w=740",
        instructions: [
            "Mix chia seeds with almond milk and vanilla extract.",
            "Refrigerate overnight.",
            "Serve topped with fresh fruits."
        ],
        ingredients: [
            "Chia seeds",
            "Almond milk",
            "Vanilla extract",
            "Maple syrup (optional)",
            "Fresh fruits (berries, mango)"
        ]
    },
    {
        id: 4,
        recipe_name: "Baked Sweet Potato Fries",
        image: "https://img.freepik.com/free-photo/side-view-french-fries-with-melted-cheese-mayo-ketchup-table_141793-4898.jpg?t=st=1719698164~exp=1719701764~hmac=fc11ffdcfd74a964411128078d113ebba1a6d817f6c9230cdd605e9fcaf8e63b&w=996",
        instructions: [
            "Cut sweet potatoes into fries.",
            "Toss with olive oil, salt, and paprika.",
            "Bake until crispy."
        ],
        ingredients: [
            "Sweet potatoes",
            "Olive oil",
            "Salt",
            "Paprika",
            "Garlic powder",
            "Dipping sauce (optional)"
        ]
    },
    {
        id: 5,
        recipe_name: "Baked Salmon with Asparagus",
        image: "https://img.freepik.com/free-photo/baked-salmon-garnished-with-asparagus-tomatoes-with-herbs_2829-14472.jpg?t=st=1719697704~exp=1719701304~hmac=ddfc33f7bd2d892d7b1a2dbb2432beb8fa60e02d01671a57ee8d1b355ad03189&w=996",
        instructions: [
            "Season salmon with olive oil, garlic, and lemon zest.",
            "Arrange on a baking sheet with asparagus.",
            "Bake until salmon is cooked."],
        ingredients: [
            "Salmon fillets",
            "Asparagus",
            "Olive oil",
            "Garlic",
            "Lemon zest",
            "Dijon mustard (optional)"
        ]
    },
    {
        id: 6,
        recipe_name: "Chickpea and Spinach Stuffed Sweet Potatoes",
        image: "https://img.freepik.com/premium-photo/baked-potatoes-with-bacon-vegetables_1063662-2471.jpg?w=740",
        instructions: [
            "Bake sweet potatoes until tender.",
            "Sauté chickpeas, spinach, and spices.", 
            "Stuff sweet potatoes and garnish with yogurt sauce.",
        ],ingredients: [
            "Sweet potatoes",
            "Chickpeas",
            "Spinach",
            "Cumin",
            "Garlic powder",
            "Plain yogurt"
        ]
    },{
        id: 7,
        recipe_name: "Mediterranean Quinoa Bowl",
        image: "https://img.freepik.com/free-photo/delicious-yougurt-meal-with-chickpeas-dried-tomatoes_23-2148759718.jpg?t=st=1719772829~exp=1719776429~hmac=f6fa341faaaa4868524a13fbe37ee88b7b82ce2f7a475e499851dddb410a2b96&w=740",
        instructions: [
            "Cook quinoa and let it cool.", 
            "Top with chickpeas, cucumbers, tomatoes, olives, and feta cheese.",
             "Drizzle with olive oil and lemon juice."],
        ingredients: [
            "Quinoa",
            "Chickpeas",
            "Cucumber",
            "Tomatoes",
            "Kalamata olives",
            "Feta cheese"
        ]
    },
];

//navbar
const navbarContent=`
<nav class="navbar navbar-md navbar-expand-lg navbar-light bg-light sticky-top poppins-medium">
    <a class="navbar-brand" href="#">HEALTHY RECIPES</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item navLink">
                <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item navLink">
                <a class="nav-link" href="index.html#popularRecipe">Popular Recipes</a>
            </li>
            <li class="nav-item navLink">
                <a class="nav-link" href="index.html#recipes">Recipes</a>
            </li>
        </ul>
    </div>
</nav>

<!-- Bootstrap JavaScript dosyalarını eklemeyi unutmayın -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
`;
document.addEventListener('DOMContentLoaded', function() {
    document.body.insertAdjacentHTML('afterbegin', navbarContent);
});


// popular recipes
const popularDOM = (param) => `
<div class="col-4 p-2 d-flex justify-content-center">
    <div class="card" style="width: 14rem;">
        <img src="${param.image}" class="card-img-top img-fluid" alt="${param.recipe_name}" style="height: 175px;">
        <div class="card-body navLink">
            <h5 class="card-title poppins-medium">${param.recipe_name}</h5>
            <p class="card-text text-truncate">${param.ingredients}</p>
            <a class="btn btn-outline-success btn-sm moreButton" data-id="${param.id}">>>more</a>
        </div>
    </div>
</div>
`;

// tarif listesi
const contentDOM = (param) => `
<div class="col-md-6 col-sm-12 border-top d">
        <img src="${param.image}" alt="${param.recipe_name}" style="border-radius: 50px; width: 10rem; height: 10rem;" class="img-fluid my-2" >
    <div class="col-md-6 col-sm-12 my-1 navLink">
        <h5 class="text-truncate poppins-medium">${param.recipe_name}</h5>
        <p class="fs-6 text-truncate p-fluid">
            ${param.ingredients}
            <br>
        </p>
        <a class="text-success moreButton" id="myButton" data-id="${param.id}">>>more</a>
    </div>
</div>
`;


// Tarifleri JSON dosyasından yükleme fonksiyonu
const loadRecipes = async () => {
    try {
        const response = await fetch(recipe);
        recipes = await response.json();
        displayRecipes();
        setupPagination();
    } catch (error) {
        console.error('Tarifler yüklenirken hata oluştu:', error);
    }
};

// Tarifleri görüntüleme fonksiyonu
const displayRecipes = () => {
    const recipeContainer = document.getElementById('recipeContainer');
    recipeContainer.innerHTML = '';

    const startIndex = (currentPage - 1) * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;
    const paginatedRecipes = recipes.slice(startIndex, endIndex);

    paginatedRecipes.forEach(recipe => {
        recipeContainer.innerHTML += contentDOM(recipe);
    });
};




// id ile seçili tarife gitme işlemi
$(document).on('click', '.moreButton', function() {
    var id = $(this).data('id');
    localStorage.setItem('recipeId', id);
    window.location.href = 'recipes.html';
});
$(document).ready(function() {
    var id = localStorage.getItem('recipeId');
    var recipes = recipe.find(r => r.id == id);
    if (recipes) {
        $('#recipeDetails').html(recipesDOM(recipes));
        document.title=recipes.recipe_name;
    }
    else {
    $('#recipeDetails').html('<p>Recipe not found!</p>');
}
});


// recipes.html sayfası seçili id-den tarif gelir
const recipesDOM = (param) => `
        <div class="col-md-6 col-sm-12 p-3 d-flex align-items-center justify-content-center my-2">
            <img src="${param.image}" alt="${param.recipe_name}" style="border-radius: 50px; height: 25rem; width: 25rem;" class="me-3 border border-2 align-items-center justify-content-center">
        </div>
        <div class="col-md-6 col-sm-12">
            <h4 class="display-4 poppins-medium">${param.recipe_name}</h4>
            <br>
            <h6 class="poppins-medium">Ingredients</h6>
            <ol id="instructionsList">
                    ${param.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ol>
            <br>
            <h6 class="poppins-medium">Instructions</h6>
              <ol id="instructionsList">
                    ${param.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                </ol>
        </div>
        <div class="col-12 d-flex align-items-center justify-content-end pr-5 navLink">
            <a href="index.html" onclick="changeTitle()" class="text-success return-link">Return to homepage</a>
        </div>

    `;

// random tarif butonu
$('#random-recipe-btn').click(function() {
            var id = Math.floor(Math.random() * recipe.length-1);
            console.log(id);
            var recipes = recipe.find(r => r.id == id);
            if (recipes) {
                $('#recipeDetails').html(recipesDOM(recipes));
            }
            else {
            $('#recipeDetails').html('<p>Recipe not found!</p>');
        }

});
$(document).on('click', '#random-recipe-btn', function() {
    const number = recipe.length-1
    const rid = Math.floor(Math.random() * number);
    localStorage.setItem('recipeId', rid);
    window.location.href = 'recipes.html';


    const element = document.getElementById('toggle');
        element.classList.remove('d-flex');
    
});
    
const recipeList = () => {
    const content = document.querySelector(".recipeClass");
    content.innerHTML = "";
    const popular = document.querySelector(".popular")
    popular.innerHTML = "";

    

    recipe.forEach((item) => {
        content.insertAdjacentHTML("beforeend", contentDOM(item));
    });

    for (let i = recipe.length-3 ; i < recipe.length; i++) {
        popular.insertAdjacentHTML("beforeend", popularDOM(recipe[i]));
    }

    document.querySelector('nav-link').addEventListener('click', function() {
    document.title = "Healthy Recipes";});
};



recipeList();

