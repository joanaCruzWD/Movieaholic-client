import { useEffect, useState } from "react";


function GoTop(props) {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };
    return (
        <>
            {showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    &#8679;
                </button>
            )}
            {/* &#8679; is used to create the upward arrow */}
        </>
    );
};

export default GoTop;
