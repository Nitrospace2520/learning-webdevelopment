import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  tagTypes: ["Todos", "Quotes"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
      transformResponse: (response) => response.sort((a, b) => b.id - a.id),
      providesTags: ["Todos"],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
    getQuotes: builder.query({
      query: () => "/quotes",
      // transformResponse: (response) => response.sort((a, b) => b.id - a.id),
      providesTags: ["Quotes"],
    }),
    addQuote: builder.mutation({
      query: (quote) => ({
        url: "/quotes",
        method: "POST",
        body: quote,
      }),
      invalidatesTags: ["Quotes"],
    }),
    updateQuote: builder.mutation({
      query: (quote) => ({
        url: `/quotes/${quote.id}`,
        method: "PATCH",
        body: quote,
      }),
      invalidatesTags: ["Quotes"],
    }),
    deleteQuote: builder.mutation({
      query: (id) => ({
        url: `/quotes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Quotes"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useGetQuotesQuery,
  useAddQuoteMutation,
  useUpdateQuoteMutation,
  useDeleteQuoteMutation,
} = apiSlice;
