/*global $*/
$('body').colorScroll({
  colors: [{
    color: '#6114cc',
    position: '0vh'
  }, {
    color: '#009cf3',
    position: '1vh'
  }, {
    color: '#42996A',
    position: '2vh'
  }, {
    color: '#FFBF02',
    position: '3vh'
  }, {
    color: '#F9615B',
    position: '4vh'
  }]
});

$('h1').textillate({ in: { effect: 'bounceInDown' } });
$('body').addClass('show');
$('#scrollMotivator').addClass('show');
