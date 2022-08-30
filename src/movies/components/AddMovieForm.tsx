import React, { useState } from 'react';

import { InputField, Button } from 'shared/components';
import { MoviesAction } from 'types';

interface AddMovieFormProps {
  onSubmit: (data: Record< "imageUrl" | "title" | "subtitle" | "description", string>) => void,
  onCancel: () => void,
}

export function AddMovieForm({ onSubmit, onCancel }: AddMovieFormProps) {
  // TODO: Implement form for adding a movie

  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    onSubmit({
      imageUrl,
      title,
      subtitle,
      description,
    });
  }
  
  return (
    <form className="p-4 ">
      <InputField
        name="Url"
        value={imageUrl}
        setter={setImageUrl}
      />
      <InputField
        name="Title"
        value={title}
        setter={setTitle}
      />
      <InputField
        name="Subtitle"
        value={subtitle}
        setter={setSubtitle}
      />
      <InputField
        name="Description"
        value={description}
        setter={setDescription}
      />
      <div className="text-center">
      <Button onClick={handleSubmit}>
        Submit
      </Button>
      <Button onClick={onCancel}>
        Cancel
      </Button>
      </div>
    </form>
  );
}
