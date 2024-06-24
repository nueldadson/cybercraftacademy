import React from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';


const Search = () => {
    const [query, setQuery] = useState('');
    
    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Search query:', query);
      // You can add more logic here to handle the search, e.g., making an API call
    };

    return (
        <div className='w-full border-solid border-[1px] border-gray-400 rounded-xl h-[45px] flex flex-row items-center gap-4 overflow-hidden pl-2'>
            <form onSubmit={handleSubmit} className="flex flex-row h-full w-full items-center">
                    <input
                    type="text"
                    id="search"
                    value={query}
                    onChange={handleInputChange}
                    className="border text-gray-600 ml-auto w-full bg-transparent outline-none focus:outline-none border-none text-sm"
                    placeholder="what do you want to learn?"
                    />
                    <button
                    type="submit"
                    className="bg-bluee text-white font-bold h-[50px] px-5"
                    >
                    <FaSearch />
                    </button>
            </form>
        </div>
    );
}

export default Search;
