import Layout from "../components/layout"
import Script from "next/script"


export default function () {
  return (
    <Layout>
      <h2>Status Page</h2>
      <Script src="/status.js" />
    </Layout>
  )
}
