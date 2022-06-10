async function main() {
  const r = await fetch("https://ugc.renorari.net/api/v1/status")
  const data = await r.json()
}
