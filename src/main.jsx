import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Homepage from '../Pages/Homepage'
import WhatIsSpirulina from '../Pages/WhatIsSpirulina'
import CyanoVeda from '../Pages/CyanoVeda'
import CyanoCrennis from '../Pages/CyanoCrennis'
import ProductDetail from '../Pages/ProductDetail'
import SpirulinaInHealth from '../Pages/SpirulinaInHealth.jsx'
import SpirulinaInAgriculture from '../Pages/SpirulinaInAgriculture.jsx'
import SpirulinaInAquaPoultry from '../Pages/SpirulinaInAquaPoultry.jsx'
import SpirulinaInAnimalFeed from '../Pages/SpirulinaInAnimalFeed.jsx'
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <Layout><Homepage /></Layout> },
  { path: '/what-is-spirulina', element: <Layout><WhatIsSpirulina /></Layout> },
  { path: '/cyano-veda', element: <Layout><CyanoVeda /></Layout> },
  { path: '/cyano-crennis', element: <Layout><CyanoCrennis /></Layout> },
  { path: '/ProductDetail', element: <Layout><ProductDetail /></Layout> },
  { path: '/spirulina-health', element: <Layout><SpirulinaInHealth /></Layout> },
  { path: '/spirulina-agriculture', element: <Layout><SpirulinaInAgriculture /></Layout> },
  { path: '/spirulina-aqua-poultry', element: <Layout><SpirulinaInAquaPoultry /></Layout> },
  { path: '/spirulina-animal-feed', element: <Layout><SpirulinaInAnimalFeed /></Layout> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


