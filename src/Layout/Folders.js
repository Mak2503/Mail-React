import React, { useState } from "react";
import "./Layout.css";
import { MailList } from "./MailList";

export const Folders = (props) => {
  const { folderLists, changeFolderName } = props;
  return (
    <div className="Folder">
      {/* <div>
        <input type="text" />
      </div> */}
      <div className="Folder-head">Folders</div>
      <div className="Folder-child">
        {folderLists.map((folder, index) => (
          <div
            className="Folder-child-list"
            key={index}
            onClick={() => changeFolderName(folder)}
          >
            {folder}
          </div>
        ))}
      </div>
    </div>
  );
};
