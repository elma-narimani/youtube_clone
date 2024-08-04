import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture, demoChannelTitle } from "../utils/constants";

const ChannelCard = ({ channelDetailData, marginTop }) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "356px", md: "320px" },
      height: '326px',
      margin: 'auto',
      marginTop
    }}
  >
    <Link to={`/channel/${channelDetailData?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <CardMedia
          image={
            channelDetailData?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetailData?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: 2,
            border: "1px solid #e3e3e3",
          }}
        />
        <Typography color="gray" variant="h6" fontWeight="bold">
          {channelDetailData?.snippet?.title || demoChannelTitle}
          <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
        </Typography>
        {channelDetailData?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(
              channelDetailData?.statistics?.subscriberCount
            ).toLocaleString()}
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
