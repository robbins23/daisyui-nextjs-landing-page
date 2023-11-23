import Head from 'next/head'

function PageMetaTags({title, description, url}){

    const pageTitle = `${title}${title.includes("Web Design AI") ? "" : " | Web Design AI"}`

    return(
        <Head>
                <title>{pageTitle}</title>
                <meta name="title" content={pageTitle} />
                <meta name="description" content={description} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={description} />
                <meta name="og:url" content={`https://www.webdesignai.com${url || ""}`} />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={description} />
                <meta property="twitter:url" content={`https://www.webdesignai.com${url || ""}`} />
                <link rel="canonical" href={`https://www.webdesignai.com${url || ""}`} />
        </Head>
    )
}

export default PageMetaTags