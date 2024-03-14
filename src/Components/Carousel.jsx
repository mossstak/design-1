import PropTypes from 'prop-types'
import { useState } from 'react'
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs'

const Carousel = ({ slides }) => {
  let [current, setCurrent] = useState(0)

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1)
    else setCurrent(current - 1)
  }

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }

  return (
    <div className="overflow-hidden relative h-[80%] w-screen  border-white border-[25px]">
      {/* Images */}
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return (
            <img key={s} src={s} className="w-full h-auto object-contain" />
          )
        })}
      </div>

      {/* Buttons*/}
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>

        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      {/* Radio Buttons*/}
      <div className='absolute bottom-0 py-4 flex justify-center gap-3 w-full'>
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i)
              }}
              key={'circle' + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? 'bg-white' : 'bg-gray-500'
              }`}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Carousel
