import { BODY_PARTS, MOCK_EXERCISES } from './mockData';

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY || '',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY || '',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

const mockForUrl = (url) => {
  if (url.includes('bodyPartList')) {
    return BODY_PARTS.filter((part) => part !== 'all');
  }

  if (url.includes('/exercises/bodyPart/')) {
    const part = decodeURIComponent(url.split('/exercises/bodyPart/')[1] || '');
    return MOCK_EXERCISES.filter((exercise) => exercise.bodyPart === part);
  }

  if (url.includes('/exercises/exercise/')) {
    const id = url.split('/exercises/exercise/')[1];
    return MOCK_EXERCISES.find((exercise) => exercise.id === id) || MOCK_EXERCISES[0];
  }

  if (url.includes('youtube') || url.includes('search')) {
    return {
      contents: [
        {
          video: {
            videoId: 'IODxDxX7oi4',
            title: 'Demo exercise form tip',
            channelName: 'Workout Assistant Demo',
          },
        },
      ],
    };
  }

  return MOCK_EXERCISES;
};

export const fetchData = async (url, options) => {
  try {
    if (!process.env.REACT_APP_RAPID_API_KEY) {
      return mockForUrl(url);
    }

    const response = await fetch(url, options);
    if (!response.ok) {
      return mockForUrl(url);
    }

    const data = await response.json();
    if (
      data == null ||
      data.message ||
      data.error ||
      (Array.isArray(data) === false &&
        !url.includes('exercise/') &&
        !url.includes('youtube') &&
        !url.includes('search'))
    ) {
      return mockForUrl(url);
    }

    return data;
  } catch {
    return mockForUrl(url);
  }
};
