import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos = [], name }) => {
  const videos = (exerciseVideos || []).filter(
    (item) => item?.video?.videoId && item?.video?.thumbnails?.[0]?.url
  );

  if (!videos.length) {
    return (
      <Box sx={{ marginTop: { lg: '80px', xs: '20px' } }} p="20px">
        <Typography variant="h4" mb="16px">
          Watch{' '}
          <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>
            {name || 'exercise'}
          </span>{' '}
          videos
        </Typography>
        <Typography color="text.secondary">
          Demo mode uses local placeholders — no YouTube API key required.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ marginTop: { lg: '80px', xs: '20px' } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{' '}
        <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>
          {name}
        </span>{' '}
        exercise videos.
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '40px', xs: '20px' },
        }}
      >
        {videos.slice(0, 6).map((item, index) => (
          <a
            key={`${item.video.videoId}-${index}`}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h6" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="body2" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
