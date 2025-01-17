import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ data, direction }) => {
  if(!Videos.length) return 'Loading...'
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {data?.map((item, idx) => {
        return (
          <Box key={idx}>
          {item?.id?.videoId && <VideoCard video={item} />}
          {item?.id?.channelId && <ChannelCard channelDetailData={item} />}
        </Box>
        )
      })}
    </Stack>
  );
};

export default Videos;
