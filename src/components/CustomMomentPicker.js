// import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function MomentPicker({ selectedMoment, onChange }) {
  return (
    <DatePicker
      selected={selectedMoment}
      onChange={onChange}
      dateFormat="dd/MM/yyyy HH:mm"
      showTimeSelect={true} // Saati göstermemek için false yapabilirsiniz
    />
  );
}

export default MomentPicker;
