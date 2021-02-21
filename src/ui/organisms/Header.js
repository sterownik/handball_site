import StickyNavigation from "../molecules/Header/StickyNavigation";
import TopFooter from "../atoms/Header/TopFooter";
import Hero from "../molecules/Header/Hero";

const Header = () => {
    return (
        <>
            <TopFooter />
            <StickyNavigation/>
            <Hero />
        </>
    )
};

export default Header;
