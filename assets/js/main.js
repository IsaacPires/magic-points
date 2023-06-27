function changePoints(){

  let bluePoints = () => document.querySelector('.bluePoint');
  let redPoints = () => document.querySelector('.redPoint');


  const bluePlus = document.querySelector('.bluePlus');

  bluePlus.addEventListener('click', function blueadd() {
    let bluePoint = bluePoints();
    let blueValue = parseInt(bluePoint.textContent) + 1;

    bluePoint.innerHTML = blueValue
  });

  const blueMinus = document.querySelector('.blueMinus');

  blueMinus.addEventListener('click', function blueLess() {
    let bluePoint = bluePoints();
    let blueValue = parseInt(bluePoint.textContent) - 1;

    bluePoint.innerHTML = blueValue
  });


  const redPlus = document.querySelector('.redPlus');

  redPlus.addEventListener('click', function redadd() {
    let redPoint = redPoints()
    let redValue = parseInt(redPoint.textContent) + 1;

    redPoint.innerHTML = redValue
  });

  const redMinus = document.querySelector('.redMinus');

  redMinus.addEventListener('click', function redLess() {
    let redPoint = redPoints();
    let redValue = parseInt(redPoint.textContent) - 1;

    redPoint.innerHTML = redValue;
  });
}

changePoints();