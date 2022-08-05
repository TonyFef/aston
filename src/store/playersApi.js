import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { options } from "../env/api";

export const playersApi = createApi({
    reducerPath: "players",
    baseQuery: fetchBaseQuery({ baseUrl: "https://free-nba.p.rapidapi.com/" }),
    endpoints: (build) => ({
        searchTeams: build.query({
            query: () => ({
                url: `teams/`,
                ...options
            }),
            transformResponse: (response) => (response.data.map((item) => {
                const teamNicknameArray = item.full_name.split(" ");
                const teamNickname = teamNicknameArray[teamNicknameArray.length - 1];
                return { name: item.full_name, nickName: teamNickname, id: item.id }
            })),
            // transformResponse: (response) => (response),
        }),
        // searchTeams: build.query({
        //     query: () => ({
        //         url: "teams",
        //         ...options
        //     }),
        //     // transformResponse: (response) => response.response,
        // }),
    })
})

export const { useSearchTeamsQuery } = playersApi;