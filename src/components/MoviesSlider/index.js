// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props

  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')

  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div>
      <h1 className="slider-heading">Action Movies</h1>
      <Slider {...settings} className="slider-container">
        {actionMovies.map(each => (
          <MovieItem movieItem={each} key={each.id} />
        ))}
      </Slider>

      <h1 className="slider-heading">Comedy Movies</h1>
      <Slider {...settings} className="slider-container">
        {comedyMovies.map(each => (
          <MovieItem movieItem={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}
export default MoviesSlider
