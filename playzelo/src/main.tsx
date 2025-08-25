import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

import HomePage from '@/pages/HomePage.tsx'
import GameListPage from '@/pages/GameListPage.tsx'
import LoginPage from '@/pages/LoginPage.tsx'
import SignupPage from '@/pages/SignupPage.tsx'
import CurtainPage from '@/pages/CurtainPage.tsx'
import DepositPage from '@/pages/DepositPage.tsx'
import FinalPage from '@/pages/FinalPage.tsx'
import Index2Page from '@/pages/Index2Page.tsx'
import JaqpotPage from '@/pages/JaqpotPage.tsx'
import LobbyPage from '@/pages/LobbyPage.tsx'
import LotterPage from '@/pages/LotterPage.tsx'
import LotteryPage from '@/pages/LotteryPage.tsx'
import LudoPage from '@/pages/LudoPage.tsx'
import MinesPage from '@/pages/MinesPage.tsx'
import PartnersPage from '@/pages/PartnersPage.tsx'
import PricingPlanPage from '@/pages/PricingPlanPage.tsx'
import ShopSinglePage from '@/pages/ShopSinglePage.tsx'
import ShopPage from '@/pages/ShopPage.tsx'
import TeenpattiWebPage from '@/pages/TeenpattiWebPage.tsx'
import NotFoundPage from '@/pages/NotFoundPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'game-list', element: <GameListPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'curtain', element: <CurtainPage /> },
      { path: 'deposit', element: <DepositPage /> },
      { path: 'final', element: <FinalPage /> },
      { path: 'index2', element: <Index2Page /> },
      { path: 'jaqpot', element: <JaqpotPage /> },
      { path: 'lobby', element: <LobbyPage /> },
      { path: 'lotter', element: <LotterPage /> },
      { path: 'lottery', element: <LotteryPage /> },
      { path: 'ludo', element: <LudoPage /> },
      { path: 'mines', element: <MinesPage /> },
      { path: 'partners', element: <PartnersPage /> },
      { path: 'pricing-plan', element: <PricingPlanPage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'shop-single', element: <ShopSinglePage /> },
      { path: 'teenpatti', element: <TeenpattiWebPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
