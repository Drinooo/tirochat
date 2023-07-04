import { Modal } from "@mui/material";
import React from "react";
import { styled } from "styled-components";

const useStyles = styled((theme) => ({
    modalContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "none",
      [theme.breakpoints.down("sm")]: {
        width: "100vw",
        height: "100vh",
      },
      [theme.breakpoints.up("md")]: {
        width: 400,
        height: 300,
      },
    },
    iframe: {
      width: "100%",
      height: "100%",
      border: "none",
    },
  }));

export const CustModal = ({ state, profile=null }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const popupId = open ? "chat-widget-popup" : undefined;
  
  return (
    <Modal
      // open={open}
      // onClose={handleCloseModal}
      aria-labelledby="chat-widget-modal"
      aria-describedby="chat-widget-description"
    >
      <div
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
          outline: "none",
        }}
      >
        <iframe
          title="chat-widget-iframe"
          src={`https://staging.chat.tiro.nmscreative.com/chat?firstName=${profile?.name}&birthday=${profile?.birthday}&maritalStatus=${profile?.maritalStatus}&location=${profile?.address}&avatar=${window.location.origin}${profile?.image}&redirectUrl=https://b2bdatingsites.net`}
          className={classes.iframe}
          style={{
            width: "100%",
            height: "100%",
            border: 0,
          }}
        />
      </div>
    </Modal>
  );
};
