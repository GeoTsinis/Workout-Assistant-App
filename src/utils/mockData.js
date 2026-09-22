export const BODY_PARTS = [
  'all',
  'back',
  'cardio',
  'chest',
  'lower arms',
  'lower legs',
  'neck',
  'shoulders',
  'upper arms',
  'upper legs',
  'waist',
];

// Local SVG data-URI thumbnails — no third-party CDN / API dependency.
const thumb = (label, color) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="${color}" offset="0"/><stop stop-color="#111827" offset="1"/>
      </linearGradient></defs>
      <rect width="400" height="300" fill="url(#g)"/>
      <text x="200" y="150" fill="white" font-size="22" font-family="Arial,sans-serif"
        text-anchor="middle" dominant-baseline="middle">${label}</text>
    </svg>`
  )}`;

export const MOCK_EXERCISES = [
  {
    id: '0001',
    name: 'barbell bench press',
    bodyPart: 'chest',
    target: 'pectorals',
    equipment: 'barbell',
    gifUrl: thumb('Bench Press', '#ef4444'),
  },
  {
    id: '0002',
    name: 'bodyweight squat',
    bodyPart: 'upper legs',
    target: 'quads',
    equipment: 'body weight',
    gifUrl: thumb('Squat', '#f59e0b'),
  },
  {
    id: '0003',
    name: 'dumbbell curl',
    bodyPart: 'upper arms',
    target: 'biceps',
    equipment: 'dumbbell',
    gifUrl: thumb('Curl', '#3b82f6'),
  },
  {
    id: '0004',
    name: 'pull up',
    bodyPart: 'back',
    target: 'lats',
    equipment: 'body weight',
    gifUrl: thumb('Pull Up', '#8b5cf6'),
  },
  {
    id: '0005',
    name: 'plank',
    bodyPart: 'waist',
    target: 'abs',
    equipment: 'body weight',
    gifUrl: thumb('Plank', '#10b981'),
  },
  {
    id: '0006',
    name: 'jumping rope',
    bodyPart: 'cardio',
    target: 'cardiovascular system',
    equipment: 'rope',
    gifUrl: thumb('Jump Rope', '#ec4899'),
  },
  {
    id: '0007',
    name: 'shoulder press',
    bodyPart: 'shoulders',
    target: 'delts',
    equipment: 'dumbbell',
    gifUrl: thumb('Shoulder Press', '#06b6d4'),
  },
  {
    id: '0008',
    name: 'calf raise',
    bodyPart: 'lower legs',
    target: 'calves',
    equipment: 'body weight',
    gifUrl: thumb('Calf Raise', '#84cc16'),
  },
  {
    id: '0009',
    name: 'tricep dip',
    bodyPart: 'upper arms',
    target: 'triceps',
    equipment: 'body weight',
    gifUrl: thumb('Tricep Dip', '#f97316'),
  },
];
