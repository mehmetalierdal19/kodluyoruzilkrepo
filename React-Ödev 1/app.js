import axios from "axios"
async function getData(user_ID){
    const {data: users} = await axios("https://jsonplaceholder.typicode.com/users/"+ user_ID)
    const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_ID)
    
    console.log(users, "post", post)
}

export default getData