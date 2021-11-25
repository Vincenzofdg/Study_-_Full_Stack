import React, { useContext, useEffect } from 'react';
import SWContext from '../context/SWContext';
import Loading from '../components/Loading';
import Header from '../components/Header';
import Table from '../components/Table';
import FiltersPanel from '../components/FiltersPanel';
import '../Styles/Home.css';

function Home() {
  const { fetchData, isLoading, errorMsg } = useContext(SWContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      { isLoading ? <Loading /> : (
        <main className="home">
          <FiltersPanel />
          <Table />
          { errorMsg && <h1>{ errorMsg }</h1> }
        </main>
      )}
    </>
  );
}

export default Home;
