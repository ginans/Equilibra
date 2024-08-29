import React from 'react';
import usuarios from './data/usuarios';  // Datos de los usuarios
import styles from '../../../../styles/Foro/usuarioInfo.module.scss';

const UsuarioInfo = ({ usuarioId }) => {
  // Encontramos al usuario por su ID
  const usuario = usuarios.find((user) => user.id === usuarioId);

  // Renderizamos la información del usuario
  return (
    <div className={styles.usuarioInfo}>
      <img src={usuario.fotoPerfil} alt={`${usuario.nombre}'s perfil`} className={styles.fotoPerfil} />
      <span>{usuario.nombre}</span>
    </div>
  );
};

export default UsuarioInfo;


