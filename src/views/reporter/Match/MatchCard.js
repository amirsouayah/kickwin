// import { IconButton } from '@material-ui/core';
import React from 'react';
import './MatchCard.css'
// import DeleteIcon from '@material-ui/icons/Delete';
// import swal from 'sweetalert';
// import axios from 'axios';
import { useParams } from "react-router-dom";
// import EditIcon from '@material-ui/icons/Edit';
// import AddNewMatch from 'components/AddButton/AddNewMatch';
// import FormMatch from './FormMatch';
import NewScoreMatch from '../FormReporter/NewScoreMatch';
import Moment from 'moment';



export default function RecipeReviewCard(props) {
    const { id } = useParams();


    return (

        <div class=" cardmatch" style={{ background: 'transparent' }}>
            <div class="match">
                <div class="match-header">
                    <div class="match-tournament"><img src="https://assets.codepen.io/285131/pl-logo.svg" />{props.dataMatch.matchName.toUpperCase()}</div>
                    <div class="match-actions">
                        {props.dataTeam &&
                            // <AddNewMatch sendData='update' dataTeam={props.dataTeam} idMatch={props.dataMatch._id} />
                            <NewScoreMatch sendData='update' dataTeam={props.dataTeam} idMatch={props.dataMatch._id} />
                        }
                    </div>
                </div>
                <div class="match-content">
                    <div class="column">
                        <div class="team team--home">
                            <div class="team-logo">

                                <img src="https://assets.codepen.io/285131/chelsea.svg" />
                            </div>
                            <h2 class="team-name">{props.dataMatch.teams[0].name.toUpperCase()}</h2>
                        </div>
                    </div>
                    <div class="column">
                        <div class="match-details">
                            <div class="match-date" style={{ display: 'flex', flexDirection: 'column' }}>
                                <h6 align='center'>{Moment(props.dataMatch.date).format("DD-MM-YYYY")}</h6>
                                <h5 align='center'> {Moment(props.dataMatch.date).format("  HH:mm ")}</h5>
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

                                <img src="https://resources.premierleague.com/premierleague/badges/t1.svg" />
                            </div>
                            <h2 class="team-name">{props.dataMatch.teams[1].name.toUpperCase()}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}