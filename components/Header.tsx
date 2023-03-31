import styled from 'styled-components'

export default function Header() {
  return (
    <Wrapper>
      <Title>CRUD 2023</Title>
      <Subtitle>Crie, Edit, Liste e Apaque pessoas</Subtitle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  color: white;
`

const Title = styled.h1`
  margin: 0;
  background-color: red;

  /* Create the gradient. */
  background-image: linear-gradient(0deg, #e94cb4, #b856d0);

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`

const Subtitle = styled.p`
  margin: 0;
`
