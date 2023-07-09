import React from 'react'
import { Animal, FetchData } from '../../../../types/global';

const useFetch = (): FetchData => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState<Animal[]>([]);
  const [animalAtual, setAnimalAtual] = React.useState<number>(0)


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data/animais.json');
        const jsonData: Animal[] = await response.json();
        setData(jsonData);
      } catch (error: any) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [animalAtual])


  return { loading, error, data, setAnimalAtual, animalAtual }
}

export default useFetch