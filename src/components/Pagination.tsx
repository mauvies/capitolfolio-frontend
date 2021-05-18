import PaginationButton, { PaginationAction } from './PaginationButton';

const NEXT = 'Next';
const PREVIOUS = 'Previous';

const Pagination = (props: any) => {
  const { page, reposNumber } = props;
  const totalPages = Math.ceil(reposNumber / 30);

  const paginationAction = (action: PaginationAction): void => {
    if (action === NEXT && page !== totalPages) {
      props.fetchSpecificReposPage(page + 1);
    }
    if (action === PREVIOUS && page !== 1) {
      props.fetchSpecificReposPage(page - 1);
    }
  };

  const numberOfReposToShow = () => {
    return page === 1 
      ? page 
      : (page - 1) * 30;
  }

  if (!reposNumber) return <></>;
  return (
    <section className="flex items-center justify-between my-3">
      <p>
        Showing{' '}
        <span className="font-semibold">
          {numberOfReposToShow()}
        </span>{' '}
        to{' '}
        <span className="font-semibold">
          {reposNumber > 30 ? page * 30 : reposNumber}
        </span>{' '}
        of <span className="font-semibold"> {reposNumber}</span> results
      </p>

      <div className="flex">
        {page !== 1 && (
          <PaginationButton
            label="Previous"
            paginationAction={paginationAction}
          />
        )}

        {page !== totalPages && (
          <PaginationButton label="Next" paginationAction={paginationAction} />
        )}
      </div>
    </section>
  );
};

export default Pagination;
