import PropTypes from 'prop-types'
import Card from './Card'

const Project = ({ title, color }) => {
  return (
    <div
      className={`${color} h-screen flex flex-col justify-center items-center snap-center`}
    >
      <h1 className="text-white text-4xl font-bold mb-3">{title}</h1>

      <Card />
    </div>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default Project
