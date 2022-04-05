import React from "react";
import "tw-elements";
const Blogs = () => {
	return (
		<div className="mt-5 pt-10 container mx-auto">
			<div className="accordion accordion-flush " id="accordionExample">
				<div className="accordion-item bg-white border border-gray-200">
					<h2 className="accordion-header mb-0" id="headingOne">
						<button
							className="
									accordion-button
									relative
									flex
									items-center
									w-full
									py-4
									px-5
									text-gray-800 text-left
									bg-white
									border-0
									rounded-none
									transition
									focus:outline-none
									text-2xl
      						  "
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							What is Context api ?
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body py-4 px-5">
							<p className="md:text-lg">
								The React Context API is a way for a React app
								to effectively produce global variables that can
								be passed around.The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.
							</p>
							<br />
							<p className="md:text-lg">
								React.createContext() is all you need. It
								returns a consumer and a provider. Provider is a
								component that as it's names suggests provides
								the state to its children. It will hold the
								"store" and be the parent of all the components
								that might need that store. Consumer as it so
								happens is a component that consumes and uses
								the state.
							</p>
						</div>
					</div>
				</div>
				<div className="accordion-item bg-white border border-gray-200">
					<h2 className="accordion-header mb-0" id="headingTwo">
						<button
							className="
									accordion-button
									collapsed
									relative
									flex
									items-center
									w-full
									py-4
									px-5
									text-2xl text-gray-800 text-left
									bg-white
									border-0
									rounded-none
									transition
									focus:outline-none
								"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
						>
							What is sementic tag ?
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body py-4 px-5">
							<p className="md:text-lg">Semantic HTML refers to syntax that makes the HTML more comprehensible by better defining the different sections and layout of web pages.
								Semantic HTML elements are those that clearly
								describe their meaning in a human- and
								machine-readable way. Elements such as 'header',
								'footer' and 'article' are all considered
								semantic because they accurately describe the
								purpose of the element and the type of content
								that is inside them.
							</p>
							<br />
							<p className="md:text-lg">
							
								<span className="font-bold">
									Examples of semantic elements:
								</span>{" "}
								header', 'footer' and 'article' - Clearly
								defines its content.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
