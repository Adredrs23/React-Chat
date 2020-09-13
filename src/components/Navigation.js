import React,{ useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../contexts/globalState';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import ChatIcon from '@material-ui/icons/Chat';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import SettingsIcon from '@material-ui/icons/Settings';

const NavContainer = styled.div`
    width:100%;
    height:7%;

    .MuiBottomNavigationAction-root {
      /* theme */
      color: ${ props => props.theme === true ? "var(--dark_midEmp_text_color)" : "none" };

    }
    
    .MuiBottomNavigation-root{
      border-radius:1rem;
      border-top-left-radius:0;
      border-top-right-radius:0;

      /* theme */
      background-color: ${ props => props.theme === true ? "var(--dark_primary_fg_color)" : "none" };
      
    }

    /* set up the icon color in selected state */
    .MuiBottomNavigationAction-root.Mui-selected{
      /* theme */
      color: ${ props => props.theme === true ? "var(--dark_accent_color)" : "var(--light_accent_color_border)" };
      background-color: ${ props => props.theme === true ? "var(--dark_primary_bg_color)" : "var(--light_primary_bg_color)" };
      box-shadow: ${ props => props.theme === true ? "var(--dark_general_boxshadow)" : "none" };
      
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

  const [state,] = useGlobalState();

  const [value, setValue] = useState('chats');

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };

  return (
    <NavContainer theme={state.darkTheme}>
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
