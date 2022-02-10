import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// DateSelector from https://reactdatepicker.com/#example-month-picker

const DateSelector = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
        />
    );
};



export default DateSelector;