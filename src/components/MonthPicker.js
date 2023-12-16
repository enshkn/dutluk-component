import React from 'react';
import { Form } from 'react-bootstrap';

function MonthPicker({ selectedYear, selectedMonth, onChangeYear, onChangeMonth }) {
  const years = [];
  const currentYear = new Date().getFullYear();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
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
        value={selectedMonth}
        onChange={(e) => {
          onChangeMonth(e.target.value);
        }}
      >
        <option value="">Select Month</option>
        {months.map((month, index) => (
          <option key={index} value={index + 1}>
            {month}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}

export default MonthPicker;
