import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api/v1",
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ email, password }) => ({
              url: "/user/login",
              method: "POST",
              body: { email, password },
            }),
          }),
        getUserProfile: builder.query({
            query: (token) => ({
                url: "/user/profile",
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
        }),
        updateUserProfile: builder.mutation({
            query: ({ token, username }) => ({
                url: "/user/profile",
                method: "PUT",
                body: {
                    userName: username,
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
        }),
    }),
});

export const { useLoginMutation, useGetUserProfileQuery, useUpdateUserProfileMutation } = api;