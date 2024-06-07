import { useReducer } from 'react'
import './App.css'
import { LayoutContext } from './components/shop/layout/Layout'
import PageRoutes from './components/shop/PageRoutes'
import { layoutReducer, layoutState } from './components/shop/layout/layoutContext'

function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState)
  return (
    <LayoutContext.Provider value={{data, dispatch}}>
      <PageRoutes/>
    </LayoutContext.Provider>
  )
}

export default App