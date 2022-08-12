import Home from "../pages/Home";
import Authorization from "../pages/Authorization";
import Authorize from "../layouts/Authorize";
import NotFound from "../pages/NotFound";
import TermsOfUse from "../pages/TermsOfUse";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import FAQ from "../pages/FAQ";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import MainPage from "../pages/MainPage";

 const routesList = [
    {
        path: "/",
        element: <Home />,
        
    },
    {
        path: "/main/:id",
        element: <MainPage />,
        
    },
    {
        path: "/terms-of-use",
        element: <TermsOfUse />
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPolicy />
    },
    {
        path: "/faq",
        element: <FAQ />
    },
    {
        path: "/about-us",
        element: <AboutUs />
    },
    {
        path: "/contact-us",
        element: <ContactUs />
    },
    {
        path: "/auth",
        element: <Authorization />,
        children: [
            {
                path: '/auth/signin',
                element: <Authorize />
            },
            {
                path: '/auth/signup',
                element: <Authorize />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]

export default routesList