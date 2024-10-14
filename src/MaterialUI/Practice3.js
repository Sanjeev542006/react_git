import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
// import * from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: 'rotate(0deg)',
        },
      },
      {
        props: ({ expand }) => !!expand,
        style: {
          transform: 'rotate(180deg)',
        },
      },
    ],
  }));
  
function Practice3() {
    
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);  };
  

  return (<>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
              keepMounted
              transformOrigin={{
                  vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Card sx={{ maxWidth: 1920,maxHeight: 1080}}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          R
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title="Che Guevera"
                    //   subheader="September 14, 2016"
                    />
                    <CardMedia
                      component="img"
                      height="fit"
                      width="fit"
                      image ="https://wallpapercave.com/wp/wp2051976.jpg"
                    //   image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMVFRUXGBUXFxgXGBcXFRcXFxcXFxoYFxgdHSggGBolHRcXITEhJSkrLi4uGh8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALgBEgMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xAA/EAABAwIEBAQDBQcDAwUAAAABAAIRAwQFEiExBkFRYRMicYEHMpEUocHR8CNCUmJyseEVM/GSorIWFySCwv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDNabhlSZRmBCEEjg9EOqMBMDM2TtpK9LYGSKTRmJAAiTOnqvNWEgZ2ztIlbpwu1gpN84201QXLN3QLu6jmtZ1+9dNu3r96B8Xd0Rzj1THwW/orophA5qF0fMfqo+9e/KQXGPVLOATC7KCGrHVGpOXKo1XaW6CXsnkc4UkwqKtFJMKBWUVy4uFBFX51TuwOiZX+6eWGyCQC4UAgg6uLoXcqAqK4JXKilqBIrhCMUXMEBSk3FKFwSbnIEyknlKlyRe5A1uToVBV/mU5cbbKFq/MgcUtkSolWbIlRA3hBG1QQYtlZPlJ16xulXVPKGlo9Y8068/wSDoJkc+XRLPEwRyGv5oHuG0xIkj6j+y1LhikMoWW4dSOYGJGi1LhlvlGqC224EJyCm1vsnDUCjV1EXUAeVH3ifOTG7aUETU3XaRR8m6WtqXZA9tFItTag1O2jRBxccuwiuQRF+dUWni9NjxSAfUqRJZTElo6vJIawep15So/iDHLeg8Nqvhx2aNXHvCzziDH3Eup0XZW1HvfVJdke8/K0O0nIGgDQyYQbLZYlSq6NdqNC06OB6EIXmL0KRAqVGtJ68u56DuV54o4q6h5vEmdhykbH/KNf8VOrNIdLpjM5xDWkjuRr9OvUoPSNKuwiQ5sdZH6lOAF5swvHSwDWk70aXbRyLBPqpm++IVwXS2s8O/l8p9MrwNP6Sg3lFLlReFfibb3ThSqsdRrTBBgsnqDMgHuFe3MQIkSivZCVDYRagQNyUm5yWLUk8ICEpJ5ShSVQoGtwdCoOofMpq4dood2rkDtmyK9qUp7ItQoEsiCLnXUGFgJ3Zu8ybsCVAhBMWzvPHJaTw5UbkCy+xqwQVesExMADRBf6FUQl21AoO0xAEaDVORf9kEuKgQ8QKMF/2Rvtw6IJIvCa3NUR19dkj9t7JtWuEDy4aJBAGo5IrBqm1O4mPVKGpqgk7cpzKjqN0E4N2OiBclRHE+NstLd9Z0GIAHVzjA9pP0BTz7YDyWffGXFG/Y2041fWYO0NBef/ABA90GaVr2pUqPuatRxc8mP4nDcBoA0aFF4lfh5Mt168/fUpJtfPq50DaSYEdE/scBdXI8MHLyM7+gEIK+57jpJgIniHqtSw/wCG1WA4Obru1zZn79FP2Xw2oMAdUY156SYnugxcUg5mdsgj5gOXcJXMXtjxGu/q8rvQTutfxjhCgGHw6bGn+UQY6dwqQ7hFjmTBa7UEcszSR7bIK3bVX/7ZeWn906EAcw6RqPqtq+G3xAaW07O6zB7crG1IJaZ+UOPLeAdtljOIYVVo92jYjcf4TWzxSqz5HFpGxBg7zuPqg9glqTexZ78LuPjeNNGvUaazYyzAc4Rr2cR6THXdaA6qgTcwpKo1B9ymz7tB1xSD3IPuAknVwgRuNlEfvKUr1RCjJ8yB/TOiLUXGVER70HIQRMyCDDmhLNOyTbsNkqyED62GvZXDA6QgKq4RTDnAFajgWHMyjRApbUhCdBoO6laNiyNksLJnRBECkOqUZTClhZs6IxtGdEEPUSFUqcfaM6JheUAEEc2p0SrHorqaO0IHTHhLcklb0gU+ZbBAyDSsp+Nl2f8A49EbEveTzkQ0e3mK2b7I1Yf8cGsF7Ra3cUpPoXmP7FBVuGMH+01gH/7bIJHU7wttwWwDWjIwARvHToqLwg6jRYw1nNZIDtSASO/65K2/+vrNpDQ4xtPL2QWdviN/dBRyH1OYYPqU3wjHKVw3Mz70vdXOVjiNxt7IG17hLXDdxPWVTatk+nUqA6tkHWOYE/eExxW/xGs79lOXbRwARaPC2JOaXVLgajaZ9pjRBzFrFrmkiP115rLMVtMjzGiv9xRurWRV87PWY7t5x2Vf4gtM7Q8cv0EFbwq/fQrU61Mw+m4Pb0kcj2Oy9OcM8RU763bXpGAdHNPzMcN2n8+YXmBrRs7Tl6d/8LVPgPcxWuaBPzMZUAg/uktOuw3b6+yDXHJs9qfvohIuohAycEnCeOpBJmmEDGsNExaPMpO5Zoo6mBmQLhEenAak3tQIIJTKuIMJaUqHppKM0lBZ+HRLx1Wv4M05Qsf4TMvC2XCWnKEExSSoRKaOEBgguhAoE3hMLmlJT+ooy75oIyroYXaRRXmTqUZjHQ5waXZWlxA305DugkbVSTFVMA4ota4AD8roByv8pE/dzVrphAeF59+MVKp/qrpGhp0izplgj/yzL0GAvP8A8THVKmLPZzmkxv8ASWiI9yT7oJLgjhanVP2i8MtA8rDIEAaElSvENzg1HZlAOH7u7x7DUe6Jj+GXTmU6NvDAYl5J8oA3gDUqSpcGtqMZTqNblazLlp56bakua4mqM58U5gDrpOu6BHh+6p5mPowA4wWgdtNOSk+K8Rfl8NmhMT2nmpHB8GpUqgboA1se4AH3DRMuIqYdXimAS0QRyI90ER49Qtptpt9S6WsBG+ZwBP3KL4p4vurOo2j+zq5o1pOc4QQI1Lcp1LhAMjLrEhXjCrAOZmGjgTPtyI6pa+4dp1h5g31IB+780FIwfGGXlM5gJ1EcwesKKxnDSKDxGo/srzS4dp0XDJlABnQb/RNeIW0w1x5QgwR5E69lePg2Xf6pTynTwq2bu2Bp/wBWU+yo980Co8A6Bxj0lXL4M1S3FaO+VzarJgkSWF0E8vk+5B6IcxJlgTh8JEwgRe0JJ7QnDgEjUAQMLzZRdH5lK32yjLb5igd8kmQnCI5AiglVxBmv/t9V/iCRueBarROi2rwQm17QbCDJOGsKcypBHNaxhtOGhQlpajxNlabekAEC9MI8LjQjAIDAIFdAQhAjUUTeqXqjRRF6EEWUe4q1hSeKDmNe5pALwSJg66bHXfVJuKVpIMSxbCL20JNai4U/42+enH9Q25fNCdcOcc3Nu4ZKriyPkcczPofwW72eogj8lCY/8NcPu5d4ZoVD+/Rhs+rILD9J7oI7BPilRfAuGGmf4m6t9xuAoTittCri1pcUnB7KjcznN2mm05Q7odtD0UTjvwpv6Eut3NumDkIZVA/oJh3s72TL4eiuy7zPa5jaYe0te1wzPeDTDC06nV0nTQN5aINftWh0HSYHsFL29AN0+qzLH+Om299Wpsax1NmQaaebI0vA6EOJH1UoPiTbOpw1xFQxodIHPzRBQR93SrPvqTqVy5jTmzsgEEtka6aSRuofjDDntvaTjc1mZi0nLOQRs3lJME891MYXSbcVjWqVGUsr3ASYLmiC3SdpEykfiRYuew1qNRtTIC50GYjU+uyC4cONfnqugtpvy5AdzAguPQnRS15VgLL8C42c0MbVzbA928tJ3iCrxa4rSuaeam4O5HqPUIE7qvuqPxXe6ZZOu6uGIODWknosu4gvZe6ToCgp/wBnDquU8zsOZWx8B4T4VemBUPlyODWiGEGQ4RzIg6nqscY/9pIkEHSORGsyti4QvyfshA1Jbl6lkAEk9C5zde6DVXkJIwlHEIshAQwiOhLZgil4QRuIxlURZ6uKmcTeMqisNIn3QP47JJ3opD2Sbh2QMp7IJ5l7IIHpjom19GVMDiLk2u8RcRGiAtkPOrJRiFUbK4MypuliLuiCaCMFEDE3dEeniJ6IJcBBM23hXHXvZAvVUNfJ1Vv+yjriuXIGT0emUVzV1ghBMWSlaagrW4hPmYiOiCSlZZ8Wr9tMNLTlMOlwBa8yQ2A4GevpHdaDWxMQdOSxr4qXjHhoBOaXZgdpzESNdNRr6BAwr8GMqNNS2e4GM2VxzgkiYDtwT3lUqk4kTrG06rRfh9d52NaHDN5mlp1gBhgjlz27BWPAeHadq0ZRJJlxOsenRBW+DeFbyp+2d+wpaearpnb/AEE/eYVnxHBcwLadw0yNoDpHPYAwpHFcOr3DCBVywNI3/JOcMwzI1viQXCPMGhplBUGcJPJl5pu0IkBwJGv36qs8E3j6F4aRnUlpGu2vXotbxOsKTC4iem2vZUSwxuhUuXkMbm3a6BJmCduchA54qxFwbDZ0P9ys0xaq6CT11HfqrRxmXkuIkQdCNjInfry+qo+IXJdoeX63QOMEaHVBImd9JidFuXw6wsuLaxkimC0OOxcJAa0bENkknrlHIxi/AtoK19QpuJyF0viZLBqQOk7T3K9P2tWmxjWMaGtaAGtaIAA5AIHLkQpN143qiG8Z1QLFESf2xnVcN0zqgZYqdFHYY8SnuJ3DSN1H2FRsoLAKgXPEHRINrtjcLvjt6hA48UdEEgK7eoQQVosKBokpQuKDXFAWnbwlwCgHI4cg40O6pVpd1XGlKByBRtw4LnjORMy6HIAXFcylHD0Zr0CJYhkKXzhdDwgbwQuhxTnOFwkIES47LNvibWphnhZRmlxkjaYJjvtv+K0x0EQsx+I2EhjPK1ztdXZiS3nAHpJM9OSCvfD7E6dI1Wv0OUuadjoDMfrmrDwlxi2HMrP0zOM6DTeegECI3lZ/XsXUmZpOYkxDT8kbknQSdI/NRQqkGUHovA+IaVR/htOp5Ew6J3A6frmq5jnGgpvLQ4wHQWu0MddNQNtFk1hjNWm8OaTm232GmnpoksVv3VXl7tz9EFvxvjupVpmk7Qxo4e2nr1VTwq8LH5gS07iPuUcSutnkgtmK4+ahJ3GUT6joqrXdLiQnQadBOrtE4rYSQ0FA+4DpH7XSeCRle0CAdSdIPbqOYleh23AACzb4YcMU/Bp3L9XEvOWBlEEtafUCf+orQ3AIDvuQkXVwjQEXKEBTXRTcI3hjquGkOqBlcvlI0DCkHUQk3Ugg4LkLn2gLhpBE8MIFvtAQSYZ3CCB2aYXWsXSjNQAMRxTCACUAQcbTCN4aOAjwgS8ILopBKgLoCBHwQuiilgi1arWjM4hoG5OgQJ+CF0UAoi64rtmOy/tHn+Vv5kKOr8ct2p0HT1qOa0f9uaUFo8EIGiqFe/EOtTOlKk8TrBe0j6zKdW/HD3sNTwso5CWknv2HcwguZoJOvZscMrwCO+yzHFuMbuoIp5mjrT1+pAURb06tcy+tWMauB1kDlmkRO3aUE98WcRpUaDbWkG5namIhjN4Hc/2WPtouJAAJJ1ACsHEdUvquJ+7aNgAOimeBbFj2jOPPTLgOozTv7FBR2S0wR7FHeQ4TELXLjgqlUdmLR0j/AClLX4d0GAiHEHeTOnSYQYvKe4bZveZAkc/8LXD8N7aZaw/UgJc8K06IMD6aIKPY4YA0Etko9/ShpHRWO9phogCFXbqq0ktBneY/NBAYW+68aKFapSAgucHODGCNyJg9hzW38NXnj0iQ4uyuyZnfM6GjU99Vjteu4AMbDW9B16k8z3Vk4a4u+ytFNoB80kdevp6oNRNEoppuTu3uG1GNqMMtcAQexRoQMC1y5lKfZEUsQMXByTc1yfvYiZUDAtciEOUgWohagYw5BPci4gcSjBER2oFAlWpFpSrCgUCOEQI7UHQjAIBVDHuK3NqilRLW/wAxaXEkfwjaPVBZsRvqdCmajzoNhzcegWf3eL1Lh2Z58vJo+Uf57lMOJcZqViATpy/PRI274aewKBobg5yUq0wHO7aJoNXJ7d6UwOuqCBuQfVMbis8fKSP7H1HMKXbpoUxvSCYAj0QO8OxakBNaic3PJHm9Qfl9lH8Q8Tuf5LZngUu0Z3d3H8P+Uo6xOXf1TRmFZnanTmgPg1J5aKlU55MNBgxHNx36QPdS+Bu8O6EDy1BB7OCjBeCi/K7/AGzAP8sbOHopSq3KQ4ciHA+n5hBq+GN8o5+ykpI2ULhl7NNroGoCXr3jWiXOyjmTEIJim8ZSf17qrY7iLGgl7oH6+qjcd42ZTYRTgDUeI/b/AOrN3H9Qssx7iZ9ckMmDu4/O70/hHYIJrHMffWkUhlYef7xH/wCf7qKtqwaCCoOix7fMCQe34qwYLUZV+YQ4akfiO3ZB2lQLtYKksOwgAlxGp+5SdvGwH/CXdXyDO5zWNG5KCatsZq2VvSJyuo+IGO08zfEkg77ZhEfzKcbxbRa7JWBpk7O+ZhB2II1H0WZXfGbag8Gm1xGZpFRxAALXSIbt216qatqfi02ms4BsyDIkjoOcT0CDT6Fdr2hzHBzTsQZCOVRafE1KkA2m0mP4CZ0/qaAfdT+HcT0Ko0Ja7mDofogmHBJOR8wOoKTcEBCiEozkmUBpQSaCBxKO1Jo7ECoSrUk1LMCA7QlGhcaFC49jGSaVM+f95w/d7DugUxfFgMzGHUA5j0nkO6zLGS7xKbm7ZwDB5EqXxquWUoB1IJPVU3B3l9RpDiCHQ4dQJOv0QSFUF1Y9AnVF5h8iNgPvKi61/lqGBsVMl+amD11KBtZsk6J5dtzFDDWc+koOEuQR15SgSoIyXhWfFm+VVmmCDsglyPKG/VHNENEc+aFmQRKVqhBXsYopTBLp2lJ0kQch3gdD0b35J3iYbl82/IDc/kO6hqzS4ZTo3k0aN9+bj3M+yC40+NqVvQbSkOe2R5fNoNttJjqVWMS4wr1Scoj+Z/mI9G/K370xbhxPytT2jhTRq7Xsgg3sq1XZnFzj1P4dAntphBJ10hTMsb8oXWlx5Qga/wClADWSk34YQZYcpGxGhUkAdk7trVx9OqCJbjlzS0exryBuZB9T1UdUbc3btZIHswe+362Vtq29M7jN67fREfUOw0HZAywnD2W4Mw95jloPSd/dPXOLzqSu07fmU5Y0BAWlbgJXMBoWtd6jY9QRqiOaTonVFraervM4bN5D+o/ggf2b6tCn4rrk0RuGvOdkd2GTHpClMK41t6hDHvZm2zNDg0n+k6t9iVl2M377quWZvKDqeRP5BOKNiGA6wdMp37yEG2Eg6jUckk4qjcNY86m3Kcz2ydP4fQnQbq5UrgPAc0gzruD/AGKBWV1JZ0EDkFKtKCCBdqWauoII3HcU8JmVp85/7R19VU7cyTJ13JQQQV7iS50ceSr3CMl1R521P3H80EECVB2eufVWosim0frqgggcWohpSIOqCCA12yWqFdbaoIIC5SNgjBztz/z2/XdBBBC4rRe5smSZ17xy7LuHszB0jJGUNbrJhoBPqSJ9SdggggWdWe3SEmXvPIoIIHVvT11ClKdDTaEEEC9Ok1vqlHv0QQQN3kLgZqgggWbA5roKCCDpuGt0CisYvS1hj5joPUriCBPBsOytiRmPzHv+KlX0GgRAPVx1IjoDp7oIIGdxeAnIw+UblOMHxU0K1OT5XO8w5ZTpJ9JB9kEEGkZkEEEH/9k="
                      alt="Paella dish"
                    />
                    <CardContent>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      """Che Guevara (born June 14, 1928, Rosario, Argentina—died October 9, 1967, La Higuera, Bolivia) 
                      was a theoretician and tactician of guerrilla warfare, a prominent communist figure in the Cuban 
                      Revolution (1956–59), and a guerrilla leader in South America. After his execution by the Bolivian
                       army, he was regarded as a martyred hero by generations of leftists worldwide, and his image became
                       an icon of leftist radicalism and anti-imperialism."""
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                        {/* <Typography sx={{ marginBottom: 2 }}>
                          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                          aside for 10 minutes.
                        </Typography> */}
                        <Typography sx={{ marginBottom: 2 }}>
                        He left Guatemala for Mexico, where he met the Cuban brothers Fidel and Raúl Castro, 
                        political exiles who were preparing an attempt to overthrow the dictatorship of Fulgencio
                        Batista in Cuba. Guevara joined Fidel Castro’s 26th of July Movement, which landed a force
                        of 81 men (including Guevara) in the Cuban province of Oriente on December 2, 1956.
                        Immediately detected by Batista’s army, they were almost wiped out. The few survivors,
                        including the wounded Guevara, reached the Sierra Maestra, where they became the nucleus
                        of a guerrilla army. The rebels slowly gained in strength, seizing weapons from Batista’s
                        forces and winning support and new recruits. Guevara had initially come along as the force’s
                        doctor, but he had also trained in weapons use, and he became one of Castro’s most-trusted
                        aides. Indeed, the complex Guevara, though trained as a healer, also, on occasion, acted as
                        the executioner (or ordered the execution) of suspected traitors and deserters. He recorded
                        the two years spent overthrowing Batista’s government in Pasajes de la guerra revolucionaria
                        (1963; Reminiscences of the Cuban Revolutionary War, 1968).
                        </Typography>
                        {/* <Typography sx={{ marginBottom: 2 }}>
                          Add rice and stir very gently to distribute. Top with artichokes and
                          peppers, and cook without stirring, until most of the liquid is absorbed,
                          15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                          mussels, tucking them down into the rice, and cook again without
                          stirring, until mussels have opened and rice is just tender, 5 to 7
                          minutes more. (Discard any mussels that don&apos;t open.)
                        </Typography>
                        <Typography>
                          Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography> */}
                      </CardContent>
                    </Collapse>
    </Card>
    <Stack direction="row" spacing={2}>
      <Button color="secondary"></Button>
      <Button variant="contained" color="success">
            Support 
      </Button>
      <Button variant="outlined" color="error">
        Donate
      </Button>
    </Stack>
    </>
  );
}
export default Practice3;
