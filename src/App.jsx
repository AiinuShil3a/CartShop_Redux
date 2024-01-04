import Navbar from './component/navbar'
import Page from './component/page'
import { Provider } from 'react-redux'
import {store} from './redux/store'
import './style.css'

function App() {
  return (
    <>
    <Provider store={store}>
      <Navbar />
      <Page />
    </Provider>
    </>
  )
}

export default App
