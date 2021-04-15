import styled from 'styled-components';
import colors from './../theme/colors';

export const Wrapper = styled.div`
    console.log(colors)
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom:1rem;
    border:4px solid #fef3ec;
    padding:50px 0;
    margin:2rem 1rem;
`;
export const Progresbar = styled.div`
  color: colors.primary;
  height: 2em;
  width: 30%;
  background-color: #fef3ec;
  position: relative;
  border-radius: 3px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5) inset;
  &:before {
    content: attr(data-label);
    font-size: 0.8em;
    position: absolute;
    text-align: left;
    padding-left: 5vh;
    padding-top: 5px;
    color: white;
  }
`;
export const Value = styled.span`
  background-color: #f48245;
  display: inline-block;
  height: 100%;
  border-radius: 3px;
  position: relative;
  transition: width 0.6s ease;
`;
export const ButtonContainer = styled.div`
  padding-top: 48px;
`;
export const Button = styled.a`
  background-color: ${props => (props.next ? '#f48245' : '#707070')};
  color: white;
  border-radius: 3px;
  border: 1.5px solid #ffa500;
  padding: 16px 32px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  height: 50px;
  justify-content: center;
  line-height: 16px;
  margin-right: 16px;
  min-height: 50px;
  min-width: 0px;
  text-align: center;
  text-decoration-color: rgb(255, 255, 255);
  text-decoration-line: none;
  text-decoration-style: solid;
  text-decoration-thickness: auto;
  user-select: none;
  vertical-align: middle;
  white-space: normal;
  width: 86.7031px;
`;
