import PropTypes from 'prop-types'

const About = ({ title, color }) => {
  return (
    <div
      className={`${color} h-screen flex justify-center items-center snap-center`}
    >
      <h1 className="text-white text-4xl font-bold">{title}</h1>
    </div>
  )
}

About.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }

export default About
