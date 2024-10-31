const showInformation = () => {
 
    setUpBoxes(); 
     jQuery.each($(".box"), mainIngredients);
   
     $(".box").on("click", function () {
       let indexOfCocktail = $(".box").index(this);
   
       $(this).find("p.care").text(cocktails[indexOfCocktail].calories);
     });
  
     $(".box").on("mouseover", function () {
  
       let indexOfCocktail = $(".box").index(this);
   
       $(this) 
         .find("p.care")
         .text(
         cocktails[indexOfCocktail].recipe
         );
     });
   
     $(".box").on("mouseout", function () {
       let indexOfCocktail = $(".box").index(this);
   
       $(this).find("p.care").text(cocktails[indexOfCocktail].cocktail_name + " - " + cocktails[indexOfCocktail].ingredients);
     });
   };

   $(".box").on("mouseout", function () {
    let indexOfCocktail = $(".box").index(this);

    $(this).find("p.care").text(cocktails[indexOfCocktail].ingredients);
  });


 
   const mainIngredients = (index) => {
    console.log(cocktails[index].ingredients);
    console.log(cocktails[index].cocktail_name);
    $(".care").eq(index).text(cocktails[index].cocktail_name + " - " + cocktails[index].ingredients);
  }; 

  const setUpBoxes = ()=> {
    let wrapperRef = $('.wrapper');
    cocktails.forEach((cocktail)=>{
        let boxMarkup= ` <div class="box">
        <img class="cocktail_pic" src="./cocktail_pics/${cocktail.cocktail_name.toLowerCase()}.png" />
        <p class="care"></p>
      </div>`;
      wrapperRef.append(boxMarkup);
    }
    );
}

  $(document).ready(showInformation); 