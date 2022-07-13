import React, { useState } from 'react';
import Axios from 'axios';
import { Image } from 'cloudinary-react'

import "./competition.css"




export default function UploadImg1() {

  const [imageSelected, setImageSelected] = useState("")

  const uploadImage = () => {
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "kickwin")

    Axios.post("https://api.cloudinary.com/v1_1/amirsouayah/image/upload",
      formData
    ).then((response) => {
      console.log("#url", response.data.url);
    })
  };


  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}> Upload</button>
      <Image
        style={{ width: 200 }}
        cloudName='amirsouayah'
      // publicId={}

      />
    </div>
  );
}