import type { NextPage } from "next";
import { GetServerSideProps } from 'next';
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

  //show popup 
  const [show, setShow] = useState(false)

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
    });
    fetchModelOptions().then((options) => {
      setModelOptions(options.data);
    });
    fetchBrandOptions().then((options) => {
      setBrandOptions(options.data);
    });
    setLoading(false);
  }, [brand, model, page]);


 //show model only after load by one 1.5 sec
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1500)
  }, [])

  if (loading) {
    return <div>App is loading</div>;
  }


  return (
    <>
      {show && <Login onClose={()=>setShow(false)}/>}
    <div className={styles.container}>
      <section className={styles.rightsection}>
        <div className={styles.clearcontainer}>
          <button  className={styles.clearbtn} onClick={() => clearAllFilters()}>Clear all</button>
        </div>
        <div className={styles.hr} />
        <div >
          <h4>Brand</h4>
          <div className={styles.radiocontainer}>
            {brandOptions?.map((option ,index) => (
            <label key={index}>
            <input
              className={styles.radiobtn}
              type="radio"
              key={index} 
              checked={option.value == brand }
              value={option.value}
              onChange={(e) => setBrand(e.target.value)}
            />
              {option.label}
          </label>
            ))}
          </div>
        </div>
        <div className={styles.hr} />
        <div>
          <h4>Model</h4> 
          <div className={styles.radiocontainer}>
            {modelOptions?.map((option , index) => (
              <label key={index}>
              <input
                  className={styles.radiobtn}
                type="radio" 
                key={index} 
                checked={option.value == model}
                value={option.value} 
                onChange={(e) => setModel(e.target.value)}
                />
                {option.label}
                </label>
            ))}
          </div>
        </div>
      </section>
      

      <section className={styles.leftsection}>
        <div className={styles.grid}>
          {results.map((result ,index) => (
            <div key={index}>
            <CarCard id={result.id} image={result.image} name={result.name} brand={result.brand} model={result.model} price={result.price?.value} />
            </div>
          ))}
        </div>

        <div className={styles.pagsection}>
          {Array.from({ length: pagesOptions.numberOfPages }).map(
            (_page, index) => (
              <button
              className={styles.pagbuton}
                style={{
                  color: pagesOptions.current === index + 1 ? "black" : "#969696",
                  border: pagesOptions.current === index + 1 ? '#6EEA84 solid 2px' : "initial",
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
    </>
  );
};





// export const getServerSideProps: GetServerSideProps<Search> = async (ctx) => {
//   // Fetch data from external API
//   const res = await fetch(``)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

export default Home