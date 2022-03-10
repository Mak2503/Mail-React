import React, { useState } from "react";
import { Folders } from "./Folders";
import { MailList } from "./MailList";
import { folderExplorer } from "../utils/folderData";

export const Layout = () => {
  const [folderName, setFolderName] = useState("Inbox");
  const folderLists = ["Inbox", "Deleted Items", "Spam"];

  let folderData = [];

  if (folderName === "Inbox") folderData = folderExplorer.inbox;
  if (folderName === "Spam") folderData = folderExplorer.spam;
  if (folderName === "Deleted Items") folderData = folderExplorer.deletedItems;

  // Changing the folder to show mail according to folder name
  const changeFolderName = (folder) => {
    setFolderName(folder);
  };

  return (
    <div className="Layout">
      <Folders folderLists={folderLists} changeFolderName={changeFolderName} />
      <MailList folderMails={folderData} />
    </div>
  );
};
