import crypto from 'crypto'

//createHash()
const hash = crypto.createHash('sha256')
hash.update('Saiyyed Kaif Aalam')
console.log(hash.digest('hex'))

//randomBytes
crypto.randomBytes(16 , (err , buf)=>{
    if(err) throw err
    console.log(buf.toString('hex'))
})

