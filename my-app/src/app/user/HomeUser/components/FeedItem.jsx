import React from 'react';
import styles from "../../../../styles/HomeUser/LandigPageUser.module.scss"
const FeedItem = ({ item }) => {
  return (
    <div className={styles.feedItem}>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </div>
  );
};

export default FeedItem;
