import React from 'react';
import Noticia from './Noticia';
import styles from '../../styles/noticias/Noticia.module.scss'; 

const datosNoticias = [
  {
    id: 1,
    titulo: 'Gobierno lanza campaña “A tu ritmo” de Elige Vivir Sano, junto a la banda nacional Sinergia Kids',
    url: 'https://www.desarrollosocialyfamilia.gob.cl/noticias/gobierno-lanza-campana-a-tu-ritmo-de-elige-vivir-sano-junto-a-la-banda-nacional-sinergia-kids',
    descripcion: 'Los músicos interpretan la canción que acompaña esta campaña, que busca promover la incorporación de hábitos y estilos de vida saludable a través de la recuperación de tradiciones familiares y comunitarias, “A tu ritmo”, es el eslogan de la nueva campaña.',
    imagen: 'https://www.desarrollosocialyfamilia.gob.cl/storage/image/ENERO_2024/FOTO_NOTA_WEB__04-01_-690_x_332_px_-6.jpg' 
  },
  {
    id: 2,
    titulo: 'Elige Vivir Sano abrió fondos para proyectos por $15 y $30 millones',
    url: 'https://www.desarrollosocialyfamilia.gob.cl/noticias/elige-vivir-sano-abrio-fondos-para-proyectos-por-15-y-30-millones',
    descripcion: 'Ya están abiertas las postulaciones para los fondos concursables “Promoción de Entornos Saludables” del Sistema Elige Vivir Sano, que este año financiará iniciativas entre los 15 y 30 millones de pesos, dependiendo si ésta es de carácter local o contempla más de una región.',
    imagen: 'https://www.desarrollosocialyfamilia.gob.cl/storage/image/junio_2024/Elige_Vivir_Sano_Antofagasta.jpg' 
  },
  {
    id: 3,
    titulo: 'Elige Vivir Sano inició postulaciones al Fondo Concursable de Promoción de Entornos Saludables 2024',
    url: 'https://www.desarrollosocialyfamilia.gob.cl/noticias/elige-vivir-sano-inicio-postulaciones-al-fondo-concursable-de-promocion-de-entornos-saludables-2024',
    descripcion: 'Para financiar ideas innovadoras o que ya estén en ejecución y que vayan en la línea de la promoción de los hábitos y estilos de vida saludables en la población, el Ministerio de Desarrollo Social a través de Elige Vivir Sano abrieron la postulación al Fondo Concursable.',
    imagen: 'https://www.desarrollosocialyfamilia.gob.cl/storage/image/junio_2024/Screenshot_2024-06-17-13-14-17-361_com.microsoft.outlooklite-edit.jpg'
  },
  {
    id: 4,
    titulo: '¿Cuándo puedo volver a hacer ejercicio después de estar enfermo?',
    url: 'https://www.latercera.com/que-pasa/noticia/he-estado-enfermo-cuando-puedo-volver-a-hacer-ejercicio/JSQJK5JTSRC5HKIUWWGXX26X3Y/#',
    descripcion: 'Estás listo para levantarte del sofá, pero ¿es demasiado pronto para salir a correr?. El ejercicio puede reforzar el sistema inmunológico, pero no siempre. Esto es lo que debes tener en cuenta al volver a hacer ejercicio después de una enfermedad.',
    imagen: 'https://www.latercera.com/resizer/v2/WHPWLNM555GB3F6O6LPBAJFMYQ.jpg?quality=80&fitfill=true&auth=f02d81e1d542b1787da0e11f2d173f42bd1e66d27c77c62f45f3c54072cc20ca&width=1200&height=796'
  },
  {
    id: 5,
    titulo: 'Estos son los 4 simples hábitos que recomiendan los científicos para vivir hasta los 100 años',
    url: 'https://www.biobiochile.cl/noticias/ciencia-y-tecnologia/ciencia/2024/08/13/estos-son-los-4-simples-habitos-que-recomiendan-los-cientificos-para-vivir-hasta-los-100-anos.shtml',
    descripcion: 'Científicos australianos hicieron un estudio para determinar cuáles serían los hábitos clave para vivir más, específicamente, para fomentar una vida más larga en las personas, al menos hasta los 100 años.',
    imagen: 'https://i0.wp.com/www.duplos.cl/wp-content/uploads/2024/08/bb_d56ad5e8-7995-4b8e-ac4c-efc7aab129ca.jpg?w=1200&ssl=1'
  },
  {
    id: 6,
    titulo: 'Salud cardiovascular: la clave está en la prevención',
    url: 'https://www.biobiochile.cl/noticias/opinion/columnas-bbcl/2024/08/13/salud-cardiovascular-la-clave-esta-en-la-prevencion.shtml',
    descripcion: 'La importancia de prevenir las enfermedades cardiovasculares no puede ser subestimada. De acuerdo a cifras de la OMS, en Chile, cada año más de 30,000 personas fallecen por enfermedades cardiovasculares, siendo una de las principales causas de muerte en el país.',
    imagen: 'https://okdiario.com/img/2024/05/14/corazonok-635x358.jpg'
  },
  {
    id: 7,
    titulo: 'El ejercicio de estiramiento que evitará que pierdas la flexibilidad en la vejez',
    url: 'https://www.biobiochile.cl/noticias/salud-y-bienestar/cuerpo/2024/08/11/el-ejercicio-de-estiramiento-que-evitara-que-pierdas-la-flexibilidad-en-la-vejez.shtml',
    descripcion: 'Perrear hasta el suelo es una habilidad que con los años se va perdiendo, tal como la flexibilidad que tenemos en las caderas, porque tal ejercicio requiere una movilidad y fuerza en el área que con la vejez, vamos perdiendo',
    imagen: 'https://www.duplos.cl/wp-content/uploads/2024/08/bb_fa32b9ad-5fc1-4c77-a63f-1f7fe26fa11f.jpg'
  },
  {
    id: 8,
    titulo: 'El simple ejercicio que podría ser la solución a tu dolor de espalda recurrente, según nuevo estudio',
    url: 'https://www.biobiochile.cl/noticias/salud-y-bienestar/cuerpo/2024/07/08/este-simple-ejercicio-podria-ser-la-solucion-a-tu-dolor-de-espalda-recurrente-plantea-nuevo-estudio.shtml',
    descripcion: 'Los investigadores encontraron que los pacientes que caminan diariamente sufren menos episodios de dolor agudo. El estudio, siguió a más de 700 adultos que se habían recuperado de un episodio de lumbalgia.',
    imagen: 'https://hospital.vallhebron.com/sites/hospital/files/styles/crop_16_9_large/public/lumbalgia.jpg?itok=Z3LHeCMh'
  }
];

const ListaNoticias = () => {
  const noticiasOrdenadas = [...datosNoticias].reverse();

  return (
    <div className={styles.contenedorNoticias}>
      {noticiasOrdenadas.map((noticia) => (
        <Noticia
          key={noticia.id}
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