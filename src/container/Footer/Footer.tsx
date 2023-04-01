import React from 'react'
import Box from '@mui/system/Box'
import Grid from '@mui/system/Unstable_Grid'
import styled from '@mui/system/styled'
import './Footer.scss'
import { Button } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import EastIcon from '@mui/icons-material/East'
import SosialLink from 'components/SosialLink/SosialLink'
import Divider from '@mui/joy/Divider/Divider'

type Props = {}

const Footer = (props: Props) => {
    return (
        <>
            <footer className="bg-footer">
                <div className="footerContainer">
                    {' '}
                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        maxWidth={1200}
                        columnSpacing={{ xs: 1, sm: 1, md: 1 }}
                    >
                        <Grid xs={12} md={4} lg={4}>
                            <div className="btn-title-wraper">
                                <div className="title-footter">
                                    Vestibulum dapibus, mauris nec malesuada
                                    fames ac turpis velit
                                </div>
                                <Button className="button-futter">
                                    View more detail
                                </Button>
                            </div>
                        </Grid>
                        <Grid xs={12} md={4} lg={4} spacing={1}>
                            <div className="title-middle">
                                Nullam wisi ultricies a gravida vitae
                            </div>
                            <div className="middle-section-footer">
                                <Grid xs={12} md={6} lg={6} spacing={1}>
                                    <div className="middle-section-left">
                                        <div className="arrow-link-wrapper">
                                            <EastIcon className="arrow-footer" />
                                            <NavLink
                                                className="title-link-footer"
                                                to="/"
                                            >
                                                Aenean solli
                                            </NavLink>
                                        </div>
                                        <div className="arrow-link-wrapper">
                                            <EastIcon className="arrow-footer" />
                                            <NavLink
                                                className="title-link-footer"
                                                to="/"
                                            >
                                                Duis sed odio
                                            </NavLink>
                                        </div>
                                        <div className="arrow-link-wrapper">
                                            <EastIcon className="arrow-footer" />
                                            <NavLink
                                                className="title-link-footer"
                                                to="/"
                                            >
                                                Morbi accums
                                            </NavLink>
                                        </div>
                                        <div className="arrow-link-wrapper">
                                            <EastIcon className="arrow-footer" />
                                            <NavLink
                                                className="title-link-footer"
                                                to="/"
                                            >
                                                Nam nec tellus
                                            </NavLink>
                                        </div>
                                        <div className="arrow-link-wrapper">
                                            <EastIcon className="arrow-footer" />
                                            <NavLink
                                                className="title-link-footer"
                                                to="/"
                                            >
                                                Class aptent
                                            </NavLink>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid xs={12} md={6} lg={6} spacing={1}>
                                    <div className="middle-section-right">
                                        <div className="arrow-link-wrapper">
                                            <EastIcon className="arrow-footer" />
                                            <NavLink
                                                className="title-link-footer"
                                                to="/"
                                            >
                                                Duis sed odio
                                            </NavLink>
                                        </div>
                                        <div className="arrow-link-wrapper">
                                            <EastIcon className="arrow-footer" />
                                            <NavLink
                                                className="title-link-footer"
                                                to="/"
                                            >
                                                Morbi accum
                                            </NavLink>
                                        </div>
                                        <div className="arrow-link-wrapper">
                                            <EastIcon className="arrow-footer" />
                                            <NavLink
                                                className="title-link-footer"
                                                to="/"
                                            >
                                                Nam nec
                                            </NavLink>
                                        </div>
                                        <div className="arrow-link-wrapper">
                                            <EastIcon className="arrow-footer" />
                                            <NavLink
                                                className="title-link-footer"
                                                to="/"
                                            >
                                                Class aptent
                                            </NavLink>
                                        </div>
                                    </div>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid xs={12} md={4} lg={4}>
                            <div className="wrapper-logo-Kalush">
                                <img
                                    src="./image/logo_Kalush.png"
                                    className="logoKalushFooter"
                                    alt=""
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <Divider style={{ color: 'white' }} />
                <SosialLink />
            </footer>
        </>
    )
}

export default Footer
