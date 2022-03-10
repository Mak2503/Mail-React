import React from "react";

export const Mail = ({ mails }) => {
  console.log(mails);
  return (
    <div className="mails">
      {mails.sender !== undefined ? (
        <div>
          <div className="mails-sub">{mails.subject}</div>
          <div className="mails-card">
            <div className="mails-sender">{mails.sender}</div>
            <div className="mails-content">{mails.content}</div>
          </div>
        </div>
      ) : (
        <div className="empty-mails">
          <img
            src="https://outlook-1.cdn.office.net/owamail/20220225004.03/resources/images/illustration_mail-ba59df675486de5cd7383ae665b0102c.svg"
            alt="img"
          />
          <div>Select an item to read</div>
        </div>
      )}
    </div>
  );
};
