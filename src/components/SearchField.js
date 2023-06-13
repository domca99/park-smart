import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = (props) => {
  const [searchResult, setSearchResult] = useState(null);
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleClick = () => {
    props.onSearch(location);
  };

  const handleLoad = (autocomplete) => {
    setSearchResult(autocomplete);
  };

  const handlePlaceChanged = () => {
    if (
      searchResult != null &&
      searchResult.getPlace().formatted_address !== undefined
    ) {
      setLocation(searchResult.getPlace().formatted_address);
      props.onSearch(searchResult.getPlace().formatted_address);
    }
  };

  return (
    <Autocomplete onLoad={handleLoad} onPlaceChanged={handlePlaceChanged}>
      <TextField
        type="search"
        variant={"filled"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClick}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        style={{
          width: "90%",
        }}
        onChange={handleChange}
        placeholder={""}
      />
    </Autocomplete>
  );
};

export default SearchField;
