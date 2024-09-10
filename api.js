import axios from 'axios';

const API_URL = 'http://localhost:8080/api/generate-roadmap';

export const generateRoadmap = async (goal) => {
  try {
    const response = await axios.post(API_URL, { goal });
    return response.data;
  } catch (error) {
    console.error('Error generating roadmap:', error);
    return '';
  }
};
