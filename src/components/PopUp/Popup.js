import TeamForm from 'components/Teams/TeamForm';
import React from 'react';
import { Button} from 'react-bootstrap';

export default function Popup() {
    return (
        <div>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                ADD TEAM
            </button>

            
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">ADD TEAM</h5>
                    <Button type="Button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </Button>
                </div>
                <div class="modal-body">
                    <TeamForm/>
                </div>
                <div class="modal-footer">
                    <Button type="Button" class="btn btn-secondary" data-dismiss="modal">Close</Button>
                    {/* <Button type="Button" class="btn btn-primary">Save changes</Button> */}
                </div>
                </div>
            </div>
            </div>  
        </div>
    );
}
       



