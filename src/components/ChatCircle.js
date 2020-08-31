import React from 'react';
import Styled from 'styled-components';


const AvatarImage = Styled.div`

    width:4em;
    height:4em;
    padding:5px;
    margin: 0 5px;
    background-clip:padding-box;
    background-color: whitesmoke;
    
    /* display:inline-block; */
    display:inline-flex;
    align-items:center;
    justify-content:center;

    border:1px solid transparent;
    border-radius:50%;
    
    cursor: pointer;
    
    position:relative;
    z-index: 2;
    box-shadow: -8px 6px 14px 0px rgb(106,123,179);

    :active{
        transition:.3s;
        transform:scale(.9)
    }

    ::before {
        content:"";
        position:absolute;
        top:0;
        right:0;
        left:0;
        bottom:0;
        z-index:-1;
        margin:1px;
        border-radius:inherit;
        background: linear-gradient(14deg, rgba(246,29,29,0.9864320728291317) 0%, rgba(218,161,69,1) 60%);
    }

    img{
        width: 90%;
        border-radius: inherit;
        padding:4px;
        /* box-shadow: 10px 5px 15px 0px rgb(106, 123, 179); */
        background-color:whitesmoke;
        
        /* cursor:pointer; */
    }

`;

const ChatCircle = ({avatarImageSrc,actionOnTouch,noBoxShadow}) => {

    // let avatarPlaceholder = "https://i.picsum.photos/id/404/200/200.jpg?hmac=7TesL9jR4uM2T_rW-vLbBjqvfeR37MJKTYA4TV-giwo"
    let avatarPlaceholder = "https://robohash.org/sas";
    
    return (
            <AvatarImage 
                noBoxShadow
                onClick={ (e)=>{
                        e.stopPropagation(); 
                        actionOnTouch()
                    }
                }
            >
                    {
                        avatarImageSrc
                        ?<img src={avatarImageSrc} alt="User Avatar" />
                        :<img src={avatarPlaceholder} alt="Avatar placeholder" />
                    }
            </AvatarImage>
    )
}

export default ChatCircle;


// const AvatarImage = ({avatarImageSrc}) => {
//     return(
//         <div id="avatar-image">
//             {
//                 avatarImageSrc
//                 ?<img src={avatarImageSrc} alt="Avatar placeholder"/>
//                 :<img src={avatarPlaceholder} alt="Avatar placeholder"/>
//             }
//         </div>
//     );
// }

// #avatar-image{
//     width:60px;
//     height:60px;
//     background-color:whitesmoke;
//     display:flex;
//     align-items:center;
//     justify-content:center;
//     border:3px solid transparent;
//     background-clip:padding-box;
//     position:relative;
//     border-radius:50%;
//     padding:15px;
//     cursor: pointer;
// }


// #avatar-image::before {
//     content:"";
//     position:absolute;
//     top:0;
//     right:0;
//     left:0;
//     bottom:0;
//     z-index:-1;
//     margin:-5px;
//     border-radius:inherit;
//     background: linear-gradient(14deg, rgba(246,29,29,0.9864320728291317) 0%, rgba(218,161,69,1) 60%);
// }

// #avatar-image img{
//     width: 90%;
//     border-radius: inherit;
//     padding:10px;
//     box-shadow: 0px 0px 15px 0px rgb(106, 123, 179);
//     background-color:whitesmoke;
// }