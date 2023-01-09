import React from "react";

function BookingForm() {
  return (
    <>
      <div className="form-container">
        <form>
          <div className="input">
            <label>
              First Name :
              <input type="text" name="first name" required autoFocus />
            </label>
          </div>

          <div className="input">
            <label>
              Last Name :
              <input type="text" name="last name" required />
            </label>
          </div>

          <div className="input">
            <label>
              Email :
              <input type="text" name="email" required />
            </label>
          </div>

          <div className="input">
            <label>
              Date of Reservation:
              <input type="date" name="date" required />
            </label>
          </div>

          <div className="input">
            <label>
              Time of Reservation:
              <input type="time" name="time" required />
            </label>
          </div>

          <div className="input">
            <input id="reserveATable" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default BookingForm;
