import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Markdown from 'markdown-to-jsx'

import { getMarkdownUrl } from '../utils/getMarkdownUrl'
import AppContext from '../AppContext'

const ModalContentWrapper = styled.div`
  color: black;
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
        <p onClick={() => handleClose()}>x</p>
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
