import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Login from "./login";
import CarCard from '../Components/CarCard'

type Vehicle = {
  image: string;
  name: string;
  model: string;
  brand: string;
  id: string;
  price: {
    value: number;
    currency: string;
  };
};

type Options = { data: { value: string; label: string }[] };

const fetchSearchResults = async ({
  brand,
  model,
  page,
}: {
  brand: string;
  model: string;
  page: number;
}): Promise<{
  data: Vehicle[];
  metadata: { numberOfPages: number; hasNext: boolean; current: number };
}> => {
  return fetch(`/api/search?brand=${brand}&model=${model}&page=${page}`)
    .then((r) => r.json())
    .then((data) => data);
};

const fetchBrandOptions = async (): Promise<Options | any> => {
  return fetch("/api/options/brand")
    .then((r) => r.json())
    .then((data) => data);
};
const fetchModelOptions = async (): Promise<Options | any> => {
  return fetch("/api/options/model")
    .then((r) => r.json())
    .then((data) => data);
};

const Home: NextPage = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [page, setPage] = useState(1);
  const [results, setResults] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(false);

  const [brandOptions, setBrandOptions] = useState<Options["data"]>([]);
  const [modelOptions, setModelOptions] = useState<Options["data"]>([]);
  const [pagesOptions, setPagesOptions] = useState<{
    numberOfPages: number;
    hasNext: boolean;
    current: number;
  }>({ numberOfPages: 1, current: 1, hasNext: false });

  const clearAllFilters = useCallback(() => {
    setPage(1);
    setModel("");
    setBrand("");
  }, []);

  useEffect(() => {
    setModel("");
    setLoading(true);
    fetchSearchResults({ brand, model, page }).then((result) => {
      setResults(result.data);
      setPagesOptions(result.metadata);
      setLoading(false);
    });
  }, [brand, model, page]);

  useEffect(() => {
    setModel("");
    setLoading(true);
    fetchModelOptions().then((options) => {
      setModelOptions(options.data);
      setLoading(false);
    });
  }, [brand]);

  useEffect(() => {
    setLoading(true);
    fetchBrandOptions().then((options) => {
      setBrandOptions(options.data);
      setLoading(false);
    });

    setLoading(true);
    fetchModelOptions().then((options) => {
      setModelOptions(options.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>App is loading</div>;
  }

  {
    /*  <h1>Welcome to WTX search</h1>
      <section>
        <div>
          <a href="/my-account">Go to my account page</a>
        </div>
        </section>
        <Login />
        */
  }
  return (
    <div className={styles.container}>
      <section className={styles.rightsection}>
        <h2>Filters</h2>
        <div>
          <button onClick={() => clearAllFilters()}>Clear all filters</button>
        </div>
        <div>
          <label htmlFor="brand-select">Brand - {brand}</label>
          <select
            id="brand-select"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option key="default" value="">
              Select brand
            </option>
            {brandOptions?.map((option ,index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="brand-select">Model - {model}</label>
          <select
            id="brand-select"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            <option key="default" value="">
              Select model
            </option>
            {modelOptions?.map((option , index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
      </section>
      

      <section className={styles.leftsection}>
        <div className={styles.grid}>
          {results.map((result) => (
            <div >
            <CarCard id={result.id} image={result.image} name={result.name} brand={result.brand} model={result.model} price={result.price?.value} />
            </div>
          ))}
        </div>

        <div>
          {Array.from({ length: pagesOptions.numberOfPages }).map(
            (_page, index) => (
              <button
                style={{
                  color: pagesOptions.current === index + 1 ? "red" : "initial",
                }}
                onClick={(e) => setPage(index + 1)}
                key={index}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
