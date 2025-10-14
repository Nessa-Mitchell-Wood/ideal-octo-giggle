const circles = document.querySelectorAll('#circles>[data-circle]');
const { offsetWidth: x, offsetHeight: y } = document.body;
function animate() {
  let frame = 0;
  return function update() {
    if (frame % 480 === 0) {
      circles.forEach((c) => {
        c.style = `transform: scale(${Math.random() * 2}) translate(${
          Math.random() * x
        }px, ${Math.random() * y}px); transition: transform 8000ms ease-in-out`;
      });
    }
    frame = requestAnimationFrame(update);
  };
}

const update = animate();
update();
