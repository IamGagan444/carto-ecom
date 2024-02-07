import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  tagTypes: ["PRODUCT"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
      providesTags: ["PRODUCT"],
    }),
    getMenProducts: builder.query({
      query: () => "products/category/mens-shirts",
      providesTags: ["products/category/mens-shirts"],
    }),
    getCategories: builder.query({
      query: () => "/products/categories",
      providesTags: ["/products/categories"],
    }),
    getProdoctsCategorie: builder.query({
      query: (category) => `products/category/${category}`,
      providesTags: (result, error, category) => [
        { type: "PRODUCT", id: category },
      ],
    }),

    postLoginCredentials: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: credentials,
      }),
    }),
    getCart: builder.query({
      query: () => "carts",
      providesTags: ["carts"],
    }),
    getProductBySearch: builder.query({
      query: (search) => `products/search?q=${search}`,
      providesTags: (result, error, search) => [
        { type: "PRODUCT", id: search },
      ],
    }),
    getProductDetailsByID: builder.query({
      query: (id) => `products/${id}`,
      providesTags: (result) => [{ type: "PRODUCT", id: result }],
    }),
    getMototrCycle: builder.query({
      query: () => "/products/category/motorcycle",
      providesTags: ["/products/category/motorcycle"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetMenProductsQuery,
  useGetCategoriesQuery,
  useGetProdoctsCategorieQuery,
  usePostLoginCredentialsMutation,
  useGetCartQuery,
  useGetProductBySearchQuery,
  useGetProductDetailsByIDQuery,
  useGetMototrCycleQuery
} = productApi;
