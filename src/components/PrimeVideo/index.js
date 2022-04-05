// Write your code here
import MoviesSlider from '../MoviesSlider/index'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div className="bg-container">
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="header-image"
        />
      </div>
      <div>
        <MoviesSlider moviesList={moviesList} />
      </div>
    </div>
  )
}
export default PrimeVideo
