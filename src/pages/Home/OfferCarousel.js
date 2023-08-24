import { Carousel } from "react-responsive-carousel";

export default function OfferCarousel() {
    return (
      <Carousel>
        <div>
          <img src="assets/images/freshfumes/offer.png" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="assets/images/freshfumes/offer.png" />
          <p className="legend">Legend 1</p>
        </div>
      </Carousel>
    );
}
