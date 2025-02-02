import styled from 'styled-components'

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  height: 94vh;
  margin: ${({ margin }) => (margin ? margin : '5vh')};
  background-color: ${({ theme }) => theme.secondaryLight};
  justify-content: center;

  @media (min-width: 768px) {
    width: 45vw;
  }
`
export default PageWrapper
