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

// Local public assets — reliable in CRA + Vercel (no data-URI / CDN issues).
export const MOCK_EXERCISES = [
  {
    id: '0001',
    name: 'barbell bench press',
    bodyPart: 'chest',
    target: 'pectorals',
    equipment: 'barbell',
    gifUrl: '/exercises/bench-press.svg',
    description:
      'Lie on a bench, lower the bar to mid-chest, then press up. Keep feet planted and wrists stacked over elbows.',
  },
  {
    id: '0002',
    name: 'bodyweight squat',
    bodyPart: 'upper legs',
    target: 'quads',
    equipment: 'body weight',
    gifUrl: '/exercises/squat.svg',
    description:
      'Stand tall, sit the hips back and down until thighs are about parallel, then drive through the mid-foot to stand.',
  },
  {
    id: '0003',
    name: 'dumbbell curl',
    bodyPart: 'upper arms',
    target: 'biceps',
    equipment: 'dumbbell',
    gifUrl: '/exercises/curl.svg',
    description:
      'Hold dumbbells at your sides and curl them up without swinging. Squeeze at the top, then lower with control.',
  },
  {
    id: '0004',
    name: 'pull up',
    bodyPart: 'back',
    target: 'lats',
    equipment: 'body weight',
    gifUrl: '/exercises/pull-up.svg',
    description:
      'Hang from a bar, pull your chest toward it by driving elbows down, then lower fully without losing shoulder control.',
  },
  {
    id: '0005',
    name: 'plank',
    bodyPart: 'waist',
    target: 'abs',
    equipment: 'body weight',
    gifUrl: '/exercises/plank.svg',
    description:
      'Hold a straight line from head to heels. Brace your core, squeeze glutes, and keep hips from sagging or piking.',
  },
  {
    id: '0006',
    name: 'jumping rope',
    bodyPart: 'cardio',
    target: 'cardiovascular system',
    equipment: 'rope',
    gifUrl: '/exercises/jump-rope.svg',
    description:
      'Stay light on the balls of your feet, keep elbows close, and spin the rope with wrists — not big arm swings.',
  },
  {
    id: '0007',
    name: 'shoulder press',
    bodyPart: 'shoulders',
    target: 'delts',
    equipment: 'dumbbell',
    gifUrl: '/exercises/shoulder-press.svg',
    description:
      'Press dumbbells overhead from shoulder height. Avoid excessive lower-back arch; lock out softly at the top.',
  },
  {
    id: '0008',
    name: 'calf raise',
    bodyPart: 'lower legs',
    target: 'calves',
    equipment: 'body weight',
    gifUrl: '/exercises/calf-raise.svg',
    description:
      'Rise onto the balls of your feet, pause, then lower your heels under control for a full stretch.',
  },
  {
    id: '0009',
    name: 'tricep dip',
    bodyPart: 'upper arms',
    target: 'triceps',
    equipment: 'body weight',
    gifUrl: '/exercises/dip.svg',
    description:
      'Support yourself on parallel bars or a bench, lower until elbows are about 90°, then press back up.',
  },
];
