import React from 'react';
import usuarios from './data/usuarios';
import styles from '../../../../styles/Foro/foro.module.scss';

const UsuarioInfo = ({ usuarioId }) => {
  const usuario = usuarios.find(user => user.id === usuarioId);

  if (!usuario) return null;

  return (
    <div className={styles.preguntaUsuario}>
      <img src={usuario.foto} alt={usuario.nombre} />
      <p>{usuario.nombre}</p>
    </div>
  );
};

export default UsuarioInfo;
