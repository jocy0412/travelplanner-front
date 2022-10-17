// import { Routes, Route, Link, useLocation } from "react-router-dom";
import { NaverMap, Marker, RenderAfterNavermapsLoaded } from "react-naver-maps";
import Header from "./../common/Header";

const Detail = () => {
    // const { pathname } = useLocation();

    // const navermaps = window.naver.maps;

    return (
        <>
            <Header />
            <div className="section">
                {/* <Link to={pathname + "/depth"}>다음 뎁스로</Link>
                <Link to={pathname + "/shop"}>shop 뎁스로</Link> */}
                {/* <Routes>
                    <Route
                        path="/recommend"
                        element={<div>추천페이지임</div>}
                    />
                    <Route path="/shop" element={<div>상품페이지임</div>} />
                </Routes> */}
                <div className="box__detail">
                    <div className="left__section">
                        <ul>
                            <li>
                                <h3>여행지</h3>
                                <p>서울시 영등포구 영등포구 영등포구</p>
                            </li>
                            <li>
                                <h3>여행지</h3>
                                <p>서울시 영등포구 영등포구 영등포구</p>
                            </li>
                            <li>
                                <h3>여행지</h3>
                                <p>서울시 영등포구 영등포구 영등포구</p>
                            </li>
                            <li>
                                <h3>여행지</h3>
                                <p>서울시 영등포구 영등포구 영등포구</p>
                            </li>
                        </ul>
                    </div>
                    <div className="right__section">
                        <div className="map__area">
                            <RenderAfterNavermapsLoaded
                                ncpClientId="zkghq4ckfb"
                                // 네이버 클라우드에서 받은 client id를 적어야 한다.
                                // 필자는 환경변수 이용
                                // ncpClientId={
                                //     process.env.REACT_APP_MAP_CLIENT_ID
                                // }
                                error={<p>Maps Load Error</p>}
                                loading={<p>Maps Loading...</p>}
                            >
                                <NaverMap
                                    mapDivId="map"
                                    defaultCenter={{
                                        lat: 37.4859044,
                                        lng: 126.9022847,
                                    }}
                                    style={{
                                        width: "100%",
                                        height: "400px",
                                    }}
                                    defaultZoom={16}
                                    zoomControl={true} // 지도 zoom 허용
                                >
                                    <Marker
                                        position={{
                                            lat: 37.4859044,
                                            lng: 126.9022847,
                                        }}
                                    />
                                </NaverMap>
                            </RenderAfterNavermapsLoaded>
                        </div>
                        <div className="list__result">
                            <div className="search__bar">
                                <input className="input" />
                                <button type="button" className="button">
                                    button
                                </button>
                                <button
                                    type="button"
                                    className="button button1"
                                >
                                    button1
                                </button>
                                <button
                                    type="button"
                                    className="button button2"
                                >
                                    button2
                                </button>
                                <button
                                    type="button"
                                    className="button button3"
                                >
                                    button3
                                </button>
                                <button
                                    type="button"
                                    className="button button4"
                                >
                                    button4
                                </button>
                            </div>
                            <ul className="list__result">
                                <li className="list__item">123123</li>
                                <li className="list__item">123123</li>
                                <li className="list__item">123123</li>
                                <li className="list__item">123123</li>
                                <li className="list__item">123123</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Detail;
