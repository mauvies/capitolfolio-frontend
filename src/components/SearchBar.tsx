import { SearchIcon } from '@heroicons/react/outline';

interface SearchBarProps {
  input: string;
  handleSubmit: (e: React.SyntheticEvent) => void;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  inputError: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  input,
  handleSubmit,
  handleChange,
  inputError,
}) => {
  return (
    <form
      className="relative flex items-center justify-between flex-1 w-64 h-10 px-3 mx-auto bg-gray-100 rounded-2xl"
      onSubmit={handleSubmit}
    >
      <SearchIcon className="w-6 h-6 text-gray-400 " />

      <input
        type="text"
        name="search"
        className="w-5/6 bg-gray-100 outline-none focus:active:bg-gray-100"
        placeholder="Search Github user"
        value={input}
        onChange={handleChange}
      />

      {inputError && !input && (
        <p className="mx-auto text-xs font-semibold text-red-700 absolute bottom-[-23px] left-0">
          Please introduce a valid account
        </p>
      )}
    </form>
  );
};

export default SearchBar;
