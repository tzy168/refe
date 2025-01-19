import { createHashRouter } from 'react-router-dom'
import App from '../App.js'
import Myelement from '../pages/myElement/index.js'
import Hc from '../pages/hc/index.js'
import Resume from '../pages/Resume/index.js'
import Note from '../pages/note/index.js'

const head = ''
const router = createHashRouter([
  {
    path: `${head}/`,
    Component: App,
  },
  {
    path: `${head}/myelement`,
    Component: Myelement,
  },
  {
    path: `${head}/resume`,
    Component: Resume,
  },
  {
    path: `${head}/hc`,
    Component: Hc,
  },
  {
    path: `${head}/note`,
    Component: Note,
  }
])


export { head }
export default router