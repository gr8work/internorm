import React, { useEffect, useMemo, useState } from 'react';

import prevIcon from 'assets/icons/slider-arrow-left.svg';
import nextIcon from 'assets/icons/slider-arrow-right.svg';

import { StyledArrowIcon, StyledDot, StyledMoreDots, StyledWrapper } from './Pagination.styles';

export type PaginationType = {
  total: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
  scrollHandler?: () => void;
  urlPagination?: boolean;
};

const Pagination = ({
  total,
  itemsPerPage,
  currentPage = 1,
  setCurrentPage,
  className,
  scrollHandler,
  urlPagination = false,
}: PaginationType) => {
  const pageCount = useMemo(() => Math.ceil(total / itemsPerPage), [total, itemsPerPage]);
  const [activeCounts, setActiveCounts] = useState<any[]>();
  const numbers = Array.from(new Array(pageCount || 0), (_, k) => k + 1);

  const getActiveNumbers = () => {
    if (numbers.length <= 8) return setActiveCounts(numbers);
    let newNumbers =
      currentPage <= numbers.length - 2
        ? [numbers[currentPage - 1], numbers[currentPage], '...', numbers[numbers.length - 1]]
        : [numbers[currentPage - 1], numbers[currentPage]];
    if (currentPage > 1) newNumbers = [numbers[currentPage - 2], ...newNumbers];
    return setActiveCounts(newNumbers);
  };

  useEffect(() => {
    getActiveNumbers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    if (document && urlPagination && document.location.search.includes('?page=')) {
      const urlCount = Number(document.location.search.replace('?page=', ''));
      setCurrentPage(urlCount);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return pageCount > 1 ? (
    <StyledWrapper {...{ className }}>
      <StyledArrowIcon
        src={prevIcon}
        type="16"
        handleClick={() => {
          if (urlPagination) {
            window.history.replaceState(
              null,
              '',
              `?page=${currentPage > 1 ? currentPage - 1 : currentPage}`
            );
          }
          setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
          if (scrollHandler) {
            scrollHandler();
          }
        }}
      />
      {activeCounts &&
        activeCounts.map((page) =>
          page !== '...' ? (
            <StyledDot
              key={`dot-${page}`}
              active={currentPage === page}
              onClick={() => {
                if (urlPagination) {
                  window.history.replaceState(null, '', `?page=${page}`);
                }
                setCurrentPage(page);
                if (scrollHandler) {
                  scrollHandler();
                }
              }}
            >
              {page}
            </StyledDot>
          ) : (
            <StyledMoreDots>...</StyledMoreDots>
          )
        )}
      <StyledArrowIcon
        src={nextIcon}
        type="16"
        handleClick={() => {
          if (urlPagination) {
            window.history.replaceState(
              null,
              '',
              `?page=${currentPage < pageCount ? currentPage + 1 : currentPage}`
            );
          }
          setCurrentPage((prevPage) => (prevPage < pageCount ? prevPage + 1 : prevPage));
          if (scrollHandler) {
            scrollHandler();
          }
        }}
      />
    </StyledWrapper>
  ) : null;
};

export default Pagination;
