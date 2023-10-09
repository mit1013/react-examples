import { FC } from "react";

type Props = {
  pokemon: string[];
};

const PokemonList: FC<Props> = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
};

export default PokemonList;
