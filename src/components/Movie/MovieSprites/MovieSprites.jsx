import { RiDeleteBin7Fill } from 'react-icons/ri';
import './MovieSprites.css'

const MovieSprite = ({ data, indexOf, removeFromSlot }) => {

    const handleOnClick = (e) => {
        removeFromSlot(indexOf)
    }

    return (
        <div className="movies-sprites" onClick={handleOnClick}>
            <div className='remove-sprite'>
                <RiDeleteBin7Fill/>
            </div>  
            <img src={data} />
        </div>
    );
}
 
export default MovieSprite;