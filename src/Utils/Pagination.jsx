import ReactPaginate from 'react-paginate'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
  }
  const paginationVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 2,
      },
    },
  }
  const showNextButton = currentPage !== totalPages - 1
  const showPrevButton = currentPage !== 0
  return (
    <motion.div
      variants={paginationVariants}
      initial="hidden"
      animate="visible"
    >
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          showNextButton ? (
            <p className="w-12 h-10 flex items-center justify-center text-lightGray rounded-md mr-4">
              {'next >'}
            </p>
          ) : null
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={20}
        previousLabel={
          showPrevButton ? (
            <p className="w-13 h-10 flex items-center justify-center text-lightGray rounded-md mr-4">
              {'< previous'}
            </p>
          ) : null
        }
        containerClassName="flex items-center justify-center mt-8 mb-4 rounded-xl"
        activeClassName="bg-purple-800 text-white"
        pageClassName="block border border-solid border-lightGray hover:bg-gray-500 w-10 h-10 flex items-center justify-center rounded-md mr-4"
      />
    </motion.div>
  )
}

Pagination.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.func.isRequired,
  totalPages: PropTypes.func.isRequired,
}

export default Pagination
