import axios from "axios";
import { useEffect, useState } from "react";

const useDataFetcher = (limit = 6) => {
  const API_URL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 300; // You might want to calculate this based on total available data

  useEffect(() => {
    const fetchData = async () => {
      const offset = currentPage * limit;
      try {
        const result = await axios.get(`${API_URL}?offset=${offset}&limit=${limit}`);
        setPages(result.data.results); // results contains the list of pokemons
        console.log(result.data.results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [currentPage, limit]);

  return {
    loading,
    pages,
    totalPages,
    currentPage,
    setCurrentPage,
  };
};

export default useDataFetcher;
