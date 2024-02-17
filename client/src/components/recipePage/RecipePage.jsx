import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { useGetRecipeQuery } from "../../features/api/apiSlice";
import Footer from "../footer/Footer";
import "./RecipePage.css";
function RecipePage() {
  const { _id } = useParams();

  const {
    isLoading,
    isSuccess,
    isError,
    error,
    data: recipe,
  } = useGetRecipeQuery(_id);

  // In my DB, I stored ingridients and instructions as String (I know, bad idea ). The 2 functions check for line breaks and if present, they insert a line break.

  let ingridients = recipe?.data.ingridients.split("\n").map((line, index) => {
    return (
      <li key={index}>
        {line}
        <br />
        <br />
      </li>
    );
  });
  let instructions = recipe?.data.instructions
    .split("\n")
    .map((line, index) => {
      return (
        <li key={index}>
          {line}
          <br />
          <br />
        </li>
      );
    });

  return (
    <div className="recipePage">
      {isLoading && <Spinner />}
      {isError && <h4 className="errorMessage">{error.message}</h4>}
      {isSuccess && (
        <>
          <div className="recipeImg_utils">
              <img
                src={recipe?.data?.imageURL}
                alt={recipe?.data?.title}
                width="700px"
                height="400px"
                className="recipeImgDetails"
              />

            <div className="recipeDetails">
              <p className="recipePageTitle">{recipe?.data?.title}</p>
              <p className="recipePageDescription">
                {recipe?.data?.description}
              </p>

              <div className="recipeExtraDetails">
                <div className="type">
                  <span className="material-icons-outlined">
                    restaurant_menu
                  </span>
                  <h5 className="mealTypeTitle">Meal Type</h5>
                  <p className="recipeType">{recipe?.data?.mealType}</p>
                </div>
                <div className="time">
                  <span className="material-icons-outlined">timer</span>
                  <h5 className="timeTitle">Total Time</h5>
                  <p className="totalTime">{recipe?.data?.totalTime} Minutes</p>
                </div>
                <div className="servings">
                  <span className="material-icons-outlined">people_alt</span>
                  <h5 className="yield">Yield</h5>
                  <p className="recipeServings">
                    Serves {recipe?.data?.servings}
                  </p>
                </div>
              </div>

              {/* <div className="chef_save_print">
                <p className="recipeChef">
                  Created by <span className="recipeOwner">Chef</span>
                </p>

                {/* <div className="save_print">
                  <div className="save">
                    <button className="btnIcon">
                      <span className="material-icons-outlined" id="saveBtn">
                        add_circle_outline
                      </span>
                    </button>

                    <p className="save_HoverText">Save</p>
                  </div>
                  <div className="print">
                    <button className="btnIcon">
                      <span className="material-icons-outlined" id="printBtn">
                        print
                      </span>
                    </button>

                    <p className="print_HoverText">Print</p>
                  </div>
                </div> 
              </div> */}
            </div>
          </div>

          <div className="instructions_ingridients">
            <div className="dataSection1">
              <h5 className="dataTitle">Ingridients</h5>
              <ul className="ingridientsText">{ingridients}</ul>
            </div>
            <div className="dataSection2">
              <h5 className="dataTitle">Instructions</h5>
              <ol className="instructionsText">{instructions}</ol>
            </div>
          </div>
        </>
      )}
      {/* <Footer /> */}
    </div>
  );
}

export default RecipePage;
