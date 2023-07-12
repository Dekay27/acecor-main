import React from "react";
import Layout from "../components/layout/Layout";
import Home1_Section1_Slider1 from "../components/sections/Home1/Home1_Section1_Slider1";
import Home1_Section10_News1 from "../components/sections/Home1/Home1_Section10_News1";
import Home1_Section11_Contact1 from "../components/sections/Home1/Home1_Section11_Contact1";
import Home1_Section12_Call_To_Action1 from "../components/sections/Home1/Home1_Section12_Call_To_Action1";
import Home1_Section2_About1 from "../components/sections/Home1/Home1_Section2_About1";
import Home1_Section3_Service1 from "../components/sections/Home1/Home1_Section3_Service1";
import Home1_Section4_feature1 from "../components/sections/Home1/Home1_Section4_feature1";
import Home1_Section5_Project1 from "../components/sections/Home1/Home1_Section5_Project1";
import Home1_Section6_Why_Choose_Us1 from "../components/sections/Home1/Home1_Section6_Why_Choose_Us1";
import Home1_Section7_Faqs1 from "../components/sections/Home1/Home1_Section7_Faqs1";
import Home1_Section8_Clients1 from "../components/sections/Home1/Home1_Section8_Clients1";
import Home1_Section9_Testimonials1 from "../components/sections/Home1/Home1_Section9_Testimonials1";

export default function Home1() {
    return (
        <>
            <Layout HeaderStyle="two">
                <Home1_Section1_Slider1 />
                <Home1_Section2_About1 />
                <Home1_Section3_Service1 />
                <Home1_Section5_Project1 />
                <Home1_Section10_News1 />
                <Home1_Section8_Clients1 />
                <Home1_Section11_Contact1 />
            </Layout>
        </>
    );
}
