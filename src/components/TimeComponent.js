import React, { useState } from 'react';
import { Dropdown, Form, Col, Row, Button } from 'react-bootstrap';
import CustomDatePicker from './CustomDatePicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datetime-picker/dist/DateTimePicker.css';
import YearPicker from './YearPicker'; // YearPicker dosyasından bileşeni import et
import MonthPicker from './MonthPicker';
import SeasonYearPicker from './SeasonYearPicker';
import DecadePicker from './DecadePicker';
import DecadeSeasonPicker from './DecadeSeasonPicker';
import MomentPicker from './CustomMomentPicker';


function TimeComponent() {
  const [timeExpression, setTimeExpression] = useState('');
  const [timeType, setTimeType] = useState('');
  const [selectedYearStart, setSelectedYearStart] = useState('');
  const [selectedYearEnd, setSelectedYearEnd] = useState('');
  const [selectedMonthStart, setSelectedMonthStart] = useState('');
  const [selectedMonthEnd, setSelectedMonthEnd] = useState('');
  const [selectedSeasonStart, setSelectedSeasonStart] = useState('');
  const [selectedSeasonEnd, setSelectedSeasonEnd] = useState('');
  const [selectedDecadeStart, setSelectedDecadeStart] = useState('');
  const [selectedDecadeEnd, setSelectedDecadeEnd] = useState('');
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());

  const handleExpressionChange = (expression) => {
    setTimeExpression(expression);
    if (expression === 'year') {
      setSelectedYearStart('');
      setSelectedYearEnd('');
    } else if (expression === 'month') {
      setSelectedYearStart('');
      setSelectedYearEnd('');
      setSelectedMonthStart('');
      setSelectedMonthEnd('');
    } else if (expression === 'season'){
      setSelectedYearStart('');
      setSelectedYearEnd('');
      setSelectedSeasonStart('');
      setSelectedSeasonEnd('');
    } else if (expression === 'decade'){
      setSelectedDecadeStart('');
      setSelectedDecadeEnd('');
    } else if (expression === 'decade+season'){
      setSelectedDecadeStart('');
      setSelectedDecadeEnd('');
      setSelectedMonthStart('');
      setSelectedDecadeEnd('');
    } else if (expression === 'day') {
      setSelectedStartDate('');
      setSelectedEndDate('');
    } else if (expression === 'moment') {
      setSelectedStartDate('');
      setSelectedEndDate('');
    }
  };
  const handleSubmit = () => {
    // Seçilen verileri console.log ile göster
    console.log("Selected Data:");
    console.log("Time Expression:", timeExpression);
    console.log("Time Type:", timeType);
  
    // Start ve end date değerlerini timeExpression ve timeType'a göre al
    if (timeExpression === 'year' && timeType === 'timePoint') {
      console.log("Selected Start Year:", selectedYearStart);
    } else if (timeExpression === 'year' && timeType === 'timeInterval') {
      console.log("Selected Start Year:", selectedYearStart);
      console.log("Selected End Year:", selectedYearEnd);
    } else if (timeExpression === 'month' && timeType === 'timePoint') {
      console.log("Selected Start Year:", selectedYearStart);
      console.log("Selected Start Month:", selectedMonthStart);
    } else if (timeExpression === 'month' && timeType === 'timeInterval') {
      console.log("Selected Start Year:", selectedYearStart);
      console.log("Selected Start Month:", selectedMonthStart);
      console.log("Selected End Year:", selectedYearEnd);
      console.log("Selected End Month:", selectedMonthEnd);
    } else if (timeExpression === 'season' && timeType === 'timePoint') {
      console.log("Selected Start Year:", selectedYearStart);
      console.log("Selected Start Season:", selectedSeasonStart);
    } else if (timeExpression === 'season' && timeType === 'timeInterval') {
      console.log("Selected Start Year:", selectedYearStart);
      console.log("Selected Start Season:", selectedSeasonStart);
      console.log("Selected End Year:", selectedYearEnd);
      console.log("Selected End Season:", selectedSeasonEnd);
    } else if (timeExpression === 'decade' && timeType === 'timePoint') {
      console.log("Selected Start Decade:", selectedDecadeStart);
    } else if (timeExpression === 'decade' && timeType === 'timeInterval') {
      console.log("Selected Start Decade:", selectedDecadeStart);
      console.log("Selected End Decade:", selectedDecadeEnd);
    } else if (timeExpression === 'decade+season' && timeType === 'timePoint') {
      console.log("Selected Start Decade:", selectedDecadeStart);
      console.log("Selected Start Season:", selectedSeasonStart);
    } else if (timeExpression === 'decade+season' && timeType === 'timeInterval') {
      console.log("Selected Start Decade:", selectedDecadeStart);
      console.log("Selected Start Season:", selectedSeasonStart);
      console.log("Selected End Decade:", selectedDecadeEnd);
      console.log("Selected End Season:", selectedSeasonEnd);
    } else if (timeExpression === 'day' && timeType === 'timePoint') {
      console.log("Selected Start Date:", selectedStartDate);
    } else if (timeExpression === 'day' && timeType === 'timeInterval') {
      console.log("Selected Start Date:", selectedStartDate);
      console.log("Selected End Date:", selectedEndDate);
    } else if (timeExpression === 'moment' && timeType === 'timePoint') {
      console.log("Selected Start Date:", selectedStartDate);
    } else if (timeExpression === 'moment' && timeType === 'timeInterval') {
      console.log("Selected Start Date:", selectedStartDate);
      console.log("Selected End Date:", selectedEndDate);
    }
  };

  /* const handleSubmitCustom = () => {
    console.log("Selected Data:");
    console.log("Time Expression:", timeExpression);
    console.log("Time Type:", timeType);
  
    // İfadeye göre sadece o verileri göster
    if (timeExpression === 'year') {
      console.log("Selected Year Start:", selectedYearStart);
      console.log("Selected Year End:", selectedYearEnd);
    } else if (timeExpression === 'month') {
      console.log("Selected Year Start:", selectedYearStart);
      console.log("Selected Year End:", selectedYearEnd);
      console.log("Selected Month Start:", selectedMonthStart);
      console.log("Selected Month End:", selectedMonthEnd);
    } else if (timeExpression === 'season') {
      console.log("Selected Year Start:", selectedYearStart);
      console.log("Selected Year End:", selectedYearEnd);
      console.log("Selected Season Start:", selectedSeasonStart);
      console.log("Selected Season End:", selectedSeasonEnd);
    } else if (timeExpression === 'decade') {
      console.log("Selected Decade Start:", selectedDecadeStart);
      console.log("Selected Decade End:", selectedDecadeEnd);
    } else if (timeExpression === 'decade+season') {
      console.log("Selected Decade Start:", selectedDecadeStart);
      console.log("Selected Decade End:", selectedDecadeEnd);
      console.log("Selected Season Start:", selectedSeasonStart);
      console.log("Selected Season End:", selectedSeasonEnd);
    } else if (timeExpression === 'day') {
      console.log("Selected Start Date:", selectedStartDate);
      console.log("Selected End Date:", selectedEndDate);
    } else if (timeExpression === 'moment') {
      console.log("Selected Start Date:", selectedStartDate);
      console.log("Selected End Date:", selectedEndDate);
    }
  }; */
  

  const handleTypeChange = (type) => {
    setTimeType(type);
  };

  const handleYearStartChange = (year) => {
    setSelectedYearStart(year);
  };

  const handleYearEndChange = (year) => {
    setSelectedYearEnd(year);
  };

  const handleMonthStartChange = (month) => {
    setSelectedMonthStart(month);
  };

  const handleMonthEndChange = (month) => {
    setSelectedMonthEnd(month);
  };

  const handleSeasonStartChange = (season) => {
    setSelectedSeasonStart(season);
  }

  const handleSeasonEndChange = (season) => {
    setSelectedSeasonEnd(season);
  }

  const handleDecadeStartChange = (decade) => {
    setSelectedDecadeStart(decade)
  };

  const handleDecadeEndChange = (decade) => {
    setSelectedDecadeEnd(decade)
  };



  return (
    <div className="container mt-5">
      <div className="w-75 mx-auto">
        <h1 className="mb-4">Time Component</h1>
        <Row className="mb-3">
          <Col>
            <Dropdown className="mb-3">
              <Dropdown.Toggle variant="primary" id="dropdown-expression">
                {timeExpression ? timeExpression : 'Select Time Expression'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleExpressionChange('moment')}>Moment</Dropdown.Item>
                <Dropdown.Item onClick={() => handleExpressionChange('day')}>Day</Dropdown.Item>
                <Dropdown.Item onClick={() => handleExpressionChange('month')}>Month</Dropdown.Item>
                <Dropdown.Item onClick={() => handleExpressionChange('season')}>Season</Dropdown.Item>
                <Dropdown.Item onClick={() => handleExpressionChange('year')}>Year</Dropdown.Item>
                <Dropdown.Item onClick={() => handleExpressionChange('decade')}>Decade</Dropdown.Item>
                <Dropdown.Item onClick={() => handleExpressionChange('decade+season')}>Decade + Season</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form>
              <Form.Check
                type="radio"
                label="Time Point"
                name="timeType"
                id="timePoint"
                onChange={() => handleTypeChange('timePoint')}
              />
              <Form.Check
                type="radio"
                label="Time Interval"
                name="timeType"
                id="timeInterval"
                onChange={() => handleTypeChange('timeInterval')}
              />
            </Form>
          </Col>
        </Row>
        {timeExpression === 'year' && (
          <Row className="mb-3">
            <Col>
              {(timeType === 'timePoint' || timeType === 'timeInterval') && (
                <>
                  <Form.Label>Start Time</Form.Label>
                  <YearPicker
                    selectedYear={selectedYearStart}
                    onChange={(year) => handleYearStartChange(year)}
                  />
                </>
              )}
            </Col>
            <Col>
              {timeType === 'timeInterval' && (
                <>
                  <Form.Label>End Time</Form.Label>
                  <YearPicker
                    selectedYear={selectedYearEnd}
                    onChange={(year) => handleYearEndChange(year)}
                  />
                </>
              )}
            </Col>
          </Row>
        )}
        {timeExpression === 'month' && (
          <div>
            {timeType === 'timePoint' && (
              <Row className="mb-3">
                <Col>
                  <Form.Label>Start Month</Form.Label>
                  <MonthPicker
                    selectedYear={selectedYearStart}
                    selectedMonth={selectedMonthStart}
                    onChangeYear={(year) => handleYearStartChange(year)}
                    onChangeMonth={(month) => handleMonthStartChange(month)}
                  />
                </Col>
              </Row>
            )}
            {timeType === 'timeInterval' && (
              <Row className="mb-3">
                <Col>
                  <Form.Label>Start Month</Form.Label>
                  <MonthPicker
                    selectedYear={selectedYearStart}
                    selectedMonth={selectedMonthStart}
                    onChangeYear={(year) => handleYearStartChange(year)}
                    onChangeMonth={(month) => handleMonthEndChange(month)}
                  />
                </Col>
                <Col>
                  <Form.Label>End Month</Form.Label>
                  <MonthPicker
                    selectedYear={selectedYearEnd}
                    selectedMonth={selectedMonthEnd}
                    onChangeYear={(year) => handleYearEndChange(year)}
                    onChangeMonth={(month) => handleMonthEndChange(month)}
                  />
                </Col>
              </Row>
            )}
          </div>
        )}
        {timeExpression === 'season' && (
          <div>
            {timeType === 'timePoint' && (
              <Row className="mb-3">
                <Col>
                  <Form.Label>Start Season</Form.Label>
                  <SeasonYearPicker
                    selectedYear={selectedYearStart}
                    selectedSeason={selectedSeasonStart}
                    onChangeYear={(year) => handleYearStartChange(year)}
                    onChangeSeason={(season) => handleSeasonStartChange(season)}
                  />
                </Col>
              </Row>
            )}
            {timeType === 'timeInterval' && (
              <Row className="mb-3">
                <Col>
                  <Form.Label>Start Season</Form.Label>
                  <SeasonYearPicker
                    selectedYear={selectedYearStart}
                    selectedSeason={selectedSeasonStart}
                    onChangeYear={(year) => handleYearStartChange(year)}
                    onChangeSeason={(season) => handleSeasonStartChange(season)}
                  />
                </Col>
                <Col>
                  <Form.Label>End Season</Form.Label>
                  <SeasonYearPicker
                    selectedYear={selectedYearEnd}
                    selectedSeason={selectedSeasonEnd}
                    onChangeYear={(year) => handleYearEndChange(year)}
                    onChangeSeason={(season) => handleSeasonEndChange(season)}
                  />
                </Col>
              </Row>
            )}
          </div>
        )}
        {timeExpression === 'decade' && (
          <Row className="mb-3">
            <Col>
              {(timeType === 'timePoint' || timeType === 'timeInterval') && (
                <>
                  <Form.Label>Start Time</Form.Label>
                  <DecadePicker
                    selectedDecade={selectedDecadeStart}
                    onChange={(decade) => handleDecadeStartChange(decade)}
                  />
                </>
              )}
            </Col>
            <Col>
              {timeType === 'timeInterval' && (
                <>
                  <Form.Label>End Time</Form.Label>
                  <DecadePicker
                    selectedDecade={selectedDecadeEnd}
                    onChange={(decade) => handleDecadeEndChange(decade)}
                  />
                </>
              )}
            </Col>
          </Row>
        )}
        {timeExpression === 'decade+season' && (
  <Row className="mb-3">
    <Col>
      {(timeType === 'timePoint' || timeType === 'timeInterval') && (
        <>
          <Form.Label>Start Time</Form.Label>
          <DecadeSeasonPicker
            selectedDecade={selectedDecadeStart}
            selectedSeason={selectedSeasonStart}
            onChangeDecade={(decade) => handleDecadeStartChange(decade)}
            onChangeSeason={(season) => handleSeasonStartChange(season)}
          />
        </>
      )}
    </Col>
    <Col>
      {timeType === 'timeInterval' && (
        <>
          <Form.Label>End Time</Form.Label>
          <DecadeSeasonPicker
            selectedDecade={selectedDecadeEnd}
            selectedSeason={selectedSeasonEnd}
            onChangeDecade={(decade) => handleDecadeEndChange(decade)}
            onChangeSeason={(season) => handleSeasonEndChange(season)}
          />
        </>
      )}
    </Col>
  </Row>
)}
        {timeExpression === 'day' && (
        <div>
          {timeType === 'timePoint' && (
            <Row className="mb-3">
              <Col>
              <Form.Label>Start Date</Form.Label>
                <CustomDatePicker
                  selectedDate={selectedStartDate}
                  onChange={(date) => {
                    setSelectedStartDate(date);
                    console.log(date);
                  }}
                />
              </Col>
            </Row>
          )}
          {timeType === 'timeInterval' && (
            <Row className="mb-3">
              <Col>
                <Form.Label>Start Date</Form.Label>
                <CustomDatePicker
                  selectedDate={selectedStartDate}
                  onChange={(date) => {
                    setSelectedStartDate(date);
                    console.log(date);
                  }}
                />
              </Col>
              <Col>
                <Form.Label>End Date</Form.Label>
                <CustomDatePicker
                  selectedDate={selectedEndDate}
                  onChange={(date) => {
                    setSelectedEndDate(date);
                    console.log(date);
                  }}
                />
              </Col>
            </Row>
          )}
        </div>
      )}
        {timeExpression === 'moment' && (
  <div>
    {timeType === 'timePoint' && (
      <Row className="mb-3">
        <Col>
          <Form.Label>Start Date</Form.Label>
          <MomentPicker
            selectedMoment={selectedStartDate}
            onChange={(date) => {
              setSelectedStartDate(date);
              console.log(date);
            }}
          />
        </Col>
      </Row>
    )}
    {timeType === 'timeInterval' && (
      <Row className="mb-3">
        <Col>
          <Form.Label>Start Date</Form.Label>
          <MomentPicker
            selectedMoment={selectedStartDate}
            onChange={(date) => {
              setSelectedStartDate(date);
              console.log(date);
            }}
          />
        </Col>
        <Col>
          <Form.Label>End Date</Form.Label>
          <MomentPicker
            selectedMoment={selectedEndDate}
            onChange={(date) => {
              setSelectedEndDate(date);
              console.log(date);
            }}
          />
        </Col>
      </Row>
    )}
  </div>
)}

        <Row className="justify-content-center">
          <Col xs="auto">
          <Button variant="primary" onClick={handleSubmit}>Submit</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default TimeComponent;