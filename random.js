// function random() {
//     const colors = ['blue', 'green', 'red', 'yellow', "pink"];
//     let coords = [
//         ['25', '25']
//     ];
//     var circles = document.getElementsByClassName("circle");
//     for (var i = 0; i < circles.length; i++) {
//         let cx = Math.floor(Math.random() * (272 - 25 + 1)) + 25;
//         // for (var j = 0; j < coords.length; j++) {
//         // if ((cx - coords[j][0] > coords[j][0]))
//         // }
//         document.getElementsByClassName("circle")[i].setAttribute('cx', cx + 'px');
//         document.getElementsByClassName("circle")[i].setAttribute('cy', (Math.floor(Math.random() * (272 - 25 + 1)) + 25) + 'px');
//         document.getElementsByClassName("circle")[i].setAttribute('r', (Math.floor(Math.random() * (22 - 3 + 1)) + 3) + 'px');
//         document.getElementsByClassName("circle")[i].setAttribute('stroke-width', Math.floor(Math.random() * 4));
//         document.getElementsByClassName("circle")[i].setAttribute('fill', colors[Math.floor(Math.random() * (colors.length + 1))]);
//         document.getElementsByClassName("circle")[i].setAttribute('stroke', colors[Math.floor(Math.random() * (colors.length + 1))]);
//     }
// }

$(document).ready(function () {
    $('#random').click(function () {
        const colors = ['blue', 'green', 'red', 'yellow', "pink"];
        let coords = [
            ['25', '25']
        ];
        $(".circle").each(function (index, value) {
            let cx = Math.floor(Math.random() * (272 - 25 + 1)) + 25;
            let cy = Math.floor(Math.random() * (272 - 25 + 1)) + 25;
            let r = Math.floor(Math.random() * (22 - 3 + 1)) + 3;
            let stroke_width = Math.floor(Math.random() * 4);
            let color = colors[Math.floor(Math.random() * (colors.length + 1))];

            $(this).attr('cx', cx + 'px');
            $(this).attr('cy', cy + 'px');
            $(this).attr('r', r + 'px');
            $(this).attr('stroke-width', stroke_width);
            $(this).attr('fill', color);
            $(this).attr('stroke', color);
        });
    });
});