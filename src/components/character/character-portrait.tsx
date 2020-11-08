import React, { useState, useEffect } from "react";
import { Upload, Tooltip } from "antd";
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/lib/upload";
import ImgCrop from "antd-img-crop";
import { isNil } from "lodash";

import { WithReducerProps } from "../common/interfaces";
import { UploadFile } from "antd/lib/upload/interface";

export interface CharacterPortraitProps extends WithReducerProps {}

function CharacterPortrait({ state, dispatch }: CharacterPortraitProps) {
  const [imageUrl, setImageURL] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const outerReader = new FileReader();
  outerReader.onloadend = () => {
    console.log("finished read!");
    if (typeof outerReader.result === "string") {
      setImageURL(outerReader.result);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (state.character.portrait && !imageUrl) {
      setImageURL(state.character.portrait);
    }
  }, [state, imageUrl, setImageURL]);

  useEffect(() => {
    if (imageUrl && imageUrl !== state.character.portrait) {
      console.log("dispatching portrait!");
      dispatch({
        type: "PORTRAIT",
        payload: imageUrl,
      });
    }
  }, [imageUrl, dispatch, state.character.portrait]);

  const handlePortraitChange = (info: UploadChangeParam) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      let file = info.file.originFileObj;
      if (!isNil(file)) {
        console.log("starting read now!");
        outerReader.readAsDataURL(file);
      }
    }
  };

  const handlePortraitPreview = async (file: UploadFile<any>) => {
    let src = file.url;
    if (isNil(src)) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === "string") {
            console.log("resolving preview now!");
            resolve(reader.result);
          }
        };

        if (!isNil(file.originFileObj)) {
          console.log("starting preview read now!");
          reader.readAsDataURL(file.originFileObj);
        }
      });
    }

    if (src) {
      console.log("setting up preview display!");
      console.log({ src });
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow?.document.write(image.outerHTML);
    }
  };

  return (
    <div className={"character-portrait"}>
      {/* <ImgCrop rotate={true}> */}
        <Upload
          name={"portrait"}
          listType={"picture-card"}
          className={
            imageUrl ? "portrait-uploader uploaded" : "portrait-uploader"
          }
          showUploadList={false}
          onChange={handlePortraitChange}
          // onPreview={handlePortraitPreview}
        >
          {imageUrl ? (
            <Tooltip title={"Replace image?"}>
              <img
                src={imageUrl}
                alt={`Portrait for ${state.character.name}`}
              />
            </Tooltip>
          ) : (
            <div className={"portrait-prompt"}>
              {loading ? <LoadingOutlined /> : <UploadOutlined />}
              <div>Upload</div>
            </div>
          )}
        </Upload>
      {/* </ImgCrop> */}
    </div>
  );
}

export default CharacterPortrait;
