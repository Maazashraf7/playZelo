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
import Blogs from "../../components/header/Blogs";
import GameDetailsPage from "../../components/header/GameDetailsPage";
import LotteryLayout from "../../games/Lottery/Pages/LotteryLayouts";
import LotteryPage from "../../games/Lottery/Pages/LotteryPage";
import Winners from "../../games/Lottery/LotteryComponents/Winner";
import LotteryResult from "../../games/Lottery/LotteryComponents/Result";
// import EntryLobby from "../../games/teenPatti/TeenPattiPage";
import LobbyPage from "../../games/teenPatti/pages/Lobby";
import GameRoom from "../../games/teenPatti/pages/GameBoard";
// import LotteryDemoWrapper from "../../games/Lottery/Pages/LotteryPage";
import SplashScreen from "../../games/teenPatti/pages/SplashScreen";
import EntryLobby from "../../games/teenPatti/TeenPattiPage";
import WaitingRoom from "../../games/teenPatti/pages/WaitingRoom";
import JoinRoom from "../../games/teenPatti/pages/JoinRoom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <LoginForm />,
	},
	{
		path: "/signup",
		element: <SignupForm />,
	},
	{
		path: "/withdraw",
		element: <WithdrawalPage />,
	},
	// {
	// 	path: "/gamelist",
	// 	element: <GameList/>
	// },
	{
		path: "/deposit",
		element: <Deposit />

	},
	{
		path: "/lottery",
		element: <LotteryLayout />, // parent layout (Navbar, Ticker, etc.)
		children: [
			{
				index: true, // ✅ default child route
				element: <CurtainIntro />, // shown at /lottery
			},
			{
				path: "play", // ✅ /lottery/play
				element: <LotteryPage />,
			},
			{
				path: "winners", // ✅ /lottery/winners
				element: <Winners />,
			},
			{
				path: "results", // ✅ /lottery/results
				element: <LotteryResult />,
			},
		],
	},
	{
		path: "/ludo",
		element: < LandingPage />

	},
	{
		path: "/teenpatti",
		 // parent layout (Navbar, Ticker, etc.)

		children: [
			{
				index: true, // ✅ default child route
				element: <SplashScreen />, // shown at /lottery
			},
			{
				path: "lobby", // ✅ default child route
				element: <LobbyPage />, // shown at /lottery
			},
			{
				path: "entry", // ✅ /lottery/play
				element: <EntryLobby />,
			},
			{
				path: "matching",
				element: <WaitingRoom />,
			},
			{
				path: "joinroom",
				element: <JoinRoom />,
			},
			{
				path: "play",
				element: <GameRoom />,
			}
		],
	},
	{
		path: "/jackpot",
		element: <SlotMachine />
	},
	{
		path: "/mines",
		element: <MinesGame />
	},
	{
		path: "/gamelist",
		element: <Blogs />
	},

// {
// 		path: "/splashscreen",
// 		element: < SplashScreen/>
// 	},









	{
		path: "/gamedetails",
		element: <GameDetailsPage />
	}

]);
export default function MainRoutes() {
	return <RouterProvider router={router} />;
}