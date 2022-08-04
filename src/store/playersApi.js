import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { options } from "../env/api";

export const playersApi = createApi({
    reducerPath: "players",
    baseQuery: fetchBaseQuery({ baseUrl: "https://free-nba.p.rapidapi.com/" }),
    endpoints: (build) => ({
        searchPlayer: build.query({
            query: (id) => ({
                url: `players/${id}/`,
                ...options
            })
        }),
        searchTeams: build.query({
            query: () => ({
                url: "teams",
                ...options
            }),
            // transformResponse: (response) => response.response,
        }),
    })
})

export const { useSearchPlayerQuery, useSearchTeamsQuery } = playersApi;