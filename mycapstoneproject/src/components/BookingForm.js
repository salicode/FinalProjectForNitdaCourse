import React, { useReducer, useState } from 'react';

function BookingForm({ availableTimes, setAvailableTimes }) {
  // Define a reducer function to handle state updates
  function availableTimesReducer(state, action) {
    switch (action.type) {
      case 'UPDATE_TIMES':
        const { selectedDate } = action;

        const updatedAvailableTimes = generateAvailableTimes(selectedDate);

        return updatedAvailableTimes;

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(availableTimesReducer, availableTimes);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    date: '',
    guests: '1',
    occasion: 'Birthday',
  });

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    dispatch({ type: 'UPDATE_TIMES', selectedDate });
    setFormData({ ...formData, date: selectedDate });
  };

  const generateAvailableTimes = (date) => {
    if (date === '2023-09-20') {
      return ['17:00', '18:00', '19:00'];
    } else if (date === '2023-09-21') {
      return ['18:00', '19:00', '20:00'];
    } else {
      return [];
    }
  };

  const validateForm = () => {
    const errors = {};

    // Validate the date field (required)
    if (!formData.date) {
      errors.date = 'Please choose a date.';
    }

    // Validate the guests field (required, min, max)
    if (!formData.guests) {
      errors.guests = 'Please enter the number of guests.';
    } else if (formData.guests < 1) {
      errors.guests = 'Minimum 1 guest is required.';
    } else if (formData.guests > 10) {
      errors.guests = 'Maximum 10 guests allowed.';
    }

    // Validate the occasion field (required)
    if (!formData.occasion) {
      errors.occasion = 'Please select an occasion.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the form is valid
    if (validateForm()) {
      // Handle form submission here if the form is valid
    }
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        onChange={handleDateChange}
        required
      />
      {formErrors.date && <p className="error">{formErrors.date}</p>}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        required
      >
        {state.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
        required
      />
      {formErrors.guests && <p className="error">{formErrors.guests}</p>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {formErrors.occasion && <p className="error">{formErrors.occasion}</p>}

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
