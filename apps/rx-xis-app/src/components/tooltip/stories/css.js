import styled from 'styled-components';


export const Wrapper = styled.div`
  height: 500px;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

export const InnerWrap = styled.div`
position: absolute;
&.topLeft {
  left: 40px;
  top: 40px;
}
&.topRight {
  right: 40px;
  top: 40px;
}
&.topCenter {
  left: 50%;
  transform: translateX(-50%);
  top: 40px;
}
&.bottomLeft {
  left: 40px;
  bottom: 40px;
}
&.bottomCenter {
  left: 50%;
  transform: translateX(-50%);
  bottom: 40px;
}
&.bottomRight {
  right: 40px;
  bottom: 40px;
}
&.leftTop {
  left: 40px;
  top: 130px;
}
&.leftCenter {
  left: 40px;
  top: 220px;
}
&.leftBottom {
  left: 40px;
  top: 310px;
}
&.rightTop {
  right: 40px;
  top: 130px;
}
&.rightCenter {
  right: 40px;
  top: 220px;
}
&.rightBottom {
  right: 40px;
  top: 310px;
}
`;