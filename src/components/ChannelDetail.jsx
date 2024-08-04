import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videosData, setVideosData] = useState([]);
  const { id } = useParams();

  console.log("channelDetail", channelDetail);
  console.log("videosData", videosData);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet%2Cstatistics&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideosData(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(237,12,12,1) 0%, rgba(29,94,242,1) 0%, rgba(235,33,180,1) 100%, rgba(187,29,235,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetailData={channelDetail} marginTop="-110px" />
        <Box display="flex" p={2}>
          <Box sx={{ mr: { sm: "100px" } }} />
            <Videos data={videosData} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
