import React from "react"
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
// import { events } from "./ressources"
import axios from "axios"
import swal from 'sweetalert';

const localizer = momentLocalizer(moment)

const BigCalendar = ({ id }) => {
    const [myEvents, setEvents] = React.useState([])
    const [data, setData] = React.useState([])

    console.log("#data", data)

    const handleSelectSlot = React.useCallback(
        ({ start, end }) => {
            const title = window.prompt('New Match Name')
            if (title) {
                setEvents((prev) => [...prev, { start, end, title }])
            }
        },
        [setEvents]
    )

    const handleSelectEvent = React.useCallback(
        // (event) => window.alert(event.title),
        // []
        (event) => swal({
            title: event.title,
            text: "Thank you! Your Team has been successfully Updated",
            icon: "info",
        }), []
    )

    const { defaultDate, scrollToTime } = React.useMemo(
        () => ({
            defaultDate: new Date(2022, 7, 7),
            scrollToTime: new Date(1970, 1, 1, 6),
        }),
        []
    )


    const getStadiumMatchs = () => {
        axios.get(`http://localhost:5000/match/findstadium/${id}`)
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data)
                    setData(res.data)
                    const datamatch = res.data.map(el => {
                        var start = moment(el.date);
                        var year = start.year()
                        console.log("#year", year);
                        var month = start.month()
                        console.log("#month", month);
                        var day = start.date()
                        console.log("#day", day);
                        var hour = start.hour()
                        console.log("#hour", hour);
                        var minutes = start.minutes()
                        console.log("#m", minutes);
                        // var end = ""
                        return ({
                            title: el.teams[0].name + ' VS ' + el.teams[1].name,
                            start: new Date(year, month, day, hour, minutes, 0),
                            end: new Date(year, month, day, hour + 1, minutes, 0),
                            desc: el.teams[0].name,
                        })
                    })

                    // setEvents(datamatch)
                    //             id: 6,
                    // title: 'Meeting',
                    // start: new Date(2015, 3, 12, 10, 30, 0, 0),
                    // end: new Date(2015, 3, 12, 12, 30, 0, 0),
                    // desc: 'Pre-meeting meeting, to prepare for the meeting',
                    setEvents(datamatch)
                    console.log('#datamatch', datamatch);
                }
            }).catch(err => {
                console.log("#err", err)
            });
    }

    React.useEffect(() => {
        getStadiumMatchs()
    }, [])

    return (<div>
        <Calendar
            dayLayoutAlgorithm='no-overlap'
            defaultDate={defaultDate}
            defaultView={Views.WEEK}
            events={myEvents}
            localizer={localizer}
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            selectable
            scrollToTime={scrollToTime}
            style={{ height: 500 }}
        />
    </div>
    )
}

export default BigCalendar;