import React, {useState} from 'react';
import {IconButton, Menu, MenuItem} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const options = [
    'Name',
    'First created',
    'Last created',
    'Profit',
];

const ITEM_HEIGHT = 48;

const FilterMenu = ({setFilterBy}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    disablePadding: true
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                        borderRadius: '20px'
                    },
                }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            >
                <MenuItem unselectable style={{borderBottom: '1px solid black', paddingLeft: '50px', background: 'rgba(0, 0, 0, 0.04)'}}>
                    Filter by:
                </MenuItem>
                {options.map((option) => (
                    <MenuItem key={option} onClick={(e) => {
                        setFilterBy(option)
                        handleClose()
                    }}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default FilterMenu;