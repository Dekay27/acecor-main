import React from 'react';
import Layout from "../components/layout/Layout";
import ContactInner from "../components/sections/ContactInner";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="two">
                <ContactInner />
            </Layout>
        </>
    )
}
