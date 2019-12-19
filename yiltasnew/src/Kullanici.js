import Axios from 'axios'

const url = 'http://localhost:5000/api/kullanici/';


class Kullanici {
    // Get Post
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await Axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        
                    }))
                );
            }
            catch(err) {
                reject(err);
            }
        });
    }
    // Create Post
    static insertPost(isim,sifre){
        return Axios.post(url, {
            isim,
            sifre
        });
    }

    //Delete Post
    static deletePost(id) {
        return Axios.delete(url+id);
    }

}


export default Kullanici;
