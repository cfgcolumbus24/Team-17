import React, { useState } from 'react';
import { createTag, updateTag } from '../api/tagService';

const TagForm = ({ tagToEdit, onSave }) => {
  const [tag, setTag] = useState(tagToEdit ? tagToEdit.tag : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (tagToEdit) {
      await updateTag(tagToEdit.id, { tag });
    } else {
      await createTag({ tag });
    }
    onSave(); // Callback to refresh the tag list
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tag:
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          required
        />
      </label>
      <button type="submit">{tagToEdit ? 'Update' : 'Add'} Tag</button>
    </form>
  );
};

export default TagForm;
