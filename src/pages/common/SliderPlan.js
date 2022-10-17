import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderPlan = () => {
    const arr = Array(10).fill(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        className: "slider__product",
    };
    return (
        <>
            <div className="box__title">
                <h3 className="text__title">추천 여행이 돌아왔어요!</h3>
            </div>
            <Slider {...settings}>
                {arr.map((a, i) => {
                    return (
                        <div key={i}>
                            <div className="box__slide">
                                <Link to={"/detail/" + 1}>
                                    <span className="text__num">{i + 1}</span>
                                    <img
                                        src="https://d2ur7st6jjikze.cloudfront.net/landscapes/4622_large_square_1535612092.jpg?1535612092"
                                        alt={"images" + i}
                                    />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </>
    );
};
export default SliderPlan;
