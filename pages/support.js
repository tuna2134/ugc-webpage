import Layout from '../components/layout'

export default function Support() {
  return (
    <Layout>
      <div className="flex">
        <div className="border-4 rounded-md border-sky-400">
          <h3>Discord</h3>
          <a className="text-indigo-500" href="https://discord.gg/EVXYfrgyqh">https://discord.gg/EVXYfrgyqh</a>
        </div>
        <div className="border-4 rounded-md border-sky-400">
          <h3>Kana</h3>
          <a className="text-indigo-500" href="https://kana.renorari.jp">https://kana.renorari.net</a>
        </div>
      </div>
    </Layout>
  )
}
