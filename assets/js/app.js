const PIXEL_CANVAS = $("#pixelCanvas");
const HEIGHT_INPUT = $("#inputHeight");
const WIDTH_INPUT = $("#inputWidth");
const COLOR_PICKER = $("#colorPicker");

function makeGrid(height, width) {
  for (let i = 0; i < height; i++) {
    PIXEL_CANVAS.append($("<tr></tr>"));

    for (let j = 0; j < width; j++) {
      $("tr").last().append($("<td></td>"));
    }
  }
}

// Draw grid based on user input
$('button').on("click", e => {
  e.preventDefault();

  PIXEL_CANVAS.empty();
  makeGrid(HEIGHT_INPUT.val(), WIDTH_INPUT.val());
});

PIXEL_CANVAS.on("click", "td", function() {
  $(this).css("background-color", COLOR_PICKER.val());
});

$(document).ready(() => makeGrid(5, 5));
