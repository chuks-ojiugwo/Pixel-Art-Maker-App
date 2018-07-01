
/* Variable declaration */
var height, width, color;

// TODO: call makeGrid()
$('#sizePicker').submit(function (event){
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height, width);
})

/* TODO: Creating a funtion to Grid of table */
function makeGrid(x, y) {
  $('tr').remove();

/* Creating a for loops for 2-Dimension */
  for (var i = 1; i <= x; i++){
    $('#pixelCanvas').append('<tr id=table'+ i + '></tr>');
    for (var j =1; j<= y; j++){
      $('#table' + i).append('<td></td>');
    }
  }
  /* TODO: adding any slected color to cell of choice */
  $('td').click(function addColor(){
    color = $('#colorPicker').val();

    if ($(this).attr('style')){
      $(this).removeAttr('style')
      }
      else {
      $(this).attr('style', 'background-color:' + color);
    }
  })
}
