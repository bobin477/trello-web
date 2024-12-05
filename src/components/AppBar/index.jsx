import { Box } from '@mui/material'
import ModeSelect from '../ModeSelect'

export default function AppBar() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <ModeSelect />
    </Box>
  )
}
