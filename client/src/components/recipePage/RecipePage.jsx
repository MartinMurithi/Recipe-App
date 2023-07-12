import React from "react";
import { useParams } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";
import { useGetRecipeQuery } from "../../features/api/apiSlice";
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

  return (
    <div className="recipePage">
      {isLoading && <MutatingDots />}
      {isError && <h4 className="errorMessage">{error.message}</h4>}
      {isSuccess && (
        <div className="recipeImg_utils">
          <img
            src={recipe?.data?.imageURL}
            alt={recipe?.data?.title}
            className="recipeImgDetails"
          />
          <div className="recipeDetails">
            <p className="recipePageTitle">{recipe?.data?.title}</p>
            <p className="recipePageDescription">{recipe?.data?.description}</p>

            <div className="recipeExtraDetails">
              <div className="type">
                <span class="material-icons-outlined">restaurant_menu</span>
                <h5 className="mealTypeTitle">Meal Type</h5>
                <p className="recipeType">{recipe?.data?.mealType}</p>
              </div>
              <div className="time">
                <span class="material-icons-outlined">timer</span>
                <h5 className="timeTitle">Total Time</h5>
                <p className="totalTime">{recipe?.data?.totalTime} Minutes</p>
              </div>
              <div className="servings">
                <span class="material-icons-outlined">people_alt</span>
                <h5 className="yield">Yield</h5>
                <p className="recipeServings">
                  Serves {recipe?.data?.servings}
                </p>
              </div>
            </div>

            <div className="chef_save_print">
              <p className="recipeChef">
                Created by <span className="recipeOwner">Chef</span>
              </p>

              <div className="save_print">
                <div className="save">
                  <button className="btnIcon">
                    <span class="material-icons-outlined" id="saveBtn">
                      add_circle_outline
                    </span>
                  </button>

                  <p className="save_HoverText">Save</p>
                </div>
                <div className="print">
                  <button className="btnIcon">
                    <span class="material-icons-outlined" id="printBtn">
                      print
                    </span>
                  </button>

                  <p className="print_HoverText">Print</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipePage;
