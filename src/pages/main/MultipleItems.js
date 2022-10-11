import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MultipleItems = () => {
    const arr = Array(8).fill(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        className: "slider__product",
    };
    return (
        <div>
            <Slider {...settings}>
                {arr.map((a, i) => {
                    return (
                        <BoxSlick>
                            <h3>{i + 1}</h3>
                        </BoxSlick>
                    );
                })}
            </Slider>
        </div>
    );
};
export default MultipleItems;

const BoxSlick = styled.div`
    width: 250px !important;
    border: 1px solid #000;
    box-sizing: border-box;
    border-radius: 7px;
    background: pink;
`;
