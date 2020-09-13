import React from 'react';
import Styled,{ css } from "styled-components";

const ScrollableContainer = Styled.div`
    /* background:grey; */

    height: ${props => props.height ? props.height: `100%` };
    border-radius:inherit;
    
    margin:.3em;
    margin-bottom:1em;
    padding:10px;

    /* theme */
    box-shadow: ${ props => props.theme === true ? "var(--dark_general_boxshadow)" : "var(--light_general_boxshadow)"};

    box-sizing:border-box;
    
    display:block;
    overflow:auto;
    
    ::-webkit-scrollbar{
        display: none;
    }

    ${ props => props.horizontal && css`
        /* theme */
        background: ${ props => props.theme === true ? "var(--dark_primary_fg_color)" : "transparent"};

        display: inline-block;
        overflow:auto ;
        white-space:nowrap;
    ` }
`;

const Scrollable = (props) => {
    return (
        <ScrollableContainer theme={props.theme} height={props.height} horizontal={props.horizontal}>
            { props.children }
        </ScrollableContainer>
    )
}


export default Scrollable;