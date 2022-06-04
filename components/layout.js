import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>union global chat公式サイト</title>
      </Head>
      <div className="flex justify-between">
        <h1>UGC</h1>
        <a href="">support</a>
      </div>
    </div>
  )
}
