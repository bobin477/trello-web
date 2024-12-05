import { DarkMode, LightMode, SettingsBrightness } from '@mui/icons-material'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import {
  // Experimental_CssVarsProvider as CssVarsProvider,
  // experimental_extendTheme as extendTheme,
  useColorScheme
} from '@mui/material/styles'
function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-simple-select-label">Mode</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value={'light'}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <LightMode fontSize="small" />
            Light
          </Box>
        </MenuItem>
        <MenuItem value={'dark'}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <DarkMode fontSize="small" />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value={'system'}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <SettingsBrightness fontSize="small" />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect
