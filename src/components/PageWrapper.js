import styled from 'styled-components'

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85vw;
  height: 90vh;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '5vh')};
  background-color: rgba(246, 247, 249);
  justify-content: center;

  @media (min-width: 768px) {
    width: 45vw;
  }
`
export default PageWrapper
