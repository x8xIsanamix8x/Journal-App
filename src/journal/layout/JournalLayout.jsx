import { Box, Toolbar } from "@mui/material";
import { Navbar, SideBar } from "../components"

const draweWidth = 280;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex'}} className='animate___animated animate__fadeIn animate__faster'>

        <Navbar draweWidth={ draweWidth } />

        <SideBar draweWidth={ draweWidth } />

        <Box
            component='main'
            sx={{ flexGrow: 1, p: 3}}
        >

        <Toolbar />

            {children}

        </Box>
    </Box>
    
  )
}
