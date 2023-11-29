
import React from 'react'
import NavBar from './Components/NavBar'
import {action,originals,horror,comedy, Romance,Documentaries,trending } from './Components/urls'
import Banner from './Components/Banner/Banner'
import './App.css'
import RowPostTV from './Components/RowPost/RowPostTV'
import RowPostMovie from "./Components/RowPost/RowPostMovie"

function App() {
    return (
     <div className="App">
       <NavBar/>
       <Banner/>
       <RowPostTV url={trending} title='Trending' />
       <RowPostTV url={originals} title='Netflix Originals' isSmall />
       <RowPostMovie url={action} title='Action' isSmall />
       <RowPostMovie url={horror} title='Horror' isSmall />
       <RowPostMovie url={comedy} title='Comedy' isSmall />
       <RowPostMovie url={Romance} title='Romance' isSmall />
       <RowPostMovie url={Documentaries} title='Documentaries' isSmall />
     </div>
    );
  }

  export default App;