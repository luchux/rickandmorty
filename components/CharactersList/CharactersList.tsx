import { useState, useEffect } from "react";

import { Types } from "types";
import { getData } from "./data";

import Character from "./Character";
import Nav from "@/components/Nav";
import NavItem from "@/components/NavItem";

export const CharactersList = () => {
  const [characters, setCharacters] = useState<Types.Character[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCharacter, setSlectedCharacter] =
    useState<Types.Character | null>(null);

  useEffect(() => {
    getData(1).then((response) => {
      console.log(response);
      setCharacters(response.characters);
      setLoading(false);
    });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <Nav>
          <NavItem href="/new" isActive>
            New Releases
          </NavItem>
          <NavItem href="/top">Top Rated</NavItem>
          <NavItem href="/picks">Vincent’s Picks</NavItem>
        </Nav>
        <ul role="list" className="divide-y divide-slate-100">
          {!loading &&
            characters.map((character) => (
              <Character
                key={character.id}
                character={character}
                onClick={() => setSlectedCharacter(character)}
              />
            ))}
        </ul>
      </div>
      <div>
        {selectedCharacter && (
          <div>
            <h1>Character Details</h1>
            <span>{selectedCharacter.name}</span>
          </div>
        )}
      </div>
    </div>
  );
};
