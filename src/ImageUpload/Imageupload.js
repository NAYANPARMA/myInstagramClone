import { Button } from '@material-ui/core'
import { firestore } from 'firebase';
import React, {useState} from 'react'
import { db, storage } from '../firebase';
import './Imageupload.css'

function Imageupload(props) {
    const [caption, setCaption] = useState('')
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    const handleUpload = () => {
        const uploadFile = storage.ref(`images/${image.name}`).put(image);
        
        uploadFile.on(
            "state_changed",
            (snapshot) => {
                // progress function....
                const progress =  Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes ) * 100
                );
                setProgress(progress);
            },
            (error) => {
                // error function
                console.log(error);
                alert(error.message);
            },
            () => {
                //complete funtion..
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    // post image into database
                    db.collection("posts").add({
                        timestamp: firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        imageUrl:url,
                        username: props.username

                    })
                    setProgress(0)
                    setCaption('')
                    setImage(null)
                })
            }
        )
    }

    return (
        <div className='imageupload'>
            <progress className="imageuploadprogress" value={progress} max="100"/>
            <input type='text' placeholder='Enter a caption...' onChange={event => setCaption(event.target.value) } value={caption}/>
            <input type='file' onChange={handleChange}/>
            <Button className="imageupload-button" onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default Imageupload
