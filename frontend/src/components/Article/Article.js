import React from "react";
import { Button } from '@mui/material'
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from "axios";
const Article = ({ article }) => {
    // data of article which coming from dataSource 
    const { _id, title, authors, source, pubyear, doi, status } = article
    // hooks to can navigate between pages programmatically
    const history = useHistory()


    // function
    // handling the accept click event 
    const handleAccept = () => {
        (async () => {
            // handle accept article process 
            axios.get(`http://localhost:8080/article/acceptArticle/${_id}`)
                .then((res) => {
                    // if the accept is successed 
                    Swal.fire(
                        'Accepting!',
                        'The article is accepted',
                        'success'
                    ).then((res) => {
                        // redirect to the articles table pages 
                        history.push('/SEPractice')
                    })
                })
                .catch((error) => {
                    // if there is any error 
                    Swal.fire(
                        'Accepting Failed!',
                        'Unkown Error, Try again',
                        'error'
                    ).then((res) => {
                        // redirect to the articles table pages 
                        history.push('/SEPractice')
                    })
                })
        })()

    }
    // function
    // show dialog to make sure if the moderator want to reject article or not 
    const handlReject = () => {
        // 
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success m-4', // style of the [yes,reject it] button
                cancelButton: 'btn btn-danger' // style of [no, cancel] button
            },
            buttonsStyling: false
        })
        // the dialog which will display for the moderatore 
        swalWithBootstrapButtons.fire({
            title: 'Are you sure you want to reject this article?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, reject it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            // if the user click on [yes, reject it]
            if (result.isConfirmed) {
                // reject request ==> send to server id of the article to make it's status rejected
                axios.get(`http://localhost:8080/article/rejectArticle/${_id}`)
                    .then((res) => {
                        // if the reject success display dialog success
                        swalWithBootstrapButtons.fire(
                            'Reject!',
                            'The article has been rejected.',
                            'success'
                        ).then((res) => {
                            history.push('/SEPractice')
                        })
                    })
                    // if got error display error dialog 
                    .catch((error) => {
                        Swal.fire(
                            'Rejecting Failed!',
                            'Unkown Error, Try again',
                            'error'
                        )
                    })
            }
            // if the user click on [cancel]
            else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'The reject is cancelled :)',
                    'error'
                )
            }
        })
    }
    return (
        // bootstrap library 
        <div className="col-md-6 col-sm-12 col-lg-4">
            <div className="card" style={{
                margin: '5px'
            }}>
                <div className="card-body">
                    {/* the title of the article */}
                    <h5 className="card-title">
                        {title}
                    </h5>
                    {/* the pub year of the article  */}
                    <h6 className="card-subtitle mb-2 text-muted">
                        {pubyear}
                    </h6>
                    {/* the authers of the article  */}
                    <p className="card-text">
                        {authors}
                    </p>
                </div>
                <ul class="list-group list-group-flush">
                    {/* the source of the article  */}
                    <li class="list-group-item">{"The source : " + source}</li>
                    {/* the DOI of the article  */}
                    <li class="list-group-item">The DOI <a href={doi}>{doi}</a></li>
                    <li class="list-group-item">
                        {/* The accept button */}
                        <button type="button" className="card-link btn btn-success" onClick={handleAccept}>Accept</button>
                        {/* The reject button */}
                        <button type="button" className="card-link btn btn-danger" onClick={handlReject}>Reject</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Article