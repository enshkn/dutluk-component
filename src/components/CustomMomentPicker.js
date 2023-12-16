import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function MomentPicker({ selectedMoment, onChange }) {
  return (
    <DatePicker
      selected={selectedMoment}
      onChange={onChange}
      dateFormat="dd/MM/yyyy HH:mm" // Tarih ve saat formatı
      showTimeSelect // Saati göstermek için true
      timeFormat="HH:mm" // Sadece saat formatı
      timeIntervals={1} // Saat aralığı belirleme (15 dakika aralıklarla)
    />
  );
}

export default MomentPicker;
