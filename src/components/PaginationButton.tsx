export type PaginationAction = string;

const PaginationButton = (props: any) => {
    
  return (
    <button
      className="w-20 py-2 mx-2 text-sm border border-gray-500 rounded"
      onClick={() => props.paginationAction(props.label)}
    >
      {props.label}
    </button>
  );
};

export default PaginationButton;
