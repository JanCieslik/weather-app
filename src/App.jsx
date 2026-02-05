import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/header.jsx';
import WeatherWidget from './components/weatherWidget/weatherWidget.jsx'; 
import WeatherWidgetFavourites from './components/weatherWidget/weatherWidgetFavourites.jsx'; 
import SearchBar from './components/searchBar/searchBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import randomCity from './utils/randomCity.jsx';


function App() {

  const [widgets, setWidgets] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tempFormat, setTempFormat] = useState(1); // 1=C, 2=K, 3=F


  useEffect( () => {
    const saved = localStorage.getItem('favourites');
    if (saved) {
      setFavourites(JSON.parse(saved));
    }
    const random = randomCity().map(city => ({
      id: Date.now() + Math.random(), city
    }));
    setWidgets(random);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if(isLoaded) {
      localStorage.setItem('favourites', JSON.stringify(favourites));
    }
  }, [favourites, isLoaded]);

  const handleCityChange = (cityName) => {
    
    setWidgets(prev => [
      { id: Date.now(), city: cityName }, ...prev ]);
  };

  const handleWidgetClose = (id) => {
    setWidgets(prev => prev.filter(widget => widget.id !== id));
  };

  const handleToggleFavourite = (id, city) => {
    const isInFavourites = favourites.some(fav => fav.city === city);

    if (isInFavourites) {
      setFavourites(prev => prev.filter(fav => fav.city !== city));

    } else {
      setFavourites(prev => [{ id , city }, ...prev]);
    }
  };

  const isCityInFavourites = (city) => {
    return favourites.some(fav => fav.city === city);
  };






  return (
    <div className="App">
      <BrowserRouter basename="/weather-app">
    
       <Header />
        <Routes>  
          <Route path="/" element={
            <>
            <SearchBar onSearch={handleCityChange}/>
            {widgets.map(widget => (
              <WeatherWidget 
              key={widget.id} 
              city={widget.city}
              tempFormat={tempFormat} 
              onClose={() => handleWidgetClose(widget.id)} 
              onToggleFavourite={() => handleToggleFavourite(widget.id, widget.city)}
              isFavourite={isCityInFavourites(widget.city)}
              />
            ))}
            </>
          } />
          <Route path="/favourites" element={
            favourites.map(fav => (
              <WeatherWidgetFavourites 
              key={fav.id} 
              city={fav.city} 
              onToggleFavourite={() => handleToggleFavourite(fav.id, fav.city)}
              isFavourite={isCityInFavourites(fav.city)}
              />
            ))
          } />
        </Routes>  
      </BrowserRouter>
    </div>
  )
}

export default App
