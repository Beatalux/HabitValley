import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {

  return (
      <Search>
          <SearchIcon fontSize="medium" />
          <input class="searchField" type="text" placeholder="what is your next habit?">

          </input>
      </Search>
  )
}

const Search = styled.div`

    background-color:white;
    display:flex;
    border-radius:20px;
    width:85%;
    height:30px;
    padding:10px 10px 10px 10px;
    align-items: center;

    .searchField{
        border-radius:20px;
        padding-left:10px;
        border: 0;
    }
`
