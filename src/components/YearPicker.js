import React from 'react';
import { Form } from 'react-bootstrap';

function YearPicker({ selectedYear, onChange }) {
  const years = [];
  const currentYear = new Date().getFullYear();

  // Geçmişten bu yıla kadar olan yılları listeye ekleme
  for (let year = currentYear; year >= 1900; year--) {
    years.push(year);
  }

  return (
    <Form.Select
      value={selectedYear}
      onChange={(e) => {
        onChange(parseInt(e.target.value));
      }}
    >
      <option value="">Select Year</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </Form.Select>
  );
}

export default YearPicker;
