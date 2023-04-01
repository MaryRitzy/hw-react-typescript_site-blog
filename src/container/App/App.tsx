import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'

import Home from 'pages/Home/Home'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import CartPage from 'pages/Cart/CartPage'
import PagesAll from 'components/PagesAll/PagesAll'
import './App.scss'
import Category from 'components/Category/Category'

type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="favorites" element={<CartPage />} />
                <Route path="/:category/:id" element={<PagesAll />} />
                <Route path="/:category" element={<Category />} />
            </Routes>
        </StyledEngineProvider>
    )
}

export default App
