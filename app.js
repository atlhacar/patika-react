import axios from "axios";

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
       const {data} =await axios(
        ("https://jsonplaceholder.typicode.com/users/1"));

             resolve(data);
           // reject("Bir sorun oluştu.");
    });
}; 
const getPosts = (post_id) => {
    return new Promise(async (resolve, reject) => {
       const {data} =await axios(
        ("https://jsonplaceholder.typicode.com/posts?userId=1" + post_id ));
        
            //resolve(data);
            reject({Text:"Ustaaaa Sorun oluştu!!"});
    });
}; 

(async () => {
    await getUsers()
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
      
     await getPosts(1)
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  })();