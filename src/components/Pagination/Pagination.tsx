import { CaretLeft, CaretRight } from 'phosphor-react';
import {
  PaginationContainer,
  PaginationList,
  PaginationPrev,
  PaginationNext,
} from './PaginationStyles';
import { useSearchParams } from 'react-router-dom';
import { useRef } from 'react';

interface PaginationProps {
  page: number;
  pages: number;
}

function Pagination({ page, pages }: PaginationProps) {
  const [, setSearchParams] = useSearchParams();
  const itemsRef = useRef<HTMLLIElement[] | null>([]);

  function listPage() {
    const listItem = [];
    for (let index = 1; index <= pages; index++) {
      listItem.push(index);
    }
    return listItem;
  }

  function toScrollId(index: number) {
    if (itemsRef?.current) {
      itemsRef?.current[index].scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
  }

  function nextPage() {
    if (page + 1 > pages) {
      return;
    }

    setSearchParams((params) => {
      params.set('page', String(page + 1));
      return params;
    });
    toScrollId(page + 1);
  }

  function handlePage(pageItem: number) {
    if (page === pageItem) {
      return;
    }

    setSearchParams((params) => {
      params.set('page', String(pageItem));
      return params;
    });
    toScrollId(pageItem);
  }

  function previousPage() {
    if (page - 1 <= 0) {
      return;
    }

    setSearchParams((params) => {
      params.set('page', String(page - 1));

      return params;
    });
    toScrollId(page - 1);
  }

  return (
    <PaginationContainer>
      <PaginationPrev $hasPrev={page > 1} onClick={previousPage}>
        <CaretLeft size={24} />
      </PaginationPrev>

      <ul>
        {listPage().map((item) => {
          return (
            <PaginationList
              key={item}
              ref={(refElement) => {
                if (itemsRef?.current && refElement) {
                  itemsRef.current[item] = refElement;
                }
              }}
              onClick={() => {
                handlePage(item);
              }}
              $isActive={page === item}
            >
              {item}
            </PaginationList>
          );
        })}
      </ul>

      <PaginationNext $hasNext={page + 1 < pages} onClick={nextPage}>
        <CaretRight size={24} />
      </PaginationNext>
    </PaginationContainer>
  );
}
export default Pagination;
