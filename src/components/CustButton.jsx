import React, { useEffect, useState } from "react";
import { Box, Button, Modal, ThemeProvider } from "@mui/material";
import { ChatIcon } from "./CustIcons";
import { theme } from "./ThemeProvider";
import styled from "@emotion/styled";
import MessageIcon from "@mui/icons-material/Message";
import CloseIcon from "@mui/icons-material/Close";
import envConfig from "../config/envConfig";

export const ActiveBtn = ({
  variant,
  children,
  color,
  status,
  profile = null,
  chatTheme,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const popupId = open ? "chat-widget-popup" : undefined;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          variant={variant}
          color={color}
          startIcon={<MessageIcon sx={{ fontSize: "24px" }} />}
          onClick={handleOpenModal}
          fullWidth
          disabled={status}
          sx={{
            borderRadius: "10px",
            color: "#FFF",
            boxShadow: "1px 4px 10px rgba(0,0,0,0.15)",
          }}
        >
          {children}
        </Button>

        <Modal
          open={open}
          onClose={handleCloseModal}
          aria-labelledby="chat-widget-modal"
          aria-describedby="chat-widget-description"
        >
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "flex-end",
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "650px",
              height: "722px",
              outline: "none",
              "@media (max-width:768px)": {
                width: "100%",
                height: "100%",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                right: 0,
                marginRight: 3,
                marginTop: 3,
              }}
            >
              <Button
                variant="text"
                color="white"
                onClick={handleCloseModal}
                sx={{ padding: "24px", borderRadius: "50%" }}
              >
                <CloseIcon />
              </Button>
            </Box>
            <iframe
              title="chat-widget-iframe"
              // src={`https://staging.chat.tiro.nmscreative.com/chat?firstName=${profile?.name}&birthday=${profile?.birthday}&maritalStatus=${profile?.maritalStatus}&backNavigationURL=${window.location.origin}&location=${profile?.address}&avatar=${window.location.origin}${profile?.image}&redirectUrl=https://b2bdatingsites.net`}
              src={`${envConfig?.CHAT_URL}?firstName=${profile?.name}&birthday=${profile?.birthday}&maritalStatus=${profile?.maritalStatus}&backNavigationURL=${window.location.origin}&location=${profile?.address}&avatar=${window.location.href}${profile?.image}&redirectUrl=https://b2bdatingsites.net&chatTheme=${chatTheme}`}
              style={{
                width: "100%",
                height: "100%",
                border: 0,
                touchAction: "manipulation",
              }}
            />
          </Box>
        </Modal>
      </ThemeProvider>
    </>
  );
};

export const RedBtn = ({
  variant,
  children,
  color,
  status,
  chatTheme,
  profile = null,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
    console.log("Hello")
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const popupId = open ? "chat-widget-popup" : undefined;
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          variant={variant}
          color={color}
          startIcon={<MessageIcon />}
          onClick={handleOpenModal}
          disabled={status}
          sx={{
            borderRadius: "10px",
            color: "#FFF",
            boxShadow: "1px 4px 10px rgba(0,0,0,0.15)",
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "12px 20px",
          }}
        >
          {children}
        </Button>

        <Modal
          open={open}
          onClose={handleCloseModal}
          aria-labelledby="chat-widget-modal"
          aria-describedby="chat-widget-description"
        >
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "flex-end",
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "650px",
              height: "722px",
              outline: "none",
              "@media (max-width:768px)": {
                width: "100%",
                height: "100%",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                right: 0,
                marginRight: 3,
                marginTop: 3,
              }}
            >
              <Button
                variant="text"
                color="white"
                onClick={handleCloseModal}
                sx={{ padding: "24px", borderRadius: "50%" }}
              >
                <CloseIcon />
              </Button>
            </Box>
            <iframe
              title="chat-widget-iframe"
              src={`${envConfig?.CHAT_URL}?firstName=${profile?.name}&birthday=${profile?.birthday}&maritalStatus=${profile?.maritalStatus}&backNavigationURL=${window.location.origin}&location=${profile?.address}&avatar=${window.location.href}${profile?.image}&redirectUrl=https://b2bdatingsites.net&chatTheme=${chatTheme}`}
              style={{
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </Box>
        </Modal>
      </ThemeProvider>
    </>
  );
};
