import React, { useState } from 'react';
import axios from 'axios';
import { useSwapping } from '../../Components/UI/SwappingContext';
import '../../Assets/CSS/Swapping.css';


const SwappingPage = () => {
  const { dispatch } = useSwapping();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [quality, setQuality] = useState('Average');
  const [successMessage, setSuccessMessage] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert('Please upload an image of the dress.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('quality', quality);

    try {
      await axios.post('http://localhost:8080/api/swapping/dresses', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      dispatch({ type: 'ADD_DRESS', payload: { name, description, image: URL.createObjectURL(image), quality } });
      setName('');
      setDescription('');
      setImage(null);
      setQuality('Average');
      setSuccessMessage('Dress added successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      alert('Failed to add dress. Please try again.');
    }
  };

  return (
    <div>
    
      <div className='swappingpage'>
        <h2>Add a Dress</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} required />
          </div>
          <div>
            <label>Quality</label>
            <select value={quality} onChange={(e) => setQuality(e.target.value)} required>
              <option value="Average">Average</option>
              <option value="Good">Good</option>
              <option value="Excellent">Excellent</option>
            </select>
          </div>
          <button type="submit">Add Dress</button>
        </form>
      </div>
    </div>
  );
};

export default SwappingPage;