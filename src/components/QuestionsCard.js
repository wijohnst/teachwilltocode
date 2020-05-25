import React, { useState, useEffect, Fragment, useContext } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import Modal from 'react-modal'
import { getSoloIssue } from '../utils/getSoloIssue'

import AppContext from '../AppContext'
import ModalContent from './ModalContent'

const QuestionsCardWrapper = styled.div`
  max-width: 50%;
  margin: 0 auto;
  margin-bottom: 5px;
`
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 1;
`
const Info = styled.p`
  margin: 5px;
`
const Data = styled.span`
  font-family: 'Courier New', serif;
`
const Status = styled.span`
  font-family: 'Courier New', serif;
  color: ${(props) => (props.status === "open" ? 'green' : 'red')};
`
Modal.setAppElement('#root');

export default function QuestionCard({data}) {
  
  const [soloIssue, setSoloIssue] = useState(undefined);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const { authToken } = useContext(AppContext);

  const {title, state, created_at, closed_at, number, body} = data;
  
  useEffect(() => {
    getSoloIssue(number, authToken).then(response => setSoloIssue(response));
  },[number, authToken])

  const handleClick = number =>{
    setModalIsOpen(true);
  }
  
  const handleClose = () =>{
    setModalIsOpen(false);
  }
    return (
      <Fragment>
        <Modal isOpen={modalIsOpen}>
          <ModalContent handleClose={handleClose} issueDetail={body} status={state} path={number}/>
        </Modal>
        <QuestionsCardWrapper className="card">
        {(state === 'open' ? <h3>{title}</h3> : <h3><del>{title}</del></h3>)}
        <InfoWrapper>
          <Info><b>Status:</b> <Status status={state}>{state}</Status></Info>
          <Info><b>Creation Date: </b><Data>{moment(created_at).format("MM/DD/YY")}</Data></Info>
          {(state === 'closed' ? <Info><b>Closed on: </b><Data>{moment(closed_at).format("MM/DD/YY")}</Data></Info> : null)}
          {(state === 'closed' && soloIssue !== undefined ? <Info><b>Closed by: </b><Data>{soloIssue.closed_by.login}</Data></Info> : null)}
        </InfoWrapper>
        <p onClick={handleClick}>Details</p>
      </QuestionsCardWrapper>
      </Fragment>
      
    )
  }

