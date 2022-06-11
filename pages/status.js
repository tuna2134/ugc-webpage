import Layout from "../components/layout"
import Script from "next/script"


export default function Status() {
  return (
    <Layout>
      <h2>Status Page</h2>
      <Script src="https://ugc-webpage.vercel.app/status.js" />
    </Layout>
  )
}
