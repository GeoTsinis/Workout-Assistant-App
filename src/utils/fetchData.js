/**
 * Portfolio deploy: RapidAPI keys must NEVER ship in REACT_APP_* vars.
 * This demo always uses local mock data — zero third-party API spend.
 */
import { BODY_PARTS, MOCK_EXERCISES } from './mockData';

export const exerciseOptions = { method: 'GET', headers: {} };
export const youtubeOptions = { method: 'GET', headers: {} };

const byId = (id) =>
  MOCK_EXERCISES.find((exercise) => exercise.id === String(id)) ||
  MOCK_EXERCISES[0];

const mockForUrl = (url = '') => {
  if (url.includes('bodyPartList')) {
    return BODY_PARTS.filter((part) => part !== 'all');
  }

  if (url.includes('/exercises/bodyPart/')) {
    const part = decodeURIComponent(url.split('/exercises/bodyPart/')[1] || '');
    return MOCK_EXERCISES.filter((exercise) => exercise.bodyPart === part);
  }

  if (url.includes('/exercises/target/')) {
    const target = decodeURIComponent(url.split('/exercises/target/')[1] || '');
    return MOCK_EXERCISES.filter((exercise) => exercise.target === target);
  }

  if (url.includes('/exercises/equipment/')) {
    const equipment = decodeURIComponent(
      url.split('/exercises/equipment/')[1] || ''
    );
    return MOCK_EXERCISES.filter((exercise) => exercise.equipment === equipment);
  }

  if (url.includes('/exercises/exercise/')) {
    const id = url.split('/exercises/exercise/')[1]?.split('?')[0];
    return byId(id);
  }

  if (url.includes('youtube') || url.includes('/search')) {
    const query = decodeURIComponent(
      (url.split('query=')[1] || 'exercise').split('&')[0]
    );
    return {
      contents: [
        {
          video: {
            videoId: 'IODxDxX7oi4',
            title: `${query} — demo form tip`,
            channelName: 'Workout Assistant Demo',
            thumbnails: [
              {
                url: '/exercises/video-thumb.svg',
              },
            ],
          },
        },
        {
          video: {
            videoId: 'U4FZC4C5Z8',
            title: `${query} — common mistakes`,
            channelName: 'Workout Assistant Demo',
            thumbnails: [
              {
                url: '/exercises/video-thumb.svg',
              },
            ],
          },
        },
      ],
    };
  }

  return MOCK_EXERCISES;
};

export const fetchData = async (url) => mockForUrl(url || '');

export { MOCK_EXERCISES, byId };
