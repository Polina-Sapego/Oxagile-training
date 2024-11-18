import React, { useEffect, useState } from 'react';
import Carousel, { IForYouItem } from './Carousel';

function ForYou() {
  const [posts, setPosts] = useState<IForYouItem[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then((res) => res.json())
      .then((fetchedPosts) => { setPosts(fetchedPosts); });
  }, []);

  return (
    <div className="special-body">
      <div className="foryou-page">
        <div className="post-wrapper">
          <Carousel posts={posts} />
        </div>
      </div>
    </div>
  );
}

export default ForYou;
