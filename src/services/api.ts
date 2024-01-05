import axios from 'axios';
const baseURl = 'https://rickandmortyapi.com/api';

// get all characters
export const getAllCharacters = async (pageParam: string) => {
  try {
    const { data, status } = await axios.get(`${baseURl}/character?page=${pageParam}`);
    return status === 200 ? data : null;
  } catch (error) {
    throw new Error('API request failed');
  }
};

export const getCharactersByName = async (name: string, pageParam: string) => {
  try {
    const { data, status } = await axios.get(
      `${baseURl}/character/?page=${pageParam}&name=${name}`,
    );
    return status === 200 ? data : null;
  } catch (error) {
    throw new Error('API request failed');
  }
};

const api = {
  getAllCharacters,
  getCharactersByName,
};

export default api;
