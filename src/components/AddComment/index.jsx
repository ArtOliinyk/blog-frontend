import React from "react";

import styles from "./AddComment.module.scss";

import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

export const Index = () => {
  return (
    <>
      <div className={styles.root}>
        <Avatar
          classes={{ root: styles.avatar }}
          src="https://www.google.com/imgres?imgurl=https%3A%2F%2F24studio.kiev.ua%2Fimages%2FA1%2Frock1.jpg.pagespeed.ce.jbnEaeHYwf.jpg&imgrefurl=https%3A%2F%2F24studio.kiev.ua%2Fnovosti%2F138-rock&tbnid=e580RPwxk7khUM&vet=12ahUKEwje353Qr8n4AhVyl4sKHQK9DSIQMygLegUIARC-AQ..i&docid=QytskXUI6hSxpM&w=2480&h=1772&q=%D0%B4%D1%83%D0%B5%D0%B9%D0%BD%20%D0%B4%D0%B6%D0%BE%D0%BD%D1%81%D0%BE%D0%BD&ved=2ahUKEwje353Qr8n4AhVyl4sKHQK9DSIQMygLegUIARC-AQ"
        />
        <div className={styles.form}>
          <TextField
            label="Написати коментар"
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
          />
          <Button variant="contained">Відправити</Button>
        </div>
      </div>
    </>
  );
};
