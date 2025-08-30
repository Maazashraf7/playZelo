import React from "react";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../pages/Home/Home";
import LoginForm from "../../pages/Login/Login";
import SignupForm from "../../pages/Signup/Signup";
import WithdrawalPage from "../../pages/Withdraw/Withdraw";
import GameList from "../../pages/GameLists/GamesList";
import Deposit from "../../pages/Deposit/Deposit";
// import LotteryPage from "../../games/Lottery/Pages/LotteryPage";
import CurtainIntro from "../../games/Lottery/Pages/curtainPage";
import LandingPage from "../../games/ludo/LudoPage";
import SlotMachine from "../../games/Jackpot";
import MinesGame from "../../games/Mines/Pages/MinesGames";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home/>,
	},
	{
		path: "/login",
		element: <LoginForm/>,
	},
	{
		path: "/signup",
		element: <SignupForm/>,
	},
	{
		path: "/withdraw",
		element: <WithdrawalPage/>,
	},
	{
		path: "/gamelist",
		element: <GameList/>
	},
	{ 
		path : "/deposit",
		element :<Deposit/>
		 
	},
	{ 
		path : "/lottery",
		element :< CurtainIntro/>
		 
	},
	{ 
		path : "/ludo",
		element :< LandingPage/>
		 
	},
	{
		path : "/teenpatti",
		element :< LandingPage/>
	},
	{
		path : "/jackpot",
		element: <SlotMachine/>
	},
	{
		path : "/mines",
		element :<MinesGame/>
	}
	
]);					
export default function MainRoutes() {
	return  <RouterProvider router={router} />;
}