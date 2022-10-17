import SliderPlan from "../common/SliderPlan";
import Header from "./../common/Header";
import Footer from "./../common/Footer";

const Main = () => {
    return (
        <>
            <Header />
            <div className="section">
                <SliderPlan />
                <SliderPlan />
            </div>
            <Footer />
        </>
    );
};

export default Main;
