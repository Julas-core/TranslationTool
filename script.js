async function translateTxt() {
  const text = document.getElementById('input').value
  const from = document.getElementById('source').value
  const to = document.getElementById('target').value
  console.log('clicked', text, from, to);
  const res = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`
  )
  const data = await res.json()
  document.getElementById('output').innerText = data.responseData.translatedText
}