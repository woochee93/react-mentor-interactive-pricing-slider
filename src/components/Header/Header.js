import styled from "styled-components";

const HeaderWrapper = styled.div`
   position: relative;
   width: 100%;
   padding: 100px 0;
   background-image: url("/img/pattern-circles.svg");
   background-position: center;
   background-repeat: no-repeat;
   text-align: center;
   color: ${({ theme }) => theme.colors.neutral.darkDesaturatedBlue};
`;
const Title = styled.h1`
   font-weight: 800;
`;
const Subtitle = styled.h2`
   font-size: 17px;
   font-weight: 600;
   color: ${({ theme }) => theme.colors.neutral.grayishBlue};
`;

export default function Header() {
   return (
      <HeaderWrapper>
         <Title>Simple, traffic-based pricing</Title>
         <Subtitle>
            Sign-up for our 30-day trial. No credit card required.
         </Subtitle>
      </HeaderWrapper>
   );
}
