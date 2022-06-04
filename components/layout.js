import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>union global chat公式サイト</title>
      </Head>
      <div className="flex justify-between">
        <h1 className="text-4xl">UGC</h1>
        <a href="https://discord.gg/EVXYfrgyqh">support</a>
      </div>
      <main>{children}</main>
    </div>
  )
}
