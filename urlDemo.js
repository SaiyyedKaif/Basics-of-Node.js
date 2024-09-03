import url from 'url'

const urlString = 'https://www.google.com/search?q=hello+world'

//url object 
const urlObj = new URL(urlString)
console.log(urlObj)

//format()
console.log(url.format(urlObj))

// import.meta.url
console.log(import.meta.url)

// fileURLtoPath()
console.log(url.fileURLToPath(import.meta.url))

const params = new URLSearchParams(urlObj.search)
console.log(params)
console.log(params.get('q'))
