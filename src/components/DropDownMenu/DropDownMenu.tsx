import React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'

import './DropDownMenu.scss'
import { Link } from 'react-router-dom'

type Props = {}

const DropDownMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="dropdown"
            >
                Dashboard
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem component={Link} to={'/news'}>
                    News
                </MenuItem>
                <hr />
                <MenuItem component={Link} to={'/team'}>
                    Team
                </MenuItem>
                <hr />
                <MenuItem component={Link} to={'/album'}>
                    Album
                </MenuItem>
            </Menu>
        </div>
    )
}

export default DropDownMenu
