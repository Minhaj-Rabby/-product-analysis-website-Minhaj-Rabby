import './App.css';
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews/Reviews";
import Error from "./components/Error/Error";
import ReviewContextProvider from "./Global/ReviewContext";
import DataContextProvider from "./Global/DataContext";

function App() {
  return (
	  <div className="App">
		  <Header></Header>
		  <Routes>
			  <Route
				  path="/"
				  element={
					  <ReviewContextProvider>
						  <Home />
					  </ReviewContextProvider>
				  }
			  ></Route>
			  <Route
				  path="/reviews"
				  element={
					  <ReviewContextProvider>
						  <Reviews />
					  </ReviewContextProvider>
				  }
			  ></Route>
			  <Route
				  path="/dashboard"
				  element={
					  <DataContextProvider>
						  <Dashboard />
					  </DataContextProvider>
				  }
			  ></Route>
			  <Route path="/blogs" element={<Blogs />}></Route>
			  <Route path="*" element={<Error />}></Route>
		  </Routes>
 
    </div>
  );
}

export default App;
