import React from 'react';
import ImageUploading from 'react-images-uploading';
import "./competition.css"
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function UploadImg() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const classes = useStyles();

  const uploadImage = (files, imageList) => {
    console.log(files[0]);
    setImages(imageList);
  }
  // const onChange = (imageList, addUpdateIndex) => {
  //   // data for submit

  //   console.log(imageList, addUpdateIndex);
  //   setImages(imageList);
  // };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={(event) => { uploadImage(event.target.files) }}
        maxNumber={maxNumber}
        dataURLKey="data_url"

      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <IconButton aria-label="delete"
                    onClick={() => onImageRemove(index)}>
                    <DeleteIcon fontSize="large" />
                  </IconButton>
                  {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                  {/* <button onClick={() => onImageRemove(index)}>Remove</button> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}