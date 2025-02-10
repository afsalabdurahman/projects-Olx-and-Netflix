 module.exports=function Urlmaking(file){
let Uniq_url=`http://localhost:3000/uploads/${file.filename}`
return new Promise((resolve, reject) => {
    resolve(Uniq_url)
})
 }
