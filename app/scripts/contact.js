    
   var myCenter = new google.maps.LatLng(40.9072818, -73.7842756);
function initialize() {
  var mapProp = {
    center: myCenter,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"), mapProp);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);



/* For Form */
$(document).ready(function() {

  //Hiding Labels Initially
  $('form li').each(function() {
    $(this).addClass('js-hide-label');
  });

  //Now adding and removing classes on Events - keyup,blur,focus
  $('form li').find('input,textarea').on('keyup blur focus', function(e) {

    var $this = $(this),
      $parent = $this.parent();

    if (e.type == 'keyup') {
      if ($this.val() == '') {
        $parent.addClass('js-hide-label');
      } else {
        $parent.removeClass('js-hide-label');
      }
    } else if (e.type == 'blur') {
      if ($this.val() == '') {
        $parent.addClass('js-hide-label');
      } else {
        $parent.removeClass('js-hide-label , js-highlight-label').addClass('js-unhighlight-label');
      }
    } else if (e.type == 'focus') {

      if ($this.val() == '') {
        $parent.addClass('js-hide-label');
      } else {
        $parent.addClass('js-highlight-label');
      }

    }

  });

});