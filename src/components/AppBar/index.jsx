import { Badge, Box, Button, TextField, Typography } from '@mui/material'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import TrelloLogo from '~/assets/mdi--trello.svg'
import WorkSpace from './Menus/WorkSpace'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import User from './Menus/User'

export default function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2
        }}
      >
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.5
          }}
        >
          <img src={TrelloLogo} alt="" style={{ color: 'primary.main' }} />
          <Typography
            variant="span"
            sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex', gap: 1 } }}>
          <WorkSpace />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="contained">Create</Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2
        }}
      >
        <TextField placeholder="search" type="search" size="small" />
        <ModeSelect />
        <Tooltip title="notifications">
          <Badge color="secondary" variant="dot">
            <NotificationsOutlinedIcon
              sx={{ cursor: 'pointer', color: 'primary.main' }}
            />
          </Badge>
        </Tooltip>
        <Tooltip title="notifications">
          <Badge color="secondary" variant="dot" invisible={true}>
            <HelpOutlineOutlinedIcon
              sx={{ cursor: 'pointer', color: 'primary.main' }}
            />
          </Badge>
        </Tooltip>
        <User />
      </Box>
    </Box>
  )
}
