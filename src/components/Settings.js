import React, { useState } from 'react';
import styled from 'styled-components';
import UploadImageDialog from './UploadImageDialog';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';


import EditIcon from '@material-ui/icons/Edit';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const ColumnarDiv = styled.div`
    height:100%;
    border-radius:inherit;
    /* background-color:yellow; */
    padding:.2rem;

    section{
        /* background:darkslategrey; */
        margin-bottom:1rem;
    }

    header{
        /* background-color:red; */
        border-bottom:1px solid rgb(225 43 104);
        width:90%;
        margin:0 auto;
        padding:0;
        margin-bottom:1rem;
        border-radius:inherit;
    }

    .container{
        width:90%;
        margin:0 auto;
        color:#595575;
        /* color:black; */

        #profile{
            display:flex;
            gap:.5rem;

            .profile__pic{
                width:40%;
                height:auto;
                box-shadow: 0 0 10px 0 grey;
                border-radius:1rem;
            }

            .name-details{
                display:flex;
                flex-direction:column;
                justify-content:space-evenly;
                width:100%;

                .data{
                    small{
                        color:grey;
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
                align-self:flex-start;
                background-image:linear-gradient(90deg,#6379f5 0%,rgb(225 43 104) 100%);
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
    padding:0 1.5rem 1rem;
    background-image:linear-gradient(90deg,#6379f5 0%,rgb(225 43 104) 100%);
    width:fit-content;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    top: 10px;  
    font-size:2rem;
`;

const Card = styled.div`
    width: ${ props => props.width ? props.width : "120px" };
    height: ${ props => props.height ? props.height : "200px" };
    border-radius: ${ props => props.borderRadius ? props.borderRadius : "50%" };
    box-shadow:0 0 10px 0 grey;
    padding:5px;

    display:flex;
    flex-direction: ${ props => props.flexDirection ? props.flexDirection : "column" };
    justify-content:center;
    align-items:center;
    
    color:gray;

    span{
        background-image:linear-gradient(90deg,#6379f5 0%,rgb(225 43 104) 100%);
        width:fit-content;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight:bold;
        font-size:1.2rem;
    }
    svg {
        /* background: linear-gradient(90deg,#6379f5 0%,rgb(225 43 104) 100%); */
        background:coral;
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

    const [editUsername,setEditUsername] = useState(false);
    const [editName,setEditName] = useState(false);
    const [editBio,setEditBio] = useState(false);
    const [darkTheme,setDarkTheme] = useState(false);
    const [allowNotifications,setAllowNotifications] = useState(true);
    const [openUploadImage,setOpenUploadImage ] = useState(false);

    const [username,setUsername] = useState("Adredrs23");
    const [fullname,setFullname] = useState("Apoorvraj Sharma");
    const [bio,setBio] = useState("This is your personal space. Tell us about you! Anything you feel that describes you best.");
    const [dp,setDp] = useState("https://robohash.org/as");


    return (
        <ColumnarDiv>
            <header>
                <Header>Settings</Header>
            </header>
            <div className="container">

                <section id="profile">
                    <img onClick={()=>{setOpenUploadImage(true)}} className="profile__pic" src={dp} alt="Users Profile"/>

                    <UploadImageDialog open={openUploadImage} handleClose={()=>{setOpenUploadImage(false)}} contentType="image"  />

                    <div className="name-details">

                        {
                            editUsername 
                            ?   
                                <TextField
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
                                <TextField
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
                        <TextField
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
                        checked={darkTheme}
                        onChange={()=>setDarkTheme(!darkTheme)}
                        color="primary"
                        id="darkTheme__switch"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    
                    <label htmlFor="notifications__switch">Notifications</label>
                    <Switch
                        checked={allowNotifications}
                        onChange={()=>setAllowNotifications(!allowNotifications)}
                        color="primary"
                        id="notifications__switch"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />

                </section>
            
                <footer>                
                    <Card borderRadius="none" width="97%" >
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
