import { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './components/PokemonList';
import Pagination from './components/Pagination';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDataModel {
  next: string;
  previous: string;
  results: Pokemon[];
}

const PaginationExample = () => {
  const [pokemon, setPokemon] = useState<string[]>([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [nextPageUrl, setNextUrl] = useState<string | null>(null);
  const [prevPageUrl, setPrevUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    // create an abort controller instance for cancelling the request if the useEffect is called again before the previous request is finished
    // const controller = new AbortController();
    axios
      .get(currentPageUrl, {
        // signal: controller.signal,
      })
      .then(({ data }: { data: PokemonDataModel }) => {
        setLoading(false);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setPokemon(data.results.map((p: { name: string }) => p.name));
      });

    // useEffect cleanup function runs when the component is unmounted or the useEffect is called again before the previous request is finished
    // return () => {
    //   controller.abort();
    // };
  }, [currentPageUrl]);

  const gotoNextPage = () => setCurrentPageUrl(nextPageUrl!);

  const goToPrevPage = () => setCurrentPageUrl(prevPageUrl!);

  if (loading) return <>"Loading..."</>;

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : undefined}
        gotoPrevPage={prevPageUrl ? goToPrevPage : undefined}
      />
    </>
  );
};

export default PaginationExample;
