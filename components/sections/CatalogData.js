import Link from 'next/link';
import React from 'react';
import { useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import { addDays } from 'date-fns';




import Accordion from '../elements/Data_Catalog_Type_Accordion.js';

const Serviceone = ({ alternate, keyword }) => {

	const [startDate, set_startDate]= useState();
	const [endDate, set_endDate]= useState();

	const Data_keyword= keyword

	const data = [
		{
			title: "Potential Fishing Zones (PFZ)",
			keyword: "PFZ"
		},
		{
			title: "Sea Surface Temperature",
			keyword: "SFT"
		},
		{
			title: "Ocean State",
			keyword: "ocean"
		},
		{
			title: "Bulletins",
			keyword: "bulletin"
		},
	];

	const handleSubmit= (event) => {
		event.preventDefault();
		//Submit filters



		console.log("Submit filters")


	}

	// const clearFilters= (event) => {
	// 	event.preventDefault();
	//
	// 	//Clear filters
	//
	// 	console.log("Meant to clear filters")
	//
	// }

		return (
		<>

			<section className="project-details">
				{/*<div className="container">*/}

					<div className="project-details__content">
						<div className="row">
							<div className="col-xl-4 col-lg-4">
								<div className="project-details__content">
									<div className="project-details__details-box">
										<div className="project-details__bg-shape">
											<Accordion keyword={ Data_keyword}/>
										</div>


									</div>
								</div>
							</div>

							<div className="col-xl-8 col-lg-8">
								<div className="project-details__content-left">
									<h3 className="">Data Catalog</h3>
									<div className= "row">
										<div className="form-column ">
											<div className="inner-column">
												{/* Contact Form */}
												<div className="contact-form wow fadeInLeft">

													{/*Contact Form*/}
													<form method="post" onSubmit= {handleSubmit} id="catalog-filter-form">



														<div className="row col-9">

															<div className="form-group col-lg-3 col-md-3 col-sm-6">
																<DatePicker placeholderText={'dd/mm/yyyy'} locale="en-GB" selected={startDate} onChange={(date) => set_startDate(date)} isClearable/>
															</div>

															<div className="form-group col-lg-3 col-md-3 col-sm-6">
																<DatePicker placeholderText={'dd/mm/yyyy'} locale="en-GB" selected={endDate} onChange={(date) => set_endDate(date)} isClearable maxDate={addDays(new Date(), 0)}/>
															</div>



															<div className="form-group col-lg-2 mr-5">
																<button className="theme-btn btn-style-two" type="submit" name="filter-form"><span className="btn-title">Filter </span></button>
															</div>

															{/*<div className="form-group col-lg-2">*/}
															{/*	<button className="theme-btn btn-style-three"  onClick={clearFilters} type="clear" name="clear-form"><span className="btn-title">Clear </span></button>*/}
															{/*</div>*/}
														</div>


													</form>
												</div>
												{/*End Contact Form */}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*<div className="row">*/}
					{/*	<div className="col-xl-12">*/}
					{/*		<div className="project-details__pagination-box">*/}
					{/*			<ul className="project-details__pagination list-unstyled clearfix">*/}
					{/*				<li className="next">*/}
					{/*					<div className="icon"> <Link href="#" aria-label="Previous"><i className="lnr lnr-icon-arrow-left"></i></Link> </div>*/}
					{/*					<div className="content">Previous</div>*/}
					{/*				</li>*/}
					{/*				<li className="count"><Link href="#"></Link></li>*/}
					{/*				<li className="count"><Link href="#"></Link></li>*/}
					{/*				<li className="count"><Link href="#"></Link></li>*/}
					{/*				<li className="count"><Link href="#"></Link></li>*/}
					{/*				<li className="previous">*/}
					{/*					<div className="content">Next</div>*/}
					{/*					<div className="icon"> <Link href="#" aria-label="Previous"><i className="lnr lnr-icon-arrow-right"></i></Link> </div>*/}
					{/*				</li>*/}
					{/*			</ul>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*</div>*/}


				{/*</div>*/}
			</section>

		</>
	);
};

export default Serviceone;