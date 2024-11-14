import React, { useEffect, useState } from 'react';
import PostCarousel from '@images/postcarousel.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export interface IForYouItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface IForYou {
  posts: IForYouItem[];
}

function Carousel({ posts }: IForYou) {
  const [pages, setPages] = useState<React.ReactNode[]>([]);
  const [offset, setOffset] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const pageWidth = ((window.innerWidth * 52.1) / 100);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + pageWidth;
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - pageWidth;
      const maxOffset = -(pageWidth * (pages.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    const pageElements = posts.map((postItem, index) => (
      <div
        key={postItem.id}
        className={`carousel-page ${index === visibleIndex ? 'active' : ''}`}
        style={{
          paddingLeft: index === 0 ? '210px' : 'none',
        }}
      >
        <div
          className="page"
          style={{
            width: index === visibleIndex ? '95%' : '90%',
            marginTop: index === visibleIndex ? '2%' : '5%',
            boxShadow: index === visibleIndex ? '-20px 20px 20px 0px rgba(255, 217, 25, 1)' : 'none',
          }}
        >
          <div className="image-container">
            <img src={PostCarousel} className="page-image" alt="carousel" />
            <div className="page-content">
              <h1>{postItem.title}</h1>
              <h2>
                <span style={{ marginRight: '10px' }}>
                  {`${postItem.id}+ |`}
                </span>
                <span>{postItem.albumId}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    ));

    setPages(pageElements);
  }, [posts, visibleIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const centerIndex = Math.round(Math.abs(offset) / pageWidth);
      setVisibleIndex(centerIndex);
    };

    handleScroll();
  }, [offset]);

  return (
    <div className="main-carousel">
      <div className="window">
        <div className="all-pages-container" style={{ transform: `translateX(${offset}px)` }}>
          {pages}
        </div>
      </div>
      <FaChevronLeft className="arrow-left" onClick={handleLeftArrowClick} />
      <FaChevronRight className="arrow-right" onClick={handleRightArrowClick} />
    </div>
  );
}

export default Carousel;
