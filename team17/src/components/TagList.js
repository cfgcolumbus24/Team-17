import React, { useEffect, useState } from 'react';
import { getAllTags, deleteTag } from '../api/tagService';

const TagList = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = async () => {
    const tagsData = await getAllTags();
    setTags(tagsData);
  };

  const handleDelete = async (id) => {
    await deleteTag(id);
    fetchTags(); // Refresh the list after deletion
  };

  return (
    <div>
      <h1>Tags</h1>
      <ul>
        {tags.map((tag) => (
          <li key={tag.id}>
            {tag.tag}
            <button onClick={() => handleDelete(tag.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagList;
