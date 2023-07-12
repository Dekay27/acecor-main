import React from 'react';
import Layout from "../components/layout/Layout";
import NewsGrid from "../components/sections/NewsGrid";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="two">
                <NewsGrid />
            </Layout>
        </>
    )
}
