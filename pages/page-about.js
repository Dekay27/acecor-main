import React from 'react';
import Layout from "../components/layout/Layout";
import Home1_Section2_About1 from "../components/sections/Home1/Home1_Section2_About1";
import Home1_Section3_Service1 from "../components/sections/Home1/Home1_Section3_Service1";



export default function Home() {

    return (
        <>
            <Layout HeaderStyle="two">
                <Home1_Section2_About1 />
                <Home1_Section3_Service1 />

            </Layout>
        </>
    )
}
