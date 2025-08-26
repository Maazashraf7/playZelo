// src/routes.jsx
import { Routes, Route } from 'react-router-dom';
import { Banner, VipJackpotModal, Header, Counter, Collection, Jaqport, GameSection } from './components';

export default function AppRoutes() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						 <Header />
							  <Banner />
							  <Counter />
							  <Collection />
							  <Jaqport />
							  <GameSection />
							  <VipJackpotModal />
							  {/* <MoneyPopup /> */}
					</>
				}
			/>
			{/* <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/final" element={<Final />} />
      <Route path="/teenpatti" element={<Teenpatti />} /> */}
		</Routes>
	);
}