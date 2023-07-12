import "swiper/css";
import "swiper/css/navigation";

import '../public/css/bootstrap.min.css';
import '../public/css/style.css';
import '../public/css/responsive.css';
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
    return (<>
        {!loading ? (
            <Component {...pageProps} />
        ) : (
            <div class="preloader"></div>
        )}
    </>)
}

export default MyApp
