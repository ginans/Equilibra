import React, { useState, useEffect } from 'react';
import FeedItem from './FeedItem';
import styles from "../../../../styles/HomeUser/LandigPageUser.module.scss"

const Feed = () => {
  const [items, setItems] = useState([]);
    console.log("reenderizando feed")
  //datos de ejemplo por mientras
  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { id: 1, title: 'Primer artículo', content: 'Este es el contenido del primer artículo.' },
        { id: 2, title: 'Segundo artículo', content: 'Este es el contenido del segundo artículo.' },
      ];
      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.feed}>
    <h2>este es el feed</h2>
      {items.map(item => (
        <FeedItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Feed;
