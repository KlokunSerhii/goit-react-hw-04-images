import {useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Dna } from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { AppDiv, Spiner } from './App.styled';
import fetch from '../services/api';
import Button from './Button';


const statusCode = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  ERROR: 'error',
};

const App =()=>{
  const [searchQuery, setSearchQuery] = useState('')
  const [hits, setHits] = useState([])
  const [page, setPage] = useState(1)
  const [totalHits, setTotalHits] = useState('')
  const [status, setStatus] = useState(statusCode.IDLE)
  const perPage = 12


useEffect(()=>{
    if(searchQuery === '') return
    setStatus(statusCode.PENDING)
    fetch(searchQuery, page, perPage).then(
    ({hits, totalHits}) => {    
    setHits(prevHits => [...prevHits, ...hits])
    setTotalHits(totalHits)
    setStatus(statusCode.RESOLVED)
  }
).catch(setStatus(statusCode.ERROR))

},[ page, searchQuery ])


  const onClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handelForm = searchQuery => {
    setSearchQuery(searchQuery)
    setHits([])
    setPage(1)
    setTotalHits('')
    setStatus(statusCode.IDLE)
  };


  const totalPage = Math.ceil(totalHits / perPage)

  return (
    <AppDiv>
      <Searchbar onSubmit={handelForm} />

      {totalHits.length !== 0 && status !== statusCode.ERROR && <ImageGallery hits={hits} />}

      {page < totalPage && <Button onClick={onClick} />}

      {status === statusCode.PENDING && 
        (<Spiner>
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </Spiner>)}
      <ToastContainer autoClose={2000} />
    </AppDiv>
  );
}


export default App;
