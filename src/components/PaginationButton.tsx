export type PaginationAction = string;

export interface PaginationActionProps {
  label: string;
  paginationAction: (label: string) => void
}

const PaginationButton: React.FC<PaginationActionProps> = ({ label, paginationAction }) => {
    
  return (
    <button
      className="w-20 py-2 mx-2
       text-sm border border-gray-500 rounded"
      onClick={() => paginationAction(label)}
    >
      {label}
    </button>
  );
};

export default PaginationButton;
