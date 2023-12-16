import React from 'react';
import { Form } from 'react-bootstrap';

function SeasonYearPicker({ selectedYear, selectedSeason, onChangeYear, onChangeSeason }) {
  const years = [];
  const currentYear = new Date().getFullYear();
  const season = [
    'Fall', 'Winter', 'Spring', 'Summer'
  ];

  // Geçmişten bu yıla kadar olan yılları listeye ekleme
  for (let year = currentYear; year >= 1900; year--) {
    years.push(year);
  }

  return (
    <div className="d-flex align-items-center">
      <Form.Select
        className="me-2"
        value={selectedYear}
        onChange={(e) => {
          onChangeYear(parseInt(e.target.value));
        }}
      >
        <option value="">Select Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Form.Select>

      <Form.Select
        value={selectedSeason}
        onChange={(e) => {
          onChangeSeason(e.target.value);
        }}
      >
        <option value="">Select Season</option>
        {season.map((season, index) => (
          <option key={index} value={index + 1}>
            {season}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}

export default SeasonYearPicker;
