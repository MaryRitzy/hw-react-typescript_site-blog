import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import './Header.scss'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import MenuBurger from 'components/MenuBurger/MenuBurger'
import CounterLikes from 'components/CounterLikes/CounterLikes'
import { Link } from 'react-router-dom'
/*import React, { useEffect, useState } from "react";*/

type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar position="fixed" className="app-bar">
            <Container>
                <Toolbar className="header-menu">
                    <div className="logo-kalush">
                        <Logo />
                    </div>
                    <div className="like-count-menu">
                        <Link className="favorite-page" to="/favorites">
                            Favorites
                        </Link>
                        <CounterLikes />
                        <MenuBurger />
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
