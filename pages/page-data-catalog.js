import React from 'react';
import Layout from "../components/layout/Layout";
import CatalogData from "../components/sections/CatalogData";
import {useRouter} from "next/router";


export default function Home() {

    const router = useRouter();
    const dataKeyword  = router.query.keyword;

    return (
        <>
            <Layout HeaderStyle="two">
                <CatalogData keyword ={dataKeyword}/>
            </Layout>
        </>
    )
}
