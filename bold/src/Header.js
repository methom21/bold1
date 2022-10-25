import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import './header.css'
import { IconButton } from '@mui/material';
function Header () {
    return (
        <div className='header'>
            <IconButton>
            <AccountCircleIcon />
            </IconButton>
            <h2>Bold</h2>
            <IconButton>
            <ChatIcon />
            </IconButton>
        </div>
    )
}export default Header