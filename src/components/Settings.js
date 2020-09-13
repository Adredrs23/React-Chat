import React, { useState } from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { useGlobalState } from '../contexts/globalState';
import { actionTypes } from '../reducers/reducer';

import UploadImageDialog from './UploadImageDialog';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';


import EditIcon from '@material-ui/icons/Edit';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& label':{
        color: "white",
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'yellow',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'var(--dark_accent_color)',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'yellow',
        },
      },
    },
  })(TextField);

const ColumnarDiv = styled.div`
    height:100%;
    border-radius:inherit;
    padding:.2rem;

    section{
        margin-bottom:1rem;
    }

    header{    
        /* theme */
        border-bottom: ${ props => props.theme === true ?  "1px solid var(--dark_accent_color)" : "1px solid var(--light_accent_color_border)" };

        width:90%;
        margin:0 auto;
        padding:0;
        margin-bottom:1rem;
        border-radius:inherit;
    }

    .container{
        /* theme */
        color: ${ props => props.theme === true ?  "var(--dark_highEmp_text_color)" : "var(--light_highEmp_text_color)" };

        width:90%;
        margin:0 auto;

        input,textarea{
            color: var(--dark_highEmp_text_color);
            background: var(--dark_primary_fg_color);
        }

        #profile{
            display:flex;
            gap:.5rem;

            .profile__pic{
                /* theme */
                box-shadow: ${ props => props.theme === true ? "none": "var(--light_general_boxshadow)" };
                
                width:40%;
                height:auto;
                border-radius:1rem;
            }

            .name-details{
                display:flex;
                flex-direction:column;
                justify-content:space-evenly;
                width:100%;

                svg{
                    /* theme */
                    color: ${ props => props.theme === true ? "var(--dark_accent_color)": "none"};
                }
                
                .data{

                    small{
                        /* theme */
                        color: ${ props => props.theme === true ? "var(--dark_midEmp_text_color)": "var(--light_midEmp_text_color)"};
                    }

                    p{
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        padding:5px;
                    }
                }
            }
        }

        #bio{
            svg{
                /* theme */
                color: ${ props => props.theme === true ? "var(--dark_accent_color)": "none"};
            }

            small{
                color:grey;
            }
        }

        #general{
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around;
            h3{
                /* theme */
                background: ${ props => props.theme === true ? "var(--dark_text_gradient)": "var(--light_text_gradient)"};

                align-self:flex-start;
                width:fit-content;
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }

        footer{
            h2{
                transform:scale(.5)
            }
        }

    }
`;

const Header = styled.h2`
    /* theme */
    background: ${ props => props.theme === true ? "var(--dark_text_gradient)" : "var(--light_text_gradient)"};


    padding:0 1.5rem 1rem;
    width:fit-content;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    top: 10px;  
    font-size:2rem;
`;

const Card = styled.div`
    /* theme */
    box-shadow: ${ props => props.theme === true ? "var(--dark_general_boxshadow)": "var(--light_general_boxshadow)" };
    background: ${ props => props.theme === true ? "var(--dark_primary_fg_color)": "transparent" };
    color: ${ props => props.theme === true ? "var(--dark_midEmp_text_color)": "var(--light_midEmp_text_color)" };


    width: ${ props => props.width ? props.width : "120px" };
    height: ${ props => props.height ? props.height : "200px" };
    border-radius: ${ props => props.borderRadius ? props.borderRadius : "50%" };
    padding:5px;

    display:flex;
    flex-direction: ${ props => props.flexDirection ? props.flexDirection : "column" };
    justify-content:center;
    align-items:center;
    

    span{
        /* theme */
        background: ${ props => props.theme === true ? "var(--dark_text_gradient)": "var(--light_text_gradient)" };


        width:fit-content;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight:bold;
        font-size:1.2rem;
    }
    svg {
        /* theme */
        background: ${ props => props.theme === true ? "var(--dark_accent_color)": "var(--light_accent_color_border)" };

        color:white;
        padding:5px;
        border-radius:10px;
        transition:300ms;
    }
    svg:hover{
        transform:scale(1.1);
    }
`;

const Settings = () => {

    const [state, dispatch] = useGlobalState();

    const [editUsername,setEditUsername] = useState(false);
    const [editName,setEditName] = useState(false);
    const [editBio,setEditBio] = useState(false);
    // const [darkTheme,setDarkTheme] = useState(false);
    const [allowNotifications,setAllowNotifications] = useState(true);
    const [openUploadImage,setOpenUploadImage ] = useState(false);

    const [username,setUsername] = useState("Adredrs23");
    const [fullname,setFullname] = useState("Apoorvraj Sharma");
    const [bio,setBio] = useState("This is your personal space. Tell us about you! Anything you feel that describes you best.");
    const [dp,] = useState("https://robohash.org/as");


    return (
        <ColumnarDiv theme={state.darkTheme} >
            <header>
                <Header theme={state.darkTheme}>Settings</Header>
            </header>
            <div className="container">

                <section id="profile">
                    <img onClick={()=>{setOpenUploadImage(true)}} className="profile__pic" src={dp} alt="Users Profile"/>

                    <UploadImageDialog open={openUploadImage} handleClose={()=>{setOpenUploadImage(false)}} contentType="image"  />

                    <div className="name-details">

                        {
                            editUsername 
                            ?   
                                <CssTextField
                                    id="username"
                                    label="Username"
                                    defaultValue={username}
                                    helperText="Your visible identity"
                                    variant="outlined"
                                    onChange={(e)=>{setUsername(e.target.value)}}
                                    InputProps={
                                        {
                                            endAdornment:(<IconButton onClick={()=>{setEditUsername(false)}}><CheckCircleIcon/></IconButton>)
                                        }
                                    }
                                />
                            :
                            <div className="data">
                                <small>Username</small>
                                <p>{username} 
                                    <IconButton size="small" onClick={()=>{
                                        setEditUsername(true);
                                        setEditName(false);
                                        setEditBio(false)}
                                    }>
                                        <EditIcon/>
                                    </IconButton>
                                </p>
                            </div>
                        }

                        {
                            editName 
                            ?
                                <CssTextField
                                    id="name"
                                    label="Name"
                                    defaultValue={fullname}
                                    variant="outlined"
                                    onChange={(e)=>{setFullname(e.target.value)}}
                                    InputProps={
                                        {
                                            endAdornment:(<IconButton onClick={()=>{setEditName(false)}}><CheckCircleIcon/></IconButton>)
                                        }
                                    }
                                />
                            :
                            <div className="data">
                                <small>Name</small>
                                <p> { fullname } <IconButton size="small" onClick={()=>{
                                        setEditUsername(false);
                                        setEditName(true);
                                        setEditBio(false)}}><EditIcon/></IconButton></p>
                            </div>
                        }

                        
                    </div>
                </section>

                <section id="bio">
                    {
                        editBio
                        ?
                        <CssTextField
                            id="bio"
                            label="Bio"
                            multiline
                            rows={4}
                            // maxRows={4}
                            variant="outlined"
                            defaultValue={bio}
                            fullWidth
                            onChange={(e)=>{setBio(e.target.value)}}
                            InputProps={
                                {
                                    endAdornment:(<IconButton onClick={()=>{setEditBio(false)}}><CheckCircleIcon/></IconButton>)
                                }
                            }
                        />
                        :
                        <div className="data">
                            <small>Bio <IconButton size="small" onClick={()=>{
                                        setEditUsername(false);
                                        setEditName(false);
                                        setEditBio(true)}}><EditIcon/></IconButton> </small>
                            <p>{bio}</p>
                        </div>
                    }
                </section>

                <section id='general'>
                    <h3>General</h3>

                    <label htmlFor="darkTheme__switch">Dark Theme</label>
                    <Switch
                        checked={state.darkTheme}
                        onChange={ ()=>dispatch({type:actionTypes.TOGGLE_DARK_MODE}) }
                        color="primary"
                        id="darkTheme__switch"
                        inputProps={{ 'aria-label': 'primary checkbox' }}

                    />
                    
                    <label htmlFor="notifications__switch">Notifications</label>
                    <Switch
                        checked={allowNotifications}
                        onChange={()=>setAllowNotifications(!allowNotifications)}
                        // dummy action
                        color="primary"
                        id="notifications__switch"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />

                </section>
            
                <footer>                
                    <Card borderRadius="20px" width="97%" theme={state.darkTheme} >
                        <p>Developed with love in </p>
                        <span>INDIA</span>
                        <p>by</p>
                        <span>Apoorvraj Sharma</span>

                        <div className="profile__links">
                            <a href="https://www.linkedin.com/in/apoorvraj-sharma-7900a3161" target="blank" ><IconButton> <LinkedInIcon fontSize="large" /> </IconButton></a>

                            <a href="https://github.com/Adredrs23" target="blank"><IconButton > <GitHubIcon fontSize="large"/> </IconButton></a>
                            
                            <a href="mailto:adredars@gmail.com"><IconButton> <EmailIcon fontSize="large" /> </IconButton></a>
                        </div>
                        
                    </Card>
                </footer>
                
        
            </div>
            
        </ColumnarDiv>
    )
}

export default Settings;
