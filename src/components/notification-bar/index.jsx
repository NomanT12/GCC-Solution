import React from 'react'

import styled from 'styled-components'

const NotificationBar = () => {
  return (
    <NBmain>
      <span>+971 4 557 9404</span>
      <span>info@gccsolutions.com</span>
    </NBmain>
  );
}

export default NotificationBar

const NBmain = styled.div`
  width: 100%;
  height: 45px;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  display: flex;
  justify-content: space-between;
  align-items: center ;
  font-weight: 500;
  padding: 0 120px ;
`;