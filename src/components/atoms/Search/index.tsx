import type { Character } from "utils/types";

type SearchProps = {
  updateData: (a: Character[]) => void;
  searchedList: Character[];
  data: Character[];
};

function Index(props: SearchProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let query = e.target.value.toLowerCase();
    let updatedList = [...props.data];
    updatedList = props.data.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    props.updateData(updatedList);
  };

  return (
    <div className="flex justify-center items-center mt-9">
      <div className="h-px w-52 bg-black"></div>
      <div className="relative w-125">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-cgray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="search"
          className="border border-cgray-700 text-cgray-500 rounded font-normal text-base pl-10 p-2.5 w-full placeholder:text-gray-500 placeholder:font-normal placeholder:text-base"
          placeholder="Search Characters..."
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="h-px w-52 bg-black"></div>
    </div>
  );
}

export default Index;
