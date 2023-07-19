import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import "./Header.css"

// const pages = ['Home', 'About me', 'Showcase'];
const pages = [{page:'Home',idValue:"#"}, {page:'About me',idValue:"#serviceValue"}, {page:'Showcase',idValue:"#"}];
const pagesMenu = [{page:'Home',idValue:"#"}, {page:'About me',idValue:"#serviceValue"},
 {page:'Showcase',idValue:"#"},{page:'Download Resume',idValue:"#"},{page:'Get in Touch',idValue:"#"}];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl" sx={{backgroundColor:"white"}}>
        <Toolbar disableGutters >
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "'Sacramento', cursive",
              fontWeight: 700,
              fontSize:30,  
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            chanduthani
          </Typography>
          

          <Box sx={{ flexGrow: 1,  display: { xs: 'flex', md: 'none', } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
             
            >
              <MenuIcon sx={{justifyContent:"flex-end"}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pagesMenu.map((arr) => (
                <MenuItem key={arr} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" to={arr.idValue} sx={{ textTransform: 'none',fontFamily:'Inter' }}>{arr.page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 6,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: "'Sacramento', cursive",
              fontWeight: 700,
              fontSize:25,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            chanduthani
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent: 'flex-end',mr:20}}>
            {pages.map((arr) => (
              <Button
                key={arr}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block',fontFamily:'Inter',
                textTransform: 'none', fontSize:"15px"
                
             }}
             href={arr.idValue}
              >
                {arr.page}
              </Button>
            ))}
          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
