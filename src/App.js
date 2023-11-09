import './App.css';
import Header from './components/Header';
import House from './components/House';
import Login from './components/Login';
import Footer from './components/Footer';
import SearchFilter from './components/SearchFilter';
import SearchedHouse from './components/SearchedHouse';
import SignUp from './components/SignUp';
import { Route,Routes } from 'react-router-dom';
import { useEffect,useState } from 'react';
import SearchResults from './components/SearchResults';
import axios from 'axios';
import EnquiryList from './components/EnquiryList';




function App() {


  let [housesData, setHousesData] = useState([]);
 
  useEffect(() => {
    console.log('in useEffect');
    const fetchData = async ()=> {
      // let resp =  await fetch('http://localhost:3002/');
      // console.log(resp);
      // let data = await resp.json();
      // console.log(data);


      // let resp =  await axios.get('http://localhost:3002/');
      let resp =  await axios.get(process.env.REACT_APP_BACKEND_URL);
      let data = await resp.data;
      // //console.log(' data from json - ');
      //console.log(data);
      setHousesData(data);    
   
     // console.log('data from state');
      //console.log(housesData);
      //write the data to the state so we can use it anywhere in the component
    };
    fetchData();
  },[]);
 




 
  return (
    <div className='container-fluid'>
            <Header />
            <SearchFilter houses={housesData} />
                <Routes>
                  <Route path='/' element= {<House houseinfo={housesData[1]}/>} />
                  <Route path='searchresults/:county' element={<SearchResults houses={housesData}/>} />
                  <Route path='searchedHouse/:id' element={<SearchedHouse houses={housesData}/>} />
                  <Route path='/signup' element={<SignUp/>} />
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/enquiries'  element={<EnquiryList/>}/>
                </Routes>          
            <Footer/>
      </div>
  );
}


export default App;