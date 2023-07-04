import React, { useState } from "react";
import {
  Button,
  Fade,
  Paper,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { v1Contents, v2Contents, v3Contents, v4Contents } from "./contents";
import { ActiveBtn, RedBtn } from "./CustButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CustTypography } from "./CustTypography";
import { styleCard, theme } from "./ThemeProvider";
import CustBadgeActive, { CustBadgeDisabled } from "./CustBadge";
//Get Date Function
import { differenceInCalendarYears, isBefore } from "date-fns";

const getAge = (dateString) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = differenceInCalendarYears(today, birthDate);
  if (
    isBefore(
      today,
      new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())
    )
  ) {
    age--;
  }
  return age;
};

export const Version1Card = (props) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, pt: "48px", pb: "48px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {v1Contents.map((list, index) => (
            <Grid item xs={2} sm={4} md={4}>
              <Paper
                sx={{ maxWidth: "auto", padding: 2, borderRadius: "10px" }}
              >
                <img src={list.image} style={styleCard.v3CardImg} />
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Grid item xs key={index}>
                    <CustTypography variant="h1" gutterBottom>
                      {list.name}, {getAge(list.birthday)}{" "}
                      {list.status == 0 ? (
                        <CustBadgeActive />
                      ) : (
                        <CustBadgeDisabled />
                      )}
                    </CustTypography>
                    <CustTypography variant="h2" gutterBottom>
                      {list.address}
                    </CustTypography>
                  </Grid>
                  <Grid
                    item
                    xs
                    key={index}
                    display={"flex"}
                    justifyContent={"end"}
                    sx={{
                      "@media (max-width:600px)": {
                        display: "flex",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <ActiveBtn
                      variant="contained"
                      color={"yellow"}
                      profile={list}
                      chatTheme={"SunShadow"}
                      status={list.status == 0 ? false : true}
                    >
                      Chat
                    </ActiveBtn>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export const Version2Card = () => {
  const [hoveredItemId, setHoveredItemId] = useState(false);

  const handleItemMouseEnter = (itemId) => {
    setHoveredItemId(itemId);
  };

  const handleItemMouseLeave = () => {
    setHoveredItemId(null);
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {v2Contents.map((list, index) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                key={list.id}
                onMouseEnter={() => handleItemMouseEnter(list.id)}
                // onMouseLeave={() => handleItemMouseLeave()}
                sx={{
                  background: `linear-gradient(178.64deg, rgba(255, 255, 255, 0.1) 30.44%, rgba(0, 0, 0, 0.5) 76.43%), url(${list.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "50%",
                  height: "350px",
                  width: "350px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  "@media (max-width:1000px)": {
                    width: "300px",
                    height: "300px",
                  },
                  "@media (max-width:600px)": {
                    width: "200px",
                    height: "200px",
                  },
                  "@media (max-width:430px)": {
                    width: "170px",
                    height: "170px",
                  },
                  "&:hover .content": {
                    display: "none",
                    transition: "0.8s",
                  },
                }}
              >
                {isMobile ? (
                  <>
                    <Box>
                      <CustTypography variant="h3" color={"#FFF"}>
                        {list.name}, {getAge(list.birthday)}{" "}
                        {list.status == 0 ? (
                          <CustBadgeActive />
                        ) : (
                          <CustBadgeDisabled />
                        )}
                      </CustTypography>
                      <CustTypography variant="h4" color={"#FFF"}>
                        {list.address}
                      </CustTypography>
                    </Box>
                    <Box>
                      <RedBtn
                        variant="contained"
                        color="red"
                        profile={list}
                        chatTheme={"BerryFire"}
                        status={list.status == 0 ? false : true}
                      >
                        Chat
                      </RedBtn>
                    </Box>
                  </>
                ) : (
                  //FOR WEB
                  <Box
                    component="div"
                    onMouseEnter={() => {}}
                    onMouseLeave={() => {}}
                  >
                    {hoveredItemId === list.id ? (
                      <Fade in={hoveredItemId}>
                        <Box display={"flex"} alignSelf={"center"}>
                          <RedBtn
                            // onClick={handleItemMouseEnter(list.id)}
                            variant="contained"
                            color="red"
                            profile={list}
                            chatTheme={"BerryFire"}
                            status={list.status == 0 ? false : true}
                          >
                            Chat
                          </RedBtn>
                        </Box>
                      </Fade>
                    ) : (
                      <div className="content">
                        <CustTypography variant="h3" color={"#FFF"}>
                          {list.name}, {getAge(list.birthday)}{" "}
                          {list.status == 0 ? (
                            <CustBadgeActive />
                          ) : (
                            <CustBadgeDisabled />
                          )}
                        </CustTypography>
                        <CustTypography variant="h4" color={"#FFF"}>
                          {list.address}
                        </CustTypography>
                      </div>
                    )}
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export const Version3Card = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, pt: "48px", pb: "48px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {v3Contents.map((list, index) => (
            <Grid item xs={2} sm={4} md={4}>
              <Paper
                elevation={0}
                sx={{ maxWidth: "auto", padding: 2, borderRadius: "10px" }}
              >
                <img src={list.image} style={styleCard.v3CardImg} />
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Grid item xs key={index}>
                    <CustTypography variant="h1" gutterBottom>
                      {list.name}, {getAge(list.birthday)}{" "}
                      {list.status == 0 ? (
                        <CustBadgeActive />
                      ) : (
                        <CustBadgeDisabled />
                      )}
                    </CustTypography>
                    <CustTypography variant="h2" gutterBottom>
                      {list.address}
                    </CustTypography>
                  </Grid>
                  <Grid
                    item
                    xs
                    key={index}
                    sx={{
                      display: "flex",
                      "@media (max-width:600px)": {
                        display: "flex",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <ActiveBtn
                      variant="contained"
                      color={"fuchsia"}
                      profile={list}
                      chatTheme={"Frostia"}
                      status={list.status == 0 ? false : true}
                    >
                      Chat
                    </ActiveBtn>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export const Version4Card = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, pt: "48px", pb: "48px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {v4Contents.map((list, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundImage: `url(${list.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "10px",
                }}
              >
                <Paper sx={styleCard.bgImage1}>
                  <Box sx={styleCard.bgLinear}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      <Grid item xs key={index}>
                        <CustTypography
                          variant="h1"
                          color={"#FFF"}
                          gutterBottom
                        >
                          {list.name}, {getAge(list.birthday)}{" "}
                          {list.status == 0 ? (
                            <CustBadgeActive />
                          ) : (
                            <CustBadgeDisabled />
                          )}
                        </CustTypography>
                        <CustTypography
                          variant="h2"
                          color={"#FFF"}
                          gutterBottom
                        >
                          {list.address}
                        </CustTypography>
                      </Grid>

                      <Grid
                        item
                        xs
                        key={index}
                        sx={{
                          display: "flex",
                          "@media (max-width:600px)": {
                            display: "flex",
                            justifyContent: "center",
                          },
                        }}
                      >
                        <ActiveBtn
                          variant="contained"
                          color={"purple"}
                          profile={list}
                          chatTheme={"UbeJam"}
                          status={list.status == 0 ? false : true}
                        >
                          Chat
                        </ActiveBtn>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
