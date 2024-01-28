import React, { useState, useRef, useEffect } from "react";


const SampleUploadPage = () => {
    const [file, setFile] = useState(null);
    const downloaded = false;

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };  

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("file", file);
    };

    // file to set open for downloading client/src/assets/fontcreate.pdf

    return (
        <div className="flex flex-col items-center">
            <div className="text-xl font-bold mt-20 mb-20">Download our Sample File</div>
            <a 
            href={`${process.env.PUBLIC_URL}/fontcreate.pdf`} 
            download="fontcreate.pdf"
            onClick={() => { downloaded = true;} }
            >
                <button>Download</button>
            </a>
            <div className="text-xl font-bold mt-20 mb-20">Upload Your Sample</div>
            <input type="file" onChange={handleFileChange} />
            <button 
            
            onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default SampleUploadPage;

    
    