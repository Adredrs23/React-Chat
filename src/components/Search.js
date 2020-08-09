import React,{useState} from 'react'
import Styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Searchbox = Styled.form`
    margin:.3em .3em;
    padding:10px;
    
    /* background-color:grey; */
    border-radius:2em;
    box-sizing:border-box;
    box-shadow:1px 1px 5px 1px grey;
    
    display:flex;
    align-items:center;

    input{
        outline:none;
        border:none;

        flex:2;
        margin:0 .5em;
        height:100%;
        font-size:1.2em;
        border-radius:1em;
        padding:0 10px;

        color:coral;

        ::placeholder{
            color:coral;
        }

        ::selection{
            background:darkslategrey;
        }
    }


    svg{
        /* background:red; */
        border-radius:10px;
        padding:7px;
        cursor:pointer;
    }

    button{
        border:none;
        outline:none;
        padding:0;
        margin:0;
    }
`;


const Search = () => {
    
    const [searchValue,setSearchValue] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(searchValue);
        setSearchValue("");
    }

    return (
        <Searchbox onSubmit={handleSubmit}>
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Search chats..." value= {searchValue } onChange={(e)=>{setSearchValue(e.currentTarget.value)}}/>
            <button onClick={handleSubmit} >
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </Searchbox>
    )
}


export default Search;