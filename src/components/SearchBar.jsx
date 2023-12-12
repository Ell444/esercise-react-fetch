

const SearchBar = ({ value, onChange, onSearch }) => {

    const handleInputChange = (e) => {
        onChange(e.target.value)
    };

    const handleSearch = () => {
        onSearch();
    }

    return (
        <div>
            <input
                type="text"
                onChange={handleInputChange}
                value={value} />
            <button
                onClick={handleSearch}
            >Search</button>
        </div>);
};

export default SearchBar;