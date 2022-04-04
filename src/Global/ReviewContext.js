import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ReviewContext = createContext();

const ReviewContextProvider = (props) => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		axios("review.json").then((res) => setReviews(res.data));
	}, []);
	return (
		<ReviewContext.Provider value={{ reviews: reviews }}>
			{props.children}
		</ReviewContext.Provider>
	);
};

export default ReviewContextProvider;
