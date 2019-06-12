$.noConflict();// gasi $ znak mora da se koristi jQuery
jQuery(document).ready(function(){
	// filterable table
	jQuery("#input1").on("keyup", function(){
		var value = jQuery(this).val().toLowerCase();
		jQuery("#myTable tr").filter(function(){
			jQuery(this).toggle(jQuery(this).text().toLowerCase().indexOf(value) > -1);
		});
	});
	// filter lists
	jQuery("#input2").on("keyup", function(){
		var value = jQuery(this).val().toLowerCase();
		jQuery("#list1 li").filter(function(){
			jQuery(this).toggle(jQuery(this).text().toLowerCase().indexOf(value) > -1);
		});
	});
	// filter enything
	jQuery("#input3").on("keyup", function() {
    var value = jQuery(this).val().toLowerCase();
    jQuery("#div1 *").filter(function() {
      jQuery(this).toggle(jQuery(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});