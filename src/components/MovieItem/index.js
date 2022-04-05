// Write your code here
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'

import './index.css'

const MovieItem = props => {
  const {movieItem} = props
  const {thumbnailUrl, videoUrl} = movieItem

  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button" className="image-button">
            <img src={thumbnailUrl} alt="thumbnail" className="movie-image" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <button
              className="close-button"
              type="button"
              testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} />
            </button>
            <div>
              <ReactPlayer url={videoUrl} />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
