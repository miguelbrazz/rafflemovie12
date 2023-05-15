import React, { useState } from 'react';
import { RiAddFill } from 'react-icons/ri';
import requestApi from '../../api/requestApi';
import Button from '../Button/Button';
import MovieSprites from '../Movie/MovieSprites/MovieSprites'
import RaffledMovie from '../Movie/RaffledMovie/RaffledMovie';
import { API_IMG } from '../../api/tmdb'
import './Raffle.css'
import Input from '../Input/Input';

const Raffle = () => {

    const [dataMovie, setDataMovie] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [nameMovie, setNameMovie] = useState([])
    const [raffledData, setRaffledData] = useState([])
    const [removedMovie, setRemovedMovie] = useState()
    const [response, setResponse] = useState({
        type: '',
        message: ''
    })

    const handleOnKeyDown = (e) => {
        const inputContainer = document.querySelector('.input-container')
        const pattern = /[a-zA-Z0-9]/

        if (!pattern.test(e.target.value)) {
            inputContainer.classList.add('error-input')
            setResponse({
                type: 'error',
                message: 'Just use letters and numbers!'
            })
            setSearchTerm('')
        } else {
            inputContainer.classList.remove('error-input')
            setResponse({})
            if (e.key === 13 || e.key == 'Enter') {
                handleOnClick()
            }
        }
    }

    const handleOnClick = () => {
        raffledData.length = 0
        addSpriteMovie()
    }

    const addSpriteMovie = () => {
        if (searchTerm.length != 0) {
            requestApi(searchTerm).then(value => {
                if (dataMovie.length <= 9) {
                    setDataMovie([...dataMovie, value.results[0]])
                } else {
                    setResponse({
                        type: 'error',
                        message: 'You have reached the maximum number of movies in the list. Click on the raffle button.'
                    })
                }
            })
            setNameMovie([...nameMovie, searchTerm])
            setSearchTerm('')
        }
    }

    const handleRaffledMovie = () => {
        chooseRaffledMovie()
    }

    const chooseRaffledMovie = () => {
        const luckyNumber = Math.floor(Math.random() * (nameMovie.length))
        requestApi(nameMovie[luckyNumber]).then(value => {
            if (nameMovie.length != 0 && nameMovie.length >= 2) {
                setResponse({})
                dataMovie.length = 0
                setRaffledData(value.results[0])
                nameMovie.length = 0
            } else {
                setResponse({
                    type: 'error',
                    message: 'You need to have 2 or more items on your list.'
                })
            }
        })
    }

    const removeFromSlot = (slot) => {
        setRemovedMovie(dataMovie.splice(slot, 1))
        nameMovie.splice(slot, 1)
    }

    return (
        <div className="raffle-content"> 
                <div className="raffle-container">
                    <h1>Choose the Movies</h1>
                    <p>Add movies</p>
                    <div className='input-container'>
                        <Button component='button' className='add-button' onClick={handleOnClick}><RiAddFill /></Button>
                        <Input type="text" name='search' placeholder='Ex. Shrek 2' onChange={e => (setSearchTerm(e.target.value))} value={searchTerm} onKeyDown={handleOnKeyDown} maxLength='40' className='raffle-input'/>
                    </div>
                    <div className={response.type === 'error' ? 'notification error' : 'hidden'}>
                        <p>{response.message}</p>
                    </div>
                    <Button component='button' className='raffle-button' onClick={handleRaffledMovie}>Raffle now</Button>
                </div>
                <div className="bar"></div>
                {raffledData.length != 0 ? <RaffledMovie data={raffledData} img_url={API_IMG} /> : dataMovie.length != 0 ? <div className="movies-container">
                    {dataMovie.map(item => <MovieSprites data={API_IMG + item?.poster_path} indexOf={dataMovie.indexOf(item)} removeFromSlot={removeFromSlot}/>)}
                </div> : <p>Add movies to the list...</p>
                }
            </div>
     );
}
 
export default Raffle;