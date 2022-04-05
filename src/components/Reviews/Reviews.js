import ReviewCard from "../ReviewCard/ReviewCard";
import styles from "./Reviews.module.css";
import useReviews from "../../Hooks/useReviews"

const Reviews = () => {
	const [reviews, setReviews] = useReviews();
	return (
		<div className={`${styles.reviewBg} py-14 shadow-lg`}>
			<div
				className="container mx-auto px-4 md:px-1"
				style={{ color: "#221E20" }}
			>
				<h3 className="text-center my-8 text-3xl">
					What Our Clients Say
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
					{reviews.map((review) => (
						<ReviewCard key={review.id} review={review} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Reviews;