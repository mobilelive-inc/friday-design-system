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
      <ReadingProgress target={target} done={20} />
      <ReadingProgress target={target} done={40} />
      <ReadingProgress target={target} done={60} />
      <ReadingProgress target={target} done={80} />
      <ReadingProgress target={target} done={100} />
    </>
  );
}
