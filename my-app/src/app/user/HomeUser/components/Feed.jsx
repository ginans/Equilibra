import React, { useState, useEffect } from 'react';
import FeedItem from './FeedItem';
import styles from "../../../../styles/HomeUser/LandigPageUser.module.scss"
import OlderPeopleExercising from "../images/older-people-exercising.jpg"
import WomanExercising from "../images/Mujer-entrenando-desde-casa-Entrenador-Wellness.jpg"

const Feed = () => {
  const [items, setItems] = useState([]);
    console.log("reenderizando feed")
  //datos de ejemplo por mientras
  useEffect(() => {
    const fetchData = async () => {//para sinmular solicitud a api desde datos locales
      const data = [
        { id: 1, title: 'Primer artículo', content: 'Phasellus vel lectus faucibus, rhoncus felis vitae, malesuada ex. Vestibulum eget lorem sed ante rutrum dapibus. Fusce id libero ac metus venenatis vestibulum. Nunc eget erat id tellus vestibulum ultrices. Sed rutrum, diam nec tincidunt iaculis, tortor felis blandit sem, eu ultricies ante tortor vel mi. Donec quis mi eget eros placerat sagittis. Pellentesque nunc ante, dapibus vitae dolor ut, hendrerit commodo sem. Curabitur blandit tempus mauris, sed aliquam dui ullamcorper sit amet. Donec non dapibus purus. Nunc scelerisque id lect.', image:OlderPeopleExercising, alt: "Adultos mayores haciendo ejercicio", url:"https://www.lipsum.com/feed/html"},

        { id: 2, title: 'Segundo artículo', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque, metus id tristique tincidunt, arcu elit efficitur nulla, non faucibus neque velit at velit. Maecenas facilisis, lorem non elementum scelerisque, nibh quam laoreet velit, vulputate efficitur nulla metus quis enim. Vestibulum pellentesque aliquam maximus.', image:WomanExercising, alt:"Mujer haciendo ejercicio en casa", url:'https://www.lipsum.com/feed/html'},

        { id: 3, title: 'Tecer artículo', content: 'Este es el contenido del primer artículo.'},
      ];
      setItems(data);
    };

    fetchData();
  }, []);

   
  return (
    <div className={styles.feed}>
      <h2>Feed</h2>
        {items.map(item => (
          <FeedItem key={item.id} item={item} />
        ))}

    </div>
  );
};

export default Feed;
