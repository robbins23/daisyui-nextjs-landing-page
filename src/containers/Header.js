import Head from 'next/head'
import Link from 'next/link'


function Header(){


    return(
        <>
            <Head>
                <title>Daisy UI - Landing Page</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    )
}

export default Header