import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CardActionArea } from "@mui/material";
import { IconSpacer, LineBreak } from "./styles.js";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
    color: "green",
  }),
}));

let likedImages = [];

const likeImage = (event, props) => {
  var image = document.getElementById("LikeButton");
  if (event.target.style.color != "red") {
    event.target.style.color = "red";
    image.title = "Unlike Image";
  } else {
    event.target.style.color = "gray";
    image.title = "Like Image";
  }
};

export const CardMod = styled(Card)`
  width: 50vw;
  margin: 5vh;
`;

export const CardMediaMod = styled(CardMedia)`
  height: 60vh;
`;

export const LikeButtonMod = styled(FavoriteIcon)`
  background-color: red;
`;

export default function SpaceCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <CardMod>
        <CardMediaMod
          component="img"
          title={props.title}
          aria-label={props.title}
          height="194"
          image={props.image}
          alt={props.title}
        />
        <CardHeader
          action={<IconButton aria-label="settings"></IconButton>}
          title={props.title}
          subheader={props.date}
        />
        <CardActions disableSpacing>
          <IconButton
            aria-label="Like Image"
            onClick={likeImage}
            id="LikeButton"
            title="Like Image"
          >
            <CardActionArea>
              <FavoriteIcon style={{ fontSize: 35 }} />
            </CardActionArea>
          </IconButton>
          <IconSpacer title={"Share on Facebook"}>
            <FacebookShareButton
              url={props.image}
              aria-label={"Share on Facebook"}
            >
              <FacebookIcon size={32} round={true} logoFillColor={"black"} />
            </FacebookShareButton>
          </IconSpacer>
          <IconSpacer title={"Share on Linkedin"}>
            <LinkedinShareButton
              url={props.image}
              aria-label={"Share on Linkedin"}
            >
              <LinkedinIcon
                size={32}
                round={true}
                logoFillColor={"black"}
                title={"Share on Linkedin"}
              />
            </LinkedinShareButton>
          </IconSpacer>

          <IconSpacer title={"Share on Twitter"}>
            <TwitterShareButton
              url={props.image}
              aria-label={"Share on Twitter"}
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
          </IconSpacer>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            title="More Details"
            id="Expand"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <LineBreak></LineBreak>
          <CardContent>
            <Typography paragraph>{props.summary}</Typography>
          </CardContent>
        </Collapse>
      </CardMod>
    </>
  );
}
