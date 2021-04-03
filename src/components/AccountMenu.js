import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import { useHistory } from 'react-router-dom';

const options = [
    { id: 'About', url: '/about' },
    { id: 'Log Out', url: '/login' },
];

export const AccountMenu = () => {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOptionClicked = (option) => {
        setAnchorEl(null);
        if (option.id === 'Log Out') {
            localStorage.removeItem('access');
        }
        history.push(option.url);
    };

    return (
        <div>
            <IconButton
                color="primary"
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                {options.map((option) => (
                    <MenuItem
                        key={option.id}
                        onClick={() => handleOptionClicked(option)}
                    >
                        {option.id}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};
