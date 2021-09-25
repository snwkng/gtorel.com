import axios from "axios"


async function getPosts() {
  await axios.get('http://jsonplaceholder.typicode.com/posts').then((response) => {
    return response.data
  }).catch((err) => {
    return err
  })
}

export {getPosts}