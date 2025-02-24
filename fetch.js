fetch('https://jsonplacekholder.typicode.com/todos/').then((res) => res.json()).catch((err)=>console.log(err))



console.log(200/0)

try {
    var arr=[10,23]
  console.log(arr[7])
} catch (error) {
    console.log(err)
}finally{
    console.log("code run")
}