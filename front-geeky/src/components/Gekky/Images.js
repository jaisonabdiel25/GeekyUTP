import React from 'react';
import './SCSS/images.scss';
import Carousel from 'react-bootstrap/Carousel';

export const Images = ({ image }) => {
	return (
		<div id='carouselExampleControls' className='carousel slide' data-ride='carousel'>
			<div className='carousel-inner'>
				<Carousel variant='dark'>
					{image
						? image.map((img, index) => (
								<Carousel.Item key={index}>
									<img className='w-100 p-5' src={img} />
								</Carousel.Item>
						  ))
						: ''}
				</Carousel>
			</div>
			<p className='carousel-control-prev' role='button' data-slide='prev'>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='sr-only'>Previous</span>
			</p>
			<p className='carousel-control-next' role='button' data-slide='next'>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='sr-only'>Next</span>
			</p>
		</div>
	);
};
