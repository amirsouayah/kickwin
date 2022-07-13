import { IconButton } from '@material-ui/core';
import React from 'react';
import './MatchCard.css'
import DeleteIcon from '@material-ui/icons/Delete';
import swal from 'sweetalert';
import axios from 'axios';
import { useParams } from "react-router-dom";
// import EditIcon from '@material-ui/icons/Edit';
import AddNewMatch from 'components/AddButton/AddNewMatch';
import Moment from 'moment';


export default function RecipeReviewCard(props) {
    const { id } = useParams();

    const removeMatch = (index) => {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to remove this match",
            icon: "warning",
            dangerMode: true,
            buttons: true,
        })
            .then(willDelete => {
                if (willDelete) {
                    axios.put(`http://localhost:5000/league/deleteleague/${id}`, { matchs: [index] })
                        .then(res => {
                            if (res.status === 200) {
                                delmatch(index)
                                window.location.reload()

                            }
                        }).catch(err => {
                        });
                }
            });

    }
    const delmatch = (id) => {

        axios.delete(`http://localhost:5000/match/delete/${id}`)
            .then(res => {
                if (res.status === 200) {
                    // window.location.reload()
                }
            })



    }

    return (

        <div class=" cardmatch">
            <div class="match">
                <div class="match-header">
                    <div class="match-tournament"><img src="https://assets.codepen.io/285131/pl-logo.svg" />{props.dataMatch.matchName.toUpperCase()}</div>
                    <div class="match-actions">
                        <IconButton aria-label="delete" onClick={() => removeMatch(props.dataMatch._id)}>
                            <DeleteIcon fontSize="large" />
                        </IconButton>

                    </div>
                    <div >


                        {props.dataTeam &&
                            <AddNewMatch sendData='update' dataTeam={props.dataTeam} idMatch={props.dataMatch._id} />
                        }
                    </div>
                </div>
                <div class="match-content">
                    <div class="column">
                        <div class="team team--home">
                            <div class="team-logo">

                                <img src={props.dataMatch.teams[0].photo} />
                            </div>
                            <h2 class="team-name">{props.dataMatch.teams[0].name.toUpperCase()}</h2>
                        </div>
                    </div>
                    <div class="column">
                        <div class="match-details">
                            <div class="match-date">
                                {/* 3 May at <strong>17:30</strong> */}
                                <strong> {Moment(props.dataMatch.date).format("  HH:mm ")}</strong>
                                <br></br>
                                <strong>{Moment(props.dataMatch.date).format("DD-MM-YYYY")}</strong>

                            </div>
                            <div class="match-score">
                                <span class="match-score-number match-score-number--leading">{props.dataMatch.scoreTeam1}</span>
                                <span class="match-score-divider">:</span>
                                <span class="match-score-number">{props.dataMatch.scoreTeam2}</span>
                            </div>
                            <div class="match-time-lapsed">
                                90'
                            </div>
                            <div class="match-referee">
                                {/* <strong>{props.dataMatch.stadium[0].name}</strong> */}
                                <strong>{props.dataMatch.stadium[0].name.toUpperCase()}</strong>
                            </div>

                        </div>
                    </div>
                    <div class="column">
                        <div class="team team--away">
                            <div class="team-logo">

                                <img src={props.dataMatch.teams[1].photo} />
                            </div>
                            <h2 class="team-name">{props.dataMatch.teams[1].name.toUpperCase()}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}