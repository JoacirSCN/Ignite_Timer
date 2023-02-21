// Components

// Styles
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

// React Router Dom
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
