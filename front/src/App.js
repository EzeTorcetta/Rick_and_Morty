import style from './App.module.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Forms/Forms';
import Favorites from './components/Favorites/Favorites.jsx'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';




function App() {

  //! HOOKS:
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const {pathname} = useLocation(); // use location devuelve un objeto con la propiedad pathname
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate('/');
  }, [access]);


  //! Credenciales de prueba:
  const username = "lalala@mail.com";
  const password = "lalala123";

  //! EVENT HANDLERS:
  const onSearch = (id) => {
    // const URL_BASE = "https://be-a-rym.up.railway.app/api";
    // const KEY = "416486ca5103.96ef6b2df4eb1059f55c";

    const URL_BASE = `http://localhost:3001/rickandmorty/onsearch`

    // fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    fetch(`${URL_BASE}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters([...characters, data]);
          // setCharacters([...characters, data]);
        } else {
          alert("Algo salió mal");
        }
      });
  };

  const onClose = (id) => {
    // porque filter.... no modifica el array original
    setCharacters(characters.filter((char) => char.id !== id));
  };


  

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }
    else{alert ('Algo salió mal')}
  }


  //! RENDER :
  return (

    <div className={style.App}>

      
      { pathname !== "/" && <Nav onSearch={onSearch} />}
      
      <Routes>
        <Route exact path='/' element={<Form login={login} />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/favorites' element={<Favorites/>} />

      </Routes>


    </div>
  )
}

export default App;
