import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kocima-api.onrender.com",
  }),
  // credentials: true,
  tagTypes: ["Recipes"],
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => "/recipes",
      providesTags: ["Recipes"],
    }),
    getRecipe: builder.query({
      query: (id) => `/recipe/${id}`,
      providesTags: ["Recipes"],
    }),
    searchRecipe: builder.query({
      query: (recipe) => `/search?query=${recipe}`,
      providesTags: ["Recipes"],
    }),
    createRecipe: builder.mutation({
      query: (recipe) => ({
        url: "/add-recipe",
        method: "POST",
        body: recipe,
      }),
      invalidateTags: ["Recipes"],
    }),
    updateRecipe: builder.mutation({
      query: ({ id, ...recipe }) => ({
        url: `/updateRecipe/${id}`,
        method: "PUT",
        body: recipe,
      }),
      invalidateTags: ["Recipes"],
    }),
    deleteRecipe: builder.mutation({
      query: (id) => ({
        url: `/deleteRecipe/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidateTags: ["Recipes"],
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useGetRecipeQuery,
  useSearchRecipeQuery,
  useCreateRecipeMutation,
  useDeleteRecipeMutation,
} = apiSlice;
