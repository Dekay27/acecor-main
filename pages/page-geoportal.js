import React from 'react';
import GeoLayout from "../components/layout/GeoLayout";
import GeoportalInner from "../components/sections/GeoportalInner";

export default function Home() {

    return (
        <>
            <GeoLayout HeaderStyle="two">
                <GeoportalInner />
            </GeoLayout>
        </>
    )
}
