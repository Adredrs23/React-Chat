import React,{ useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import ChatIcon from '@material-ui/icons/Chat';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import SettingsIcon from '@material-ui/icons/Settings';

const NavContainer = styled.div`
    width:100%;
    height:7%;
    
    .MuiBottomNavigation-root{
        border-radius:1rem;
        border-top-left-radius:0;
        border-top-right-radius:0;
    }

    /* set up the icon color in selected state */
    .MuiBottomNavigationAction-root.Mui-selected{
        color:coral;
        background-color:#f0c9c9;
        border-radius:30px;
    }

    .removeDefault{
      text-decoration:none;
      color:inherit;
      border-radius:1rem;
      padding:10px 2.5rem 0px;
    }
`;

export default function LabelBottomNavigation() {
  const [value, setValue] = useState('chats');

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };

  return (
    <NavContainer>
        <BottomNavigation value={value} onChange={handleChange} >

        <BottomNavigationAction label="Chats" value="chats" icon=
          {
            <Link to="/" className="removeDefault" >
              <ChatIcon />
            </Link>
          }  
        />

        <BottomNavigationAction label="Stories" value="stories" icon=
          {
            <Link to="/stories" className="removeDefault">
              <SlowMotionVideoIcon />
            </Link>
          } 
        />

        <BottomNavigationAction label="Settings" value="settings" icon=
          {
            <Link to="/settings" className="removeDefault">
              <SettingsIcon />
            </Link>
          } 
        />
        
        </BottomNavigation>
    </NavContainer>
  );
}
