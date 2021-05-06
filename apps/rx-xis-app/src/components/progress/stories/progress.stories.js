import React from 'react';
import ReadingProgress from '../index';
export default {
  title: 'Progress',
  component: ReadingProgress
};

export function Progressbar() {
  const target = React.createRef();
  return (
    <>
      <ReadingProgress progressbarheading="Progress" progressbarstatus={100} />
      <ReadingProgress progressbarheading="Progress" progressbarstatus={80} />
      <ReadingProgress progressbarheading="Progress" progressbarstatus={60} />
      <ReadingProgress progressbarheading="Progress" progressbarstatus={40} />
      <ReadingProgress progressbarheading="Progress" progressbarstatus={20} />
      <ReadingProgress progressbarheading="Progress" progressbarstatus={90} />
      <ReadingProgress progressbarheading="Progress" progressbarstatus={70} />
      <ReadingProgress progressbarheading="Progress" progressbarstatus={50} />
      <ReadingProgress progressbarheading="Progress" progressbarstatus={30} />
      <ReadingProgress progressbarheading="Progress" progressbarstatus={10} />
    </>
  );
}
