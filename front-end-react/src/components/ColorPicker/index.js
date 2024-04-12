import React, { useState } from 'react';

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
      <div className="mt-2">
          <select
              id="color-picker"
              className="form-select w-full"
              value={selectedColor}
              style={{ color: selectedColor }}
              onChange={handleColorChange}
          >
              <option value="" selected>Choose Color</option>
              <option value="red" className="bg-red-500 text-white">Red</option>
              <option value="green" className="bg-green-500 text-white">Green</option>
              <option value="blue" className="bg-blue-500 text-white">Blue3</option>
              <option value="yellow" className="bg-yellow-500 text-white">Yellow</option>
              <option value="purple" className="bg-purple-500 text-white">Purple</option>
          </select>
      </div>
  );
}

export default ColorPicker;
