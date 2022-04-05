import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const useReviews = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		axios("review.json").then((res) => setReviews(res.data));
	}, []);
	return [reviews, setReviews];
};

export default useReviews;
