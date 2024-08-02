import {IMG_URL} from '../../Utils/Constants'
import { useDispatch } from 'react-redux'
import { setDilougeBox } from '../../redux/Slice/Movie.slice'
const MovieCard = ({backdrop_path}) => {
    //console.log("poster_path ", backdrop_path)
  const dispatch = useDispatch()

    const handleOpen = ()=>{
      dispatch(setDilougeBox(true))
    }
  return (
    <>
    {
      backdrop_path ? <> <div className='w-80 p-4 m-2 border-4 rounded ' onClick={handleOpen}>
      <img  src= {`${IMG_URL}/${backdrop_path}`} alt= 'banner-image'/>
  </div>
      </> : <>
      <div className='w-80 p-4 m-2 border-4 rounded '>
            <img  src= "https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-block-vector-icon-png-image_1027165.jpg" alt= 'banner-image'/>
        </div>
      </>
    }
       
    </>
  ) 
}

export default MovieCard
