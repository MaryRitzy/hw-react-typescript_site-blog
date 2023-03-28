import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'

import Home from 'pages/Home/Home'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import CartPage from 'pages/Cart/CartPage'
import PagesAll from 'components/PagesAll/PagesAll'

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
                <Route path="post" element={<PagesAll />} />
                <Route
                    path="news"
                    element={
                        <Category
                            id={0}
                            title={''}
                            description={''}
                            сategory={''}
                            capacity={''}
                            price={0}
                            image={''}
                        />
                    }
                />
                <Route
                    path="team"
                    element={
                        <Category
                            id={0}
                            title={''}
                            description={''}
                            сategory={''}
                            capacity={''}
                            price={0}
                            image={''}
                        />
                    }
                />
                <Route
                    path="album"
                    element={
                        <Category
                            id={0}
                            title={''}
                            description={''}
                            сategory={''}
                            capacity={''}
                            price={0}
                            image={''}
                        />
                    }
                />
            </Routes>

            <Footer />
        </StyledEngineProvider>
    )
}

export default App
