$(document).ready(function(){ 
	console.log("Ready!");


	
	$("#enter_button").click(function() {

		
		var food = $("#food").val();
		var image_source = "";

		
		if (food == "Chick-Fil-A") {
			image_source = "https://cdn.vox-cdn.com/thumbor/nYKhwAJivSaJucrk5362JGqO7PI=/0x116:1508x1247/1200x800/filters:focal(0x116:1508x1247)/cdn.vox-cdn.com/uploads/chorus_image/image/46056338/chickfilafood.0.0.png";	
			$("#error_message").html("");
		}       
		else if (food == "McDonalds") {
			image_source = "https://www.charlescountymd.gov/sites/default/files/coadmin/tourism/mcdonalds-Big-Mac-Extra-Value-Meals.png";	
			$("#error_message").html("");
		}
		else {
			$("#error_message").html("Not Mcdonalds or Chick-Fil-A");
		}


		// display the image in the img element 
		$("#food_image").attr('src', image_source);

	});

	$("#enter_buttons").click(function() {

		
		var team = $("#team").val();
		var image_source = "";

		
		if (team == "Chicago Cubs") {
			image_source = "https://seeklogo.com/images/C/chicago-cubs-logo-CE29653727-seeklogo.com.png";	
			$("#error_messages").html("");
		} 
		else if (team == "White Sox") {
			image_source = "https://d1tjohjvimcqgl.cloudfront.net/teams/logos/mlb/CHW.png";	
			$("#error_messages").html("");
		}
		else {
			$("#error_messages").html("Not a Chicago Team");
		}
 

		// display the image in the img element 
		$("#team_image").attr('src', image_source);

	});
	
	
	$("#enter_buttonz").click(function() {

		
		var team = $("#internet").val();
		var image_source = "";

		
		if (team == "Instagram") {
			image_source = "https://lh3.googleusercontent.com/aYbdIM1abwyVSUZLDKoE0CDZGRhlkpsaPOg9tNnBktUQYsXflwknnOn2Ge1Yr7rImGk";	
			$("#error_messagez").html("");
	
		} 
		else if (team == "Facebook") {
			image_source = "https://nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/1226/facebook-icon-preview-1.png";	
			$("#error_messagez").html("");
		}
		else if (team == "Snapchat") {
			image_source = "http://westpointrecruitment.com/wp-content/uploads/2017/01/bucsnfl-snapcode.png";	
			$("#error_messagez").html("");
		}	
		else {
			$("#error_messagez").html("Not a social media page.");
		}
 

		// display the image in the img element 
		$("#internet_image").attr('src', image_source);

	});
	
	
	
	
	
	
	
});