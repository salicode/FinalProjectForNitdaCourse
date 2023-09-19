import React, { useReducer } from 'react';

function BookingForm({ availableTimes, setAvailableTimes }) {
  // Define a reducer function to handle state updates
  function availableTimesReducer(state, action) {
    switch (action.type) {
      case 'UPDATE_TIMES':
        const { selectedDate } = action;
        
        // Replace this logic with your actual business logic for generating times
        // Here, we're assuming that times are generated based on the selected date.
        // You should replace this with your specific implementation.
        const updatedAvailableTimes = generateAvailableTimes(selectedDate);

        return updatedAvailableTimes;

      default:
        return state;
    }
  }

  // Use useReducer to manage the availableTimes state
  const [state, dispatch] = useReducer(availableTimesReducer, availableTimes);

  // Function to handle date change and update available times
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    // Dispatch an action to update available times based on the selected date
    dispatch({ type: 'UPDATE_TIMES', selectedDate });
  };

  const generateAvailableTimes = (date) => {
    // Replace this logic with your actual business logic for generating times
    // Here, we're assuming that times are generated based on the selected date.
    // You should replace this with your specific implementation.
    if (date === '2023-09-20') {
      return ['17:00', '18:00', '19:00'];
    } else if (date === '2023-09-21') {
      return ['18:00', '19:00', '20:00'];
    } else {
      return [];
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here and update availableTimes if needed
    // You can use setAvailableTimes to update availableTimes in the Main component
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
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
