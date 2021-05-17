import { useState } from 'react';

const Pagination = (props: any) => {
  const [current, setCurrent] = useState(1);
  if (props.reposNumber == 0) return <></>;
  return (
    <p>
      Showing <span className="font-semibold">{current}</span> to{' '}
      <span className="font-semibold">
        {props.reposNumber > 30 ? current * 30 : props.reposNumber}
      </span>{' '}
      of <span className="font-semibold"> {props.reposNumber}</span> results
    </p>
  );
};
export default Pagination;
