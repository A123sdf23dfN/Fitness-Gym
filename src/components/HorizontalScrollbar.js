import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";

import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollPrev()}
      className="left-arrow"
      sx={{ cursor: "pointer", marginRight: "10px" }}
    >
      <img src={LeftArrowIcon} alt="Left arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollNext()}
      className="right-arrow"
      sx={{ cursor: "pointer", marginLeft: "10px" }}
    >
      <img src={RightArrowIcon} alt="Right arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {bodyParts ? (
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;
