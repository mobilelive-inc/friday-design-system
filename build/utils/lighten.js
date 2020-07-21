export function lighten(color, percent) {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16); // eslint-disable-next-line radix

  R = parseInt(R * (100 + percent) / 100); // eslint-disable-next-line radix

  G = parseInt(G * (100 + percent) / 100); // eslint-disable-next-line radix

  B = parseInt(B * (100 + percent) / 100);
  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;
  const RR = R.toString(16).length === 1 ? "0" + R.toString(16) : R.toString(16);
  const GG = G.toString(16).length === 1 ? "0" + G.toString(16) : G.toString(16);
  const BB = B.toString(16).length === 1 ? "0" + B.toString(16) : B.toString(16);
  return "#" + RR + GG + BB;
}