import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import './optionButtons.css'

function ToggleButtonGroupControlled() {
  const [value, setValue] = useState(1);

  const handleChange = (val) => setValue(val);

  return (
    <ToggleButtonGroup type="radio" name="temp-options" value={value} onChange={handleChange}>
      <ToggleButton id="tbg-btn-1" value={1} className="custom-toggle-btn">
        °C
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" value={2} className="custom-toggle-btn">
        K
      </ToggleButton>
      <ToggleButton id="tbg-btn-3" value={3} className="custom-toggle-btn">
        °F
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleButtonGroupControlled;