import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"
import { borderRadius } from "@mui/system"

export const NothingSelectedView = () => {
  return (
    <Grid 
    className='animate___animated animate__fadeIn animate__faster'
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: '#dcdcdc', borderRadius: 3 }}
    >

        <Grid item xs={12}>
            <StarOutline sx={{ fontSize: 100, color: 'purple' }} />
        </Grid>

        <Grid item xs={12}>
            <Typography variant='h5'>Selecciona o crea una entrada</Typography>
        </Grid>

    </Grid>
  )
}
