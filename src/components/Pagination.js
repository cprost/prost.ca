import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { theme } from '../styles'

const PagiWrapper = styled.div`
  display: block;
  margin: 2rem auto;
  text-align: center;
  width: 100%;
`

const PagiComponent = styled.h4`
  display: inline;
  margin-left: 1rem;
  color: ${theme.colours.dark};

  a {
    text-decoration: none;
    color: ${theme.colours.darkBlue};
  }

  &.noneleft {
    color: ${theme.colours.lighterBlue};
  }
`


const Pagination = ({ currentPage, totalCount, postsPerPage }) => {
  currentPage = (currentPage === undefined || isNaN(currentPage)) ? 1 : currentPage  // API doesn't play nice on skip
  const totalPages = Math.ceil(totalCount / postsPerPage)

  const nextPage = currentPage + 1
  const prevPage = currentPage - 1

  return (
    <PagiWrapper>
      <PagiComponent className={currentPage === 1 ? 'noneleft' : ''}>
        {currentPage === 1
          ? '← Prev'
          : <Link to={`/blog/${currentPage === 2 ? '' : prevPage}`}>
            ← Prev
          </Link>
        }
      </PagiComponent>

      <PagiComponent>
        Page {currentPage} of {totalPages}
      </PagiComponent>

      <PagiComponent className={currentPage === totalPages ? 'noneleft' : ''}>
        {currentPage === totalPages
          ? 'Next →'
          : <Link to={`/blog/${nextPage}`}>
            Next →
          </Link>
        }
      </PagiComponent>
    </PagiWrapper>
  )
}

export default Pagination