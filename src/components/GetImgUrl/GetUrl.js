import axios from "axios";
import React, { useState } from "react";

const GetUrl = () => {
    const [imgUrl, setImgUrl] = useState("");
    const [isImage, setImage] = useState(false);

    const handelImagUpload = (e) => {
        setImage(true);
        const image = e.target.files[0];

        const fromData = new FormData();
        fromData.set("image", image);
        axios
            .post(
                "https://api.imgbb.com/1/upload?key=79fd0b725c9bb9b85e875f16c38c1622",
                fromData
            )
            .then((res) => {
                setImgUrl(res.data.data.display_url);
                setImage(false);
            })
            .catch((error) => {
                console.log(error);
                setImage(false);
            });
    };

    console.log(imgUrl);

    return (
        <div>
            <p>input here img</p>
            <input
                className="input input-bordered w-full max-w-xs mt-6"
                type="file"
                name="imgUrl"
                id=""
                onChange={handelImagUpload}
            />
            <div>
                <p> wait for preview</p>
                <img src={imgUrl} alt="" />
                {JSON.stringify(imgUrl)}
            </div>
        </div>
    );
};

export default GetUrl;
