import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Carousel, { IForYouItem } from './Carousel';

function ForYou() {
  const [posts, setPosts] = useState<IForYouItem[]>([]);
  const location = useLocation();
  const isMainSettingsPage = location.pathname === '/';

  useEffect(() => {
    const originalBackgroundColor = document.body.style.background;
    document.body.style.background = '#0c0707';

    return () => {
      document.body.style.background = originalBackgroundColor;
    };
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then((res) => res.json())
      .then((fetchedPosts) => { setPosts(fetchedPosts); });
  }, []);

  return (
    <div className="foryou-page">
      { isMainSettingsPage && (
      <div className="post-wrapper">
        <Carousel posts={posts} />
      </div>
      )}
      <Outlet />
    </div>
  );
}

export default ForYou;
