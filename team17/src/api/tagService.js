import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/tags';

export const getAllTags = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const getTagById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

export const createTag = async (tag) => {
  const response = await axios.post(BASE_URL, tag);
  return response.data;
};

export const updateTag = async (id, updatedTag) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updatedTag);
  return response.data;
};

export const deleteTag = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};
