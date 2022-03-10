import React, { useState } from "react";
import { Mail } from "./Mail";
import "./Layout.css";

export const MailList = (props) => {
  const { folderMails } = props;
  const [openedMail, setOpenedMail] = useState({});
  const clickMail = (mail) => {
    setOpenedMail(mail);
    mail.unread = false;
  };
  // const flaggedMails = [];
  // const filterFlagged = () => {
  //   flaggedMails.push(folderMails.every((mail) => mail.isFlagged === true));
  // };
  // console.log(flaggedMails);
  const setFlag = (mail) => {
    mail.isFlagged = true;
  };

  return (
    <div className="mail-section">
      <div className="mail">
        <div className="mail-filter">Filter</div>
        {folderMails.map((mail) => {
          return (
            <div
              className={
                mail.unread ? "unopened-mail-list" : "opened-mail-list"
              }
              key={mail.mId}
              onClick={() => clickMail(mail)}
            >
              <div className="mail-list-head">
                <div className="mail-list-content">{mail.sender}</div>
                <span onClick={() => setFlag(mail)}>flag</span>
              </div>
              <div className="mail-list-content">{mail.subject}</div>
              <div className="mail-list-content">{mail.content}</div>
            </div>
          );
        })}
      </div>
      <Mail mails={openedMail} />
    </div>
  );
};
