import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Markdown from 'markdown-to-jsx'

import { getMarkdownUrl } from '../utils/getMarkdownUrl'
import AppContext from '../AppContext'

const ModalContentWrapper = styled.div`
  color: black;
`
const CloseButton = styled.p`
  text-align: left;
  font-size: 1.5rem;
  color: black;

  &:hover{
    color: lightgreen;
    cursor: pointer;
  }
`
export default function ModalContent(props) {

  const {handleClose, issueDetail, status, path} = props;
  const { authToken } = useContext(AppContext);

  const [markdownUrl, setMarkdownUrl] = useState(undefined);

  useEffect(() => {
    getMarkdownUrl(authToken, path).then(response => setMarkdownUrl(response))
  })

  if(status === 'open'){
    return (
      <ModalContentWrapper>
        <CloseButton onClick={() => handleClose()}>x</CloseButton>
        <h2>Question #{path}</h2>
        <hr style={{maxWidth: "90%"}}/>
        <Markdown>{issueDetail}</Markdown>
      </ModalContentWrapper>
    )
  }else{

    return(
      <ModalContentWrapper>
        <p onClick={() => handleClose()}>x</p>
        <a href={markdownUrl} target="_blank" rel="noopener noreferrer">Answer</a>
      </ModalContentWrapper>
    )
  }
  
}
