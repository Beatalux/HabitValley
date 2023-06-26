import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const LiveSearchFilter = () => {
    const [cName, setCName] = useState([]);
    const [filteredChallenges, setFilteredChallenges] = useState([]);
    const cancelToken = useRef(null);
    const searchRef = useRef(null);
    const resultsRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        filterChallenge();
    }, [cName]);

    const handleClickOutside = (e) => {
        if (
            searchRef.current.contains(e.target) ||
            resultsRef.current.contains(e.target)
        ) {
            return;
        }
        setCName([]);
    };

    const onChange = async (e) => {
        if (cancelToken.current) {
            cancelToken.current.cancel();
        }
        cancelToken.current = axios.CancelToken.source();
        try {
            const response = await axios.get(`/api/challenge`, {
                cancelToken: cancelToken.current.token,
            });
            setCName(response.data);
        } catch (error) {
            if (axios.isCancel(error) || error) {
                console.log('Data not found.');
            }
        }
    };

    const filterChallenge = () => {
        let stringKwd = searchRef.current.value.toLowerCase();
        let filterData = cName.filter((item) => {
            return item.title.toLowerCase().indexOf(stringKwd) !== -1;
        });
        setFilteredChallenges(filterData);
    };

    return (
        <LiveSearchFilterContainer>
            <SearchBar>
                <SearchIcon color="primary" />
                <Search
                    type="text"
                    placeholder="Search.."
                    ref={searchRef}
                    onChange={onChange}
                />
            </SearchBar>

            {filteredChallenges.length!==0 && (
                <FilteredResultsContainer ref={resultsRef}>
                    {filteredChallenges.map((item) => (
                        <StyledLink to={`../challenge/${item.id}`} key={item.id}>
                            <FilteredResults>{item.title}
                                <FormattedDate date={item.startDate}></FormattedDate>
                            </FilteredResults>

                        </StyledLink>
                    ))}
                </FilteredResultsContainer>)}
        </LiveSearchFilterContainer>
    );
};

export default LiveSearchFilter;

const LiveSearchFilterContainer=styled.div`

    display: flex;
    align-self: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    width:100%;
    max-width:600px;
    background-color:white;
    position:fixed;
    
`


const SearchBar = styled.div`

background-color:white;
display:flex;
align-items: center;
border-bottom:solid 2px lightgrey;

padding:5px;
margin-bottom: 10px;
`

const FilteredResultsContainer = styled.div`
overflow-y: scroll;
background-color:white;

border-radius:10px;  

max-height:150px;
gap: 12px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color:blue;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color:#208AEC;
    }
`;


const FormattedDate = (props) => {
    let num = props.date.indexOf("2023")
    const formatted = props.date.slice(4, num)
    return <SmallText>{formatted}</SmallText>;
};


const FilteredResults = styled.div`

    display:flex;
    justify-content: space-between;
    align-items:center;
    padding-left: 10px;
    padding-right:10px;
    font-size: 20;
    color: "blue";
    margin: 1;
    font-weight:600;
`


const SmallText = styled.p`
font-size:10px;
font-weight:600
`

const Search = styled.input`

    background-color:white;
    color:navy;
    border-radius:20px;
    border: None;
    outline:none;
    width:80%;
    height:30px;
    font-size:15px;

    &:focus, &:hover, &:visited, &:link, &:active {
            border: None;
    }


`
