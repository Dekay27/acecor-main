import React from 'react';
import Layout from "../components/layout/Layout";
import DashboardInner from "../components/sections/DashboardInner";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="two">
                <DashboardInner />
            </Layout>
        </>
    )
}
