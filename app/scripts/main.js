/*global $*/
$('body').colorScroll({
  colors: [{
    color: '#6114cc',
    position: '0vh'
  }, {
    color: '#009cf3',
    position: '1.2vh'
  }, {
    color: '#52E280',
    position: '2.2vh'
  }, {
    color: '#FFBF02',
    position: '3.2vh'
  }, {
    color: '#F9615B',
    position: '4.2vh'
  }]
});

$('h1').textillate({ in: { effect: 'bounceInDown' } });
$('body').addClass('show');
$('#scrollMotivator').addClass('show');
