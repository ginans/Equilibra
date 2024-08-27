import React from 'react';
import UploadVideo from '../crearVideos/UploadVideo';
import VideoTable from '../crearVideos/VideoTable'


const AdminVideos = () => {
  return (
    <div>  
      
      <UploadVideo/>
      <VideoTable/>
    </div>
  );
};

export default AdminVideos;