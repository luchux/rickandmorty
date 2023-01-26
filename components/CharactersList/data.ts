import type { Character } from "./CharactersList";
interface CharactersAPIResponse {
  results: Character[];
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
}

export const getData = async (page: number) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const data: CharactersAPIResponse = await res.json();
  return {
    characters: data.results,
    info: data.info,
  };
};
