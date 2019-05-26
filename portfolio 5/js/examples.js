/* Examples */
(function($) {
  /*
   * Example 1:
   *
   * - no animation
   * - custom gradient
   *
   * By the way - you may specify more than 2 colors for the gradient
   */
  $('.first.circle').circleProgress({
    value: 0.87
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(87 * progress) + '<i>%</i>');
  });

  /*
   * Example 2:
   *
   * - default gradient
   * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
   */
  $('.second.circle').circleProgress({
    value: 0.72
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(72 * progress) + '<i>%</i>');
  });

  /*
   * Example 3:
   *
   * - very custom gradient
   * - listening to `circle-animation-progress` event and display the dynamic change of the value: from 0 to 0.8
   */
  $('.third.circle').circleProgress({
    value: 0.65
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(65 * progress) + '<i>%</i>');
  });

  /*
   * Example 4:
   *
   * - solid color fill
   * - custom start angle
   * - custom line cap
   * - dynamic value set
   */
  $('.fourth.circle').circleProgress({
    value: 0.80
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
  });
  
   $('.fifth.circle').circleProgress({
    value: 0.84
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(48 * progress) + '<i>%</i>');
  });
  
   $('.sixth.circle').circleProgress({
    value: 0.30
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(30 * progress) + '<i>%</i>');
  });
  

  
})(jQuery);
