import React, { Component, Fragment } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {Link}  from "@material-ui/core"
import Button from '@material-ui/core/Button'
// Import { Link } here //

const Navigation = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    FakeCars.com
                </Typography>
                <ul className="nav-list">
                    <Link>
                      <li className="nav-list-item">
                         Home
                      </li>
                    </Link>
                    <li className="nav-list-item">
                        {/* Add Link here */}
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation