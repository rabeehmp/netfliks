import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import { action, originals, horror, comedy, Romance, Documentaries, trending } from './Components/urls';
import Banner from './Components/Banner/Banner';
import './App.css';
import RowPostTV from './Components/RowPost/RowPostTV';
import RowPostMovie from './Components/RowPost/RowPostMovie';
import LoginPage from './Components/Login/login';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<BrowsePage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
        </Router>
    );
}

function BrowsePage() {
    return (
        <div>
            <NavBar />
            <Banner />
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
