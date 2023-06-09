$(document).ready(function () {
  $('#add-circle').click(function () {
    let circleElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circleElement.setAttributeNS(null, 'class', 'circle');
    circleElement.setAttributeNS(null, 'cx', '25');
    circleElement.setAttributeNS(null, 'cy', '25');
    circleElement.setAttributeNS(null, 'r', '22');
    circleElement.setAttributeNS(null, 'stroke', 'black');
    circleElement.setAttributeNS(null, 'stroke-width', '3');
    circleElement.setAttributeNS(null, 'fill', 'red');
    $("#field").append(circleElement);
  });
});