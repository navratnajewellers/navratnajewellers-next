'use client';

import { Carousel, Panel, Rate } from 'rsuite';
import { FcGoogle } from 'react-icons/fc';

const reviews = [
  {
    id: 1,
    name: 'Satya Budhraja',
    comments:
      'THE BEST JEWELLERY SHOP IN RANCHI WITH PURITY IN GOLD AND SILVER. I AM THE MOST LOYAL CUSTOMER AND ALL MY FRIENDS ARE VERY IMPRESSED BY THIS SHOP. NO WONDER WE LOVE NAVRATNA JEWELLERS.',
  },
  {
    id: 2,
    name: 'Brajesh Mishra',
    comments:
      'Aroma and politeness of owner makes Navratna jewellers a place where someone makes himself comfortable and feels homely in no time.Deals and flexibility makes Navratna jewelers way ahead of its pears. One should visit here with no hesitation and without any worries .',
  },
  {
    id: 3,
    name: 'BURHANUDDIN BHIWANIWALA',
    comments:
      'Great environment and well manner staff with very attractive price and schemes.',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <Carousel autoplay className="testimonial-slider">
        {reviews.map(review => (
          <Panel key={review.id} shaded bordered className="testimonial-card">
            <div className="google-reviews">
              <span className="g-reviews-icon">
                <FcGoogle size="32" />
              </span>
              <span className="g-reviews-text">Reviews</span>
            </div>
            <div className="g-rating">
              <Rate defaultValue={5} color="yellow" disabled />
            </div>
            <p>&quot;{review.comments}&quot;</p>
            <h3>{review.name}</h3>
          </Panel>
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonials;
