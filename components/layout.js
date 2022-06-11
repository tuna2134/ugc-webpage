import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>union global chat公式サイト</title>
      </Head>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
      <nav className="bg-violet-500 flex justify-between h-14">
        <Link href="/">
          <h1 className="text-4xl text-white">UGC</h1>
        </Link>
        <div>
          <Link href="/status">
            <a className="rounded-md text-2xl text-white bg-violet-300">status</a>
          </Link>
          <Link href="/support">
            <a className="rounded-md text-2xl text-white bg-violet-300">support</a>
          </Link>
        </div>
      </nav>
      <main className="h-6">{children}</main>
    </div>
  )
}
