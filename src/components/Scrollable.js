import React from 'react';
import Styled,{ css } from "styled-components";

const ScrollableContainer = Styled.div`
    /* background:red; */
    /* width:98%; */
    height: ${props => props.height ? props.height: `100%` };
    border-radius:inherit;
    
    margin:.3em;
    margin-bottom:1em;
    padding:10px;
    box-shadow:1px 1px 5px 1px grey;
    box-sizing:border-box;
    
    display:block;
    overflow:auto;
    
    ::-webkit-scrollbar{
        display: none;
    }

    ${ props => props.horizontal && css`
        /* background:grey; */
        display: inline-block;
        overflow:auto ;
        white-space:nowrap;
    ` }
`;

const Scrollable = (props) => {
    return (
        <ScrollableContainer height={props.height} horizontal={props.horizontal}>
            { props.children }
        </ScrollableContainer>
    )
}


export default Scrollable;