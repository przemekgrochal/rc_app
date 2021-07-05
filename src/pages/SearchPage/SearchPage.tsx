import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import './style/SearchPage.scss';

const SearchPage = () => {
  const [ cityName, setCityName ] = useState<any>('');

  return (
      <div className="search-container">
        <div className="search-info">Check the weather for any city on earth</div>
        <div className="search-item">
          <TextField
            label="Enter your locations"
            value={cityName}
            onChange={(e)=> setCityName(e.target.value)}
            name="search"
            InputProps={{
              endAdornment: (
                  <SearchIcon />
               )
            }}
          />
          <Link to={`/city/${cityName}`} style={{textDecoration: 'none'}}>
            <Button variant="contained" color="primary">
              Search
            </Button>
          </Link>
        </div>
      </div>
  );
};

export default SearchPage;
