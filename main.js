$(document).ready(function() {
  'use strict';

  $('.numbersOnly').keyup(function () {

    var suffix = '';
    var $this = $(this);

    if( $this.hasClass('weight') ) {
      suffix = ' kg';
    }

    if( $this.hasClass('volume') ) {
      suffix = ' m³';
    }

    if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
      this.value = this.value.replace(/[^0-9\.]/g, '') + suffix;
    }
  });
});
