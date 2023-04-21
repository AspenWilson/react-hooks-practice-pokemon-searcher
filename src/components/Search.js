import React, {useState} from "react";

function Search({setSearchKey}) {

  const [text, setText] = useState('')

  function handleSearchClick (e) {
    e.preventDefault()
    setSearchKey(text)
  }

  function handleSearchText (e) {
    setText(e.target.value)
  }
  return (
    <form className="ui search" onSubmit={handleSearchClick}>
      <div className="ui icon input">
        <input 
        className="prompt"
        id='search'
        type='text'
        onChange={handleSearchText} 
        />
        <button type='submit' className="search icon" >🔍</button>
      </div>
    </form>
  );
}

export default Search;
