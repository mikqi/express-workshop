const fs = require('fs')
// fs.readFile(
//   __dirname + '/data.csv',
//   {
//     encoding: 'utf-8'
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err)
//       return
//     }

//     console.log(data)
//   }
// )

const csv = fs.readFileSync(__dirname + '/data.csv', {
  encoding: 'utf-8'
})

console.log(csv)
