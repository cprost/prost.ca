import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const StyledLink = styled(Link)`
  ${'' /* &.lol {
    text-decoration: none;
    cursor: not-allowed;
  } */}
`

const Pagination = ({ currentPage, totalCount, postsPerPage }) => {
  currentPage = (currentPage === undefined || isNaN(currentPage)) ? 1 : currentPage  // API doesn't play nice on skip
  const totalPages = Math.ceil(totalCount / postsPerPage)

  const nextPage = currentPage + 1
  const prevPage = currentPage - 1
  console.log('current page: ', currentPage)
  return (
    <div>
      <p>
        {currentPage === 1
          ? ''
          : <StyledLink className={"lol"} to={`/blog/${currentPage === 2 ? '' : prevPage}`}>← Prev</StyledLink>}
        You are on Page {currentPage} of {totalPages}
        {currentPage === totalPages
          ? ''
          : <StyledLink to={`/blog/${nextPage}`}>Next →</StyledLink>}
      </p>
    </div>
  )
}

export default Pagination