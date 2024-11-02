import React, { useState } from 'react';
import TagList from './TagList';
import TagForm from './TagForm';

const TagManagement = () => {
  const [refreshList, setRefreshList] = useState(false);
  const [tagToEdit, setTagToEdit] = useState(null);

  const handleSave = () => {
    setRefreshList(!refreshList);
    setTagToEdit(null);
  };

  const handleEdit = (tag) => {
    setTagToEdit(tag);
  };

  return (
    <div>
      <TagForm tagToEdit={tagToEdit} onSave={handleSave} />
      <TagList refresh={refreshList} onEdit={handleEdit} />
    </div>
  );
};

export default TagManagement;
