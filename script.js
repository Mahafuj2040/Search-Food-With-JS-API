const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');


// searchBtn.addEventListener('click', getMealList);

function getMealList() {
    const searchInputTxt = document.getElementById("search-input").value;

    mealList.innerHTML = '';

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayProduct(data);
        });
}

const displayProduct = (data) => {
    if (data.meals) {
        // console.log(data.meals);
        data.meals.forEach(meal => {
            const div = document.createElement("div");
            div.classList.add("card-1");
            // console.log(meal.strMeal);
            div.innerHTML = `
                <div class="card-container col m-5">
                    <div class="card" style="width: 18rem;">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                        <div class="card-body">
                            <h3 class="card-text text-danger">${meal.strMeal}</h3>
                        </div>
                    </div>
                </div>
            `;
            mealList.appendChild(div);
        });
    } else {
        const div = document.createElement("div");
        div.classList.add("card-2");
        div.innerHTML = `
            <h1>Not Found</h1>
        `;
        mealList.appendChild(div);
    }
}
