import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere illum excepturi nisi incidunt nesciunt consequatur aspernatur dignissimos reiciendis voluptate alias deserunt, architecto ullam nam ipsum animi ab esse exercitationem.</Typography> */}
      <NothingSelectedView />
    </JournalLayout>
  )
}
