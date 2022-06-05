import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>union global chat公式サイト</title>
      </Head>
      <nav className="bg-violet-500 flex justify-between h-14">
        <Link href="/">
          <h1 className="text-4xl text-white">UGC</h1>
        </Link>
        <div>
          <Link href="/support">
            <a className="rounded-md text-2xl text-white bg-violet-300">support</a>
          </Link>
        </div>
      </nav>
      <main className="h-5">{children}</main>
    </div>
  )
}
