import React from 'react'
import Box from '@mui/material/Box'
import { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import './MenuBurger.scss'
import Menu from 'components/Menu/Menu'

type Props = {}
const MenuBurger = (props: Props) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setIsDrawerOpen(true)}
            >
                {' '}
                <MenuIcon className="btnMenu" />
            </IconButton>

            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                sx={{ backgroundColor: 'back' }}
            >
                <Box
                    p={1}
                    width="250px"
                    textAlign="center"
                    role="presentation"
                    className="menu__content"
                >
                    <div>Menu</div>
                </Box>
                <Menu />
            </Drawer>
        </>
    )
}
export default MenuBurger
