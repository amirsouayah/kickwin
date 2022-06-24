// Sample events calendar build, explained and detailed over at
// https://justacoding.blog/react-calendar-component-example-with-events/

import React, { Fragment, useEffect, useState } from "react";
import './calendar.css';
// Some config for convenience
const MOCK_LOADING_TIME = 1000
const SAMPLE_META = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

// Utilities/helpers
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

const DAYS_SHORT = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const toStartOfDay = (date) => {
  const newDate = new Date(date)
  newDate.setHours(0)
  newDate.setMinutes(0)
  newDate.setSeconds(0)
  newDate.setMilliseconds(0)
  return newDate
}

const pad = (input) => {
  return input < 10 ? "0" + input : input
}

// Could be used to filter out invalid events data also
// (ie. missing properties) or events that can't be parsed 
// to contain valid to/from dates
const parseEvents = (events) => {
  return events.map(event => {
    const from = new Date(event.dateFrom)
    const to = new Date(event.dateTo)

    return {
      ...event,
      from,
      to
    }
  })
}

const findEventsForDate = (events, date) => {
  const dateTime = date.getTime()

  return events.filter(event => {
    const eventFromTime = toStartOfDay(event.from).getTime()
    const eventToTime = toStartOfDay(event.to).getTime()

    return (dateTime >= eventFromTime && dateTime <= eventToTime)
  })
}

// Top bar, contains the month/year combo as well as back/forward links
const Navigation = ({ date, setDate, setShowingEventForm }) => {
  return (
    <div className="navigation">
      <div className="back" onClick={() => {
        const newDate = new Date(date)
        newDate.setMonth(newDate.getMonth() - 1)
        setDate(newDate)
      }}>
        {"<-"} {MONTHS[date.getMonth() == 0 ? 11 : date.getMonth() - 1]}
      </div>

      <div className="monthAndYear">
        {MONTHS[date.getMonth()]} {date.getFullYear()}
      </div>

      <div className="forward" onClick={() => {
        const newDate = new Date(date)
        newDate.setMonth(newDate.getMonth() + 1)
        setDate(newDate)
      }}>
        {MONTHS[date.getMonth() == 11 ? 0 : date.getMonth() + 1]} {"->"}
      </div>
    </div>
  )
}

// Week day headers: Mon, Tue, Wed etc
const DayLabels = () => {
  return DAYS_SHORT.map((dayLabel, index) => {
    return <div className="dayLabel cell" key={index}>{dayLabel}</div>
  })
}

// An individual event displayed within the calendar grid itself
// can be clicked to open the main event view
const MiniEvent = ({ event, setViewingEvent }) => {
  return (
    <div
      className={`miniEvent ${event.type ? event.type.toLowerCase() : "standard"}`}
      onClick={() => setViewingEvent(event)}>
      {event.name}
    </div>
  )
}

// Generic component - a nicely animated loading spinner
const Loader = () => {
  return (
    <Fragment>
      <div className="overlay" />
      <div className="loader">
        <div className="lds-roller">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
      </div>
    </Fragment>
  )
}

// Generic component - simple feedback after an action has taken place
const Feedback = ({ message, type }) => {
  return (
    <div className={`feedback ${type}`}>{message}</div>
  )
}

// Generic component - simple feedback after an action has taken place
const DayMatchs = ({ matchs }) => {
  return (
    <div className="hamdi">{
      matchs.map(match => {
        {
          <div>{match.dateFrom}</div>
        }
      })
    }
    </div>
  )
}

// The grid of days, renders a month's worth of days and
// also populates the events on the relevant dates
const Grid = ({ date, events, setViewingEvent, setShowingEventForm, actualDate }) => {
  const ROWS_COUNT = 6
  const currentDate = toStartOfDay(new Date())

  // Finds the closest Monday relative to the first day of
  // the target month/year combination
  // Then increment upon this day until we have a full set
  // of date objects to work with
  const startingDate = new Date(date.getFullYear(), date.getMonth(), 1)
  startingDate.setDate(startingDate.getDate() - (startingDate.getDay() - 1))

  const dates = []
  for (let i = 0; i < (ROWS_COUNT * 7); i++) {
    const date = new Date(startingDate)
    dates.push({ date, events: findEventsForDate(events, date) })
    startingDate.setDate(startingDate.getDate() + 1)
  }

  return (
    <Fragment>
      {dates.map((date, index) => {
        return (
          <div
            key={index}
            className={`cell ${date.date.getTime() == currentDate.getTime() ? "current" : ""} ${date.date.getMonth() != actualDate.getMonth() ? "otherMonth" : ""}`
            }>
            <div className="date">
              {date.date.getDate()}
            </div>
            {date.events.map((event, index) =>
              <MiniEvent key={index} event={event} setViewingEvent={setViewingEvent} />
            )}
          </div>
        )
      })}
    </Fragment>
  )
}

// The "main" component, our actual calendar
const Calendar = () => {
  const selectedDate = new Date()
  const [date, setDate] = useState(selectedDate)
  const [viewingEvent, setViewingEvent] = useState(false)
  const [showingEventForm, setShowingEventForm] = useState({ visible: false })
  const [isLoading, setIsLoading] = useState(false)
  const [feedback, setFeedback] = useState()
  const preloadedEvents = [
    {
      id: 1,
      name: "4 Matchs",
      dateFrom: "2022-06-18T12:00",
      dateTo: "2022-06-18T08:45",
      meta: SAMPLE_META,
      type: "Holiday"
    },
    {
      id: 2,
      name: "3 Matchs",
      dateFrom: "2022-06-20T09:45",
      dateTo: "2022-06-20T22:00",
      meta: SAMPLE_META,
      type: "Standard"
    },
  ];
  const parsedEvents = parseEvents(preloadedEvents)
  const [events, setEvents] = useState(parsedEvents)

  useEffect(() => {
    console.log("Date has changed... Let's load some fresh data")
  }, [date])
  useEffect(() => {
    console.log("set viewingEvent")
    console.log(viewingEvent);
  }, [viewingEvent])

  return (
    <div className="calendar">
      {isLoading && <Loader />}

      {feedback &&
        <Feedback
          message={feedback.message}
          type={feedback.type}
        />
      }

      <Navigation
        date={date}
        setDate={setDate}
        setShowingEventForm={setShowingEventForm}
      />

      <DayLabels />

      <Grid
        date={date}
        events={events}
        setShowingEventForm={setShowingEventForm}
        setViewingEvent={setViewingEvent}
        actualDate={date}
      />

      {viewingEvent &&
        <DayMatchs
          matchs={[viewingEvent]}
        />
      }
    </div>
  )
}

export default Calendar;
