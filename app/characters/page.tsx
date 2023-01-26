interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: Date;
}
interface CharactersAPIResponse {
  results: Character[];
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
}

interface CharactersProps {
  characters: Character[];
}

export default async function Characters() {
  const { characters } = await getData(1);
  return (
    <div>
      {characters.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
}

export async function getData(page: number) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const data: CharactersAPIResponse = await res.json();
  return {
    characters: data.results,
    info: data.info,
  };
}
