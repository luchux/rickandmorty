import { useState, useEffect } from "react";

export interface Character {
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
import { getData } from "./data";

export const CharactersList = () => {
  const [characters, setCharacters] = useState<Character[] | []>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData(1).then((response) => {
      console.log(response);
      setCharacters(response.characters);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <span>Characters</span>
      <ul role="list">
        {!loading &&
          characters.map(({ id, name }) => (
            <li role="listitem" key={id}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};
