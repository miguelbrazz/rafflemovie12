import { RiStarLine, RiCalendarLine } from 'react-icons/ri';
import './RaffledMovie.css'

const RaffledMovie = ({ data, img_url }) => {

    let release = new Date(data.release_date)  

    return (
        <div className='raffled-container'>
            <div className="raffled-sprite">
                <img src={img_url + data.poster_path}/>
            </div>
            <div className='raffled-info'>
                <h1 className='title'>{data.title}</h1> 
                <p className='overview'>{data.overview}</p>
                <div className='raffled-details'>
                    <span className='date details'><RiCalendarLine className='ri-line'/> {release.getFullYear()}</span>
                    <span className='vote details'><RiStarLine className='ri-line'/> {data.vote_average}</span>
                </div>
            </div>
        </div>
    );
}
 
export default RaffledMovie;