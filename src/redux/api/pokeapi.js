import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokeApi = createApi({
    reducerPath: "PokeApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
    endpoints: (builder) => ({

        getPokemonById: builder.query({
            query: (id) => ({
                url: `pokemon/${id}`,
                method: "GET"
            })
        }),

        getPokemonList: builder.query({
            query: () => ({
                url: `pokemon?limit=649&offset=0`,
                method: "GET"
            })
        })

    })
});

export const { 
    useGetPokemonByIdQuery, 
    useGetPokemonListQuery 
} = pokeApi;
