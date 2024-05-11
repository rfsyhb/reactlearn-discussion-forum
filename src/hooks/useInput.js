import { useState } from 'react';

export default function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  function handleValueChange(event) {
    setValue(event.target.value);
  }

  return [value, handleValueChange, setValue];
}
