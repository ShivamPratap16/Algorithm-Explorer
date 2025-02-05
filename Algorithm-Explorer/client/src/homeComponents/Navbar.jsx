import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Box } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MailIcon from '@mui/icons-material/Mail';
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import CodeIcon from '@mui/icons-material/Code';
import InfoIcon from '@mui/icons-material/Info';
import './navbar.css'; // Import the new CSS file

export default function Navbar() {
    const Auth = localStorage.getItem('AlgoViz_token');
    const Profile_image = localStorage.getItem('AlgoViz_avatar');
    const Name = localStorage.getItem('AlgoViz_name');
    const Email = localStorage.getItem('AlgoViz_email');

    // =====================Desktop Profile toggle====
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //   ================================Logout Function===========
    let navigate = useNavigate()
    function logout() {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <Box className="navbar">
            <Link to='/' className="navbar-brand">Algorithm Explorer</Link>
            <div className="navbar-links">
                <NavLink to='/' className="nav-link">
                    <HomeIcon className="nav-icon" /> Home
                </NavLink>
                <NavLink to='/pathfinder' className="nav-link">
                    <SearchIcon className="nav-icon" /> Path Finder
                </NavLink>
                <NavLink to='/sort' className="nav-link">
                    <SortIcon className="nav-icon" /> Sorting Algorithms
                </NavLink>
                <NavLink to='/recursivesort' className="nav-link">
                    <CodeIcon className="nav-icon" /> Recursive Sorting
                </NavLink>
                <NavLink to='/nqueen' className="nav-link">
                    <CodeIcon className="nav-icon" /> N Queen
                </NavLink>
                <NavLink to='/convexhull' className="nav-link">
                    <CodeIcon className="nav-icon" /> Convex Hull
                </NavLink>
                <NavLink to='/binarysearch' className="nav-link">
                    <CodeIcon className="nav-icon" /> Binary Search
                </NavLink>
                <NavLink to='/about' className="nav-link">
                    <InfoIcon className="nav-icon" /> About Us
                </NavLink>
            </div>
            {Auth ? (
                <div className="profile-section">
                    <Tooltip title="Account settings">
                        <IconButton
                            className='profile'
                            onClick={handleClick}
                            size="medium"
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar alt="Profile" src={Profile_image} />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                    >
                        <MenuItem>
                            <Avatar alt="User" src={Profile_image} />{Name}
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <MailIcon fontSize="medium" />
                            </ListItemIcon>
                            {Email}
                        </MenuItem>
                        <MenuItem onClick={logout}>
                            <ListItemIcon>
                                <LogoutIcon fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </div>
            ) : (
                <div className="auth-links">
                    <NavLink to='/login' className="nav-link">Login</NavLink>
                    <NavLink to='/signup' className="nav-link">Sign Up</NavLink>
                </div>
            )}
        </Box>
    );
}
