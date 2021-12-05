import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import { db } from '../firebase';
import Post from './post'
import { useState, useEffect } from 'react';


function posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
        setPosts(snapshot.docs);
    }),[db]);

   
    return (
        <div>
            {posts.map(post=>(
                <Post key={post.id}
                 id={post.id} 
                 username={post.data().username} 
                 userImg={post.data().profileImg} 
                 img={post.data().image} 
                 caption={post.data().caption} />
            )) }
           
        </div>
    )
}

export default posts
