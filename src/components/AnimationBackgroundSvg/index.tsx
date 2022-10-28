export default function AnimationBackgroundSvg() {

  const Background = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='50px' width='120px'><text x='0' y='15' fill='red' font-size='20'>I love SVG!</text></svg>";

  const styleTextBackground = {
    backgroundImage: `url(${Background})`,
    minHeight: `100px`
    //background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='50px' width='120px'><text x='0' y='15' fill='red' font-size='20'>I love SVG!</text></svg>");
  };

  console.log(styleTextBackground)

  return (
    <div style={styleTextBackground}>Background</div>
  )
} 