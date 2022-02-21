import React from "react";
import './search-box.styles.css'


// Functional component is like a class component but all it does is get some props and return some HTML, it doesn't have its own internal state.
//destructure placeholder and handleChange (function that will set state based on value in search box) props off of the props object
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
)

