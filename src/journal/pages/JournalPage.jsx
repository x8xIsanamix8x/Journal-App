import { useDispatch } from "react-redux"
import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"


import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { startNewNote } from "../../store/journal/thunks"

export const JournalPage = () => {

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere illum excepturi nisi incidunt nesciunt consequatur aspernatur dignissimos reiciendis voluptate alias deserunt, architecto ullam nam ipsum animi ab esse exercitationem.</Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        onClick={ onClickNewNote }
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'green',
          ':hover': { backgroundColor: 'gray', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />

      </IconButton>


    </JournalLayout>
  )
}
