import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography, } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light'>28 de agosto, 2023</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ padding: 2 }}>
              <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
              Save
            </Button>
        </Grid>

        <Grid container>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Enter the title"
            label="Titulo"
            sx={{ border: 'none', mb: 1 }}
          />

          <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="What happening today ?"
            label="Titulo"
            sx={{ border: 'none', mb: 1 }}
          />

        </Grid>

        <ImageGallery />

    </Grid>    
  )
}
