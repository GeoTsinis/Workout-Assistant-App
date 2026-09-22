import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { byId, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState(null);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const load = async () => {
      // Resolve from local mocks first so detail never depends on network.
      const detail = byId(id);
      setExerciseDetail(detail);

      const videosData = await fetchData(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${encodeURIComponent(
          detail.name
        )}`
      );
      setExerciseVideos(
        Array.isArray(videosData?.contents) ? videosData.contents : []
      );

      const targetData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/target/${encodeURIComponent(
          detail.target
        )}`
      );
      setTargetMuscleExercises(Array.isArray(targetData) ? targetData : []);

      const equipmentData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/equipment/${encodeURIComponent(
          detail.equipment
        )}`
      );
      setEquipmentExercises(Array.isArray(equipmentData) ? equipmentData : []);
    };

    load();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail?.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
