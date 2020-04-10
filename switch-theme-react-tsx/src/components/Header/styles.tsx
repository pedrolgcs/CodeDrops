import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.colors.primary};
  padding: 0px 30px;
  color: #fff;
`;
