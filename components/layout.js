import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>union global chat公式サイト</title>
      </Head>
      <nav className="bg-violet-500 flex justify-between">
        <h1 className="text-4xl text-white">UGC</h1>
        <a className="text-2xl text-white" href="https://discord.gg/EVXYfrgyqh">support</a>
      </nav>
      <main className="h-5">{children}</main>
    </div>
  )
}
