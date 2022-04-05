import React, { useContext } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ReviewContext } from "../../Global/ReviewContext";
import ReviewCard from "../ReviewCard/ReviewCard";
import styles from "./Home.module.css";

const Home = () => {
	const { reviews } = useContext(ReviewContext);
	return (
		<div className={` py-10 shadow-lg`}>
			<div className={`${styles.bg} py-12 px-4 md:px-1`}>
				<div
					className="container  mx-auto gap-4 grid md:grid-flow-col grid-flow-row  grid-cols-1 md:grid-cols-2 items-center justify-center"
					style={{ minHeight: "85vh" }}
				>
					<div
						style={{ color: "#221E20" }}
						className="order-2 md:order-1"
					>
						<h1 className="text-4xl md:text-5xl font-bold text-white">
							Women's Bag Review{" "}
						</h1>
						<p className="text-base md:text-xl mt-4 mb-10">
							Check out our new and amazing collection for woman with varity of  choice and learn what our client say about those products.
						</p>
						<button
							className="py-2 px-6 rounded uppercase font-bold"
							style={{ background: "#221E20", color: "#C9E265" }}
						>
							Explor Now
						</button>
					</div>
					<div className="flex justify-center order-1 md:order-2">
						<img
							className="w-4/5"
							src="img/header.png"
							alt="header"
						/>
					</div>
				</div>
			</div>
			<div
				className="container mx-auto px-4 md:px-1"
				style={{ color: "#221E20" }}
			>
				<h3 className="text-center my-8 text-3xl">
					Customer Review(3)
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
					{reviews.slice(0, 3).map((review) => (
						<ReviewCard key={review.id} review={review} />
					))}
				</div>
				<div className="flex justify-end mt-5">
					<Link to={"/reviews"}>
						<button className="bg-orange-600 text-white py-1 px-4 rounded">
							See All
							<FontAwesomeIcon
								className="ml-1"
								icon={faArrowRight}
							/>
						</button>
					</Link>
				</div>
			</div>
			
		</div>
	);
};

export default Home;