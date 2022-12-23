import { useState, useEffect } from 'react';

import api from './services/api';

import NavbarComponent from './components/navbar_component';
import TableComponent from './components/table_component';

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await api.get()
      setData(response.data)
    }
    getData()
  }, [])

  return (
    <>
    <NavbarComponent />

    <TableComponent data={data}/>
    </>
  );
}

export default App;
