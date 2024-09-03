import fs from 'fs/promises'

//readFile() =callback
//fs.readFile('./test.txt' , 'utf-8' ,(err , data) => {
//    if(err) throw err ;
//    console.log(data);
// });

// readFilesync() = Synchronous version

//const data  = fs.readFileSync('./test.txt' , 'utf8');
//console.log(data);

// readFile()  = async/await 
const readFile = async()=>{
    try {
        const data  = await fs.readFile('./test.txt' , 'utf-8');
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// writeFile()
const writeFile = async()=>{
    try {
        await fs.writeFile('./test.txt' , 'Hello , My name is Saiyyed Kaif Aalam')
        console.log('File written to ...')
    } catch (error) {
        console.log(error);     
    }
}

// appendFile()
const appendFile = async() => {
    try {
        await fs.appendFile('./test.txt' , '\nI changed the contents of this file')
        console.log('File appneded to ...')
    } catch (error) {
        console.log(error)
    }
}
writeFile()
appendFile()
readFile()