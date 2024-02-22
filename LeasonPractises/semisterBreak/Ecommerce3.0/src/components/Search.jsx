import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";

import { useState } from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
export default function Search({placeholder, data}){
    const [filteredData, setFilteredData] = useState([]);
    const handleFilter = (event)=>{
        const searchWord = event.target.value
        const newFilter = data.filter((value)=>{
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        })
        if(searchWord == ""){
            setFilteredData([]);
        }
        else  setFilteredData(newFilter);
    }
    return(
        <div className="search">
            <div className="searchInputs">
                <input type= "text" placeholder={placeholder} onChange={handleFilter} className='searchInput'></input>
                <div className="searchIcon">
                    <SearchIcon/>
                </div>
            </div>
            {filteredData.length != 0 &&(
                <div className="dataResult">
                    {   
                        filteredData.slice(0, 6).map((value, key) => {
                            /**<NavLink to = {data[0].roughting} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                        <ItemCard item={data[0]}/>
                    </NavLink> */
                            return <><a className='result' href = {value.roughting}> {value.name} </a><br></br></>
                        })
                    }
                </div>
            )
        }
        </div>
        );
}