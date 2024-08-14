import React from 'react';
import Noticia from './Noticia';
import styles from '../../styles/noticias/Noticia.module.scss'; 


const datosNoticias = [
  {
    titulo: 'Gobierno lanza campaña “A tu ritmo” de Elige Vivir Sano, junto a la banda nacional Sinergia Kids',
    url: 'https://www.desarrollosocialyfamilia.gob.cl/noticias/gobierno-lanza-campana-a-tu-ritmo-de-elige-vivir-sano-junto-a-la-banda-nacional-sinergia-kids',
    descripcion: 'Los músicos interpretan la canción que acompaña esta campaña intersectorial, que busca promover la incorporación de hábitos y estilos de vida saludable a través de la recuperación de tradiciones familiares y comunitarias, “A tu ritmo”, es el eslogan de la nueva campaña.',
    imagen: 'https://www.desarrollosocialyfamilia.gob.cl/storage/image/ENERO_2024/FOTO_NOTA_WEB__04-01_-690_x_332_px_-6.jpg' 
  },
  {
    titulo: 'Elige Vivir Sano abrió fondos para proyectos por $15 y $30 millones',
    url: 'https://www.desarrollosocialyfamilia.gob.cl/noticias/elige-vivir-sano-abrio-fondos-para-proyectos-por-15-y-30-millones',
    descripcion: 'Ya están abiertas las postulaciones para los fondos concursables “Promoción de Entornos Saludables” del Sistema Elige Vivir Sano, que este año financiará iniciativas entre los 15 y 30 millones de pesos, dependiendo si ésta es de carácter local o contempla más de una región.',
    imagen: 'https://www.desarrollosocialyfamilia.gob.cl/storage/image/junio_2024/Elige_Vivir_Sano_Antofagasta.jpg' 
  },
  {
    titulo: 'Elige Vivir Sano inició postulaciones al Fondo Concursable de Promoción de Entornos Saludables 2024',
    url: 'https://www.desarrollosocialyfamilia.gob.cl/noticias/elige-vivir-sano-inicio-postulaciones-al-fondo-concursable-de-promocion-de-entornos-saludables-2024',
    descripcion: 'Para financiar ideas innovadoras o que ya estén en ejecución y que vayan en la línea de la promoción de los hábitos y estilos de vida saludables en la población, el Ministerio de Desarrollo Social a través de Elige Vivir Sano abrieron la postulación al Fondo Concursable.',
    imagen: 'https://www.desarrollosocialyfamilia.gob.cl/storage/image/junio_2024/Screenshot_2024-06-17-13-14-17-361_com.microsoft.outlooklite-edit.jpg'
  },
  {
    titulo: '¿Cuándo puedo volver a hacer ejercicio después de estar enfermo?',
    url: 'https://www.latercera.com/que-pasa/noticia/he-estado-enfermo-cuando-puedo-volver-a-hacer-ejercicio/JSQJK5JTSRC5HKIUWWGXX26X3Y/#',
    descripcion: 'Estás listo para levantarte del sofá, pero ¿es demasiado pronto para salir a correr?. El ejercicio puede reforzar el sistema inmunológico, pero no siempre. Esto es lo que debes tener en cuenta al volver a hacer ejercicio después de una enfermedad.',
    imagen: 'https://www.latercera.com/resizer/v2/WHPWLNM555GB3F6O6LPBAJFMYQ.jpg?quality=80&fitfill=true&auth=f02d81e1d542b1787da0e11f2d173f42bd1e66d27c77c62f45f3c54072cc20ca&width=1200&height=796'
  },
  
];

const ListaNoticias = () => {
  return (
    <div className={styles.contenedorNoticias}>
      {datosNoticias.map((noticia, index) => (
        <Noticia
          key={index}
          titulo={noticia.titulo}
          url={noticia.url}
          descripcion={noticia.descripcion}
          imagen={noticia.imagen}
        />
      ))}
    </div>
  );
};

export default ListaNoticias;
