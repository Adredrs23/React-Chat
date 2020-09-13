import React,{useState} from 'react'
import Styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Searchbox = Styled.form`
    /* theme  */
    background-color: ${ props => props.theme === true ? "var(--dark_primary_fg_color)" : "transparent"};

    margin:.3em .3em;
    padding:10px;
    
    border-radius:2em;
    box-sizing:border-box;
    
    /* theme */
    box-shadow: ${ props => props.theme === true ? "var(--dark_general_boxshadow)" : "var(--light_general_boxshadow)"};
    
    display:flex;
    align-items:center;

    input{
        background:transparent;

        outline:none;
        border:none;

        flex:2;
        margin:0 .5em;
        height:100%;
        font-size:1.2em;
        border-radius:1em;
        padding:0 10px;

        /* theme */
        color: ${ props => props.theme === true ? "var(--dark_accent_color)" : "var(--light_accent_color_border)" };

        ::placeholder{
            /* theme */
            color: ${ props => props.theme === true ? "var(--dark_accent_color)" : "var(--light_accent_color_border)" };
        }

        ::selection{
            background: ${ props => props.theme === true ? "white" : "darkslategrey" };
            
        }
    }


    svg{
        /* theme */
        color: ${ props => props.theme === true ? "var(--dark_accent_color)" : "var(--light_accent_color_border)" };

        border-radius:10px;
        padding:7px;
        cursor:pointer;
    }

    button{
        background:transparent;
        border:none;
        outline:none;
        padding:0;
        margin:0;
    }
`;


const Search = ({theme}) => {
    
    const [searchValue,setSearchValue] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(searchValue);
        setSearchValue("");
    }

    return (
        <Searchbox theme={theme} onSubmit={handleSubmit}>
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Search chats..." value= {searchValue } onChange={(e)=>{setSearchValue(e.currentTarget.value)}}/>
            <button onClick={handleSubmit} >
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </Searchbox>
    )
}


export default Search;