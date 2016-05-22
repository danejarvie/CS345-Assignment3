

$( document ).ready(function() {
/****************** ROW 1 ************************/
    $ ("#entrance-menu-frame").mouseenter(function (event) {
        $("#entrance-icon").hide();
        $("#entrance-menu").show();
    });
    $ ("#entrance-menu-frame").mouseleave(function (event) {
        $("#entrance-icon").show();
        $("#entrance-menu").hide();
    });
    $ ("#kitchen-menu-frame").mouseenter(function (event) {
        $("#kitchen-icon").hide();
        $("#kitchen-menu").show();
    });
    $ ("#kitchen-menu-frame").mouseleave(function (event) {
        $("#kitchen-icon").show();
        $("#kitchen-menu").hide();
    });
    $ ("#dining-menu-frame").mouseenter(function (event) {
        $("#dining-icon").hide();
        $("#dining-menu").show();
    });
    $ ("#dining-menu-frame").mouseleave(function (event) {
        $("#dining-icon").show();
        $("#dining-menu").hide();
    });
/***************** ROW 2 **********************/
    $ ("#outdoor-menu-frame").mouseenter(function (event) {
        $("#outdoor-icon").hide();
        $("#outdoor-menu").show();
    });
    $ ("#outdoor-menu-frame").mouseleave(function (event) {
        $("#outdoor-icon").show();
        $("#outdoor-menu").hide();
    });
    $ ("#living-menu-frame").mouseenter(function (event) {
        $("#living-icon").hide();
        $("#living-menu").show();
    });
    $ ("#living-menu-frame").mouseleave(function (event) {
        $("#living-icon").show();
        $("#living-menu").hide();
    });
    $ ("#bedroom1-menu-frame").mouseenter(function (event) {
        $("#bedroom1-icon").hide();
        $("#bedroom1-menu").show();
    });
    $ ("#bedroom1-menu-frame").mouseleave(function (event) {
        $("#bedroom1-icon").show();
        $("#bedroom1-menu").hide();
    });
/******************** ROW 3 ***************************/
    $ ("#entrance-menu-frame2").mouseenter(function (event) {
        $("#entrance-icon2").hide();
        $("#entrance-menu2").show();
    });
    $ ("#entrance-menu-frame2").mouseleave(function (event) {
        $("#entrance-icon2").show();
        $("#entrance-menu2").hide();
    });
    $ ("#kitchen-menu-frame2").mouseenter(function (event) {
        $("#kitchen-icon2").hide();
        $("#kitchen-menu2").show();
    });
    $ ("#kitchen-menu-frame2").mouseleave(function (event) {
        $("#kitchen-icon2").show();
        $("#kitchen-menu2").hide();
    });
    $ ("#dining-menu-frame2").mouseenter(function (event) {
        $("#dining-icon2").hide();
        $("#dining-menu2").show();
    });
    $ ("#dining-menu-frame2").mouseleave(function (event) {
        $("#dining-icon2").show();
        $("#dining-menu2").hide();
    });
/************************ ROW 4 ********************/
    $ ("#outdoor-menu-frame2").mouseenter(function (event) {
        $("#outdoor-icon2").hide();
        $("#outdoor-menu2").show();
    });
    $ ("#outdoor-menu-frame2").mouseleave(function (event) {
        $("#outdoor-icon2").show();
        $("#outdoor-menu2").hide();
    });
    $ ("#living-menu-frame2").mouseenter(function (event) {
        $("#living-icon2").hide();
        $("#living-menu2").show();
    });
    $ ("#living-menu-frame2").mouseleave(function (event) {
        $("#living-icon2").show();
        $("#living-menu2").hide();
    });
    $ ("#bedroom1-menu-frame2").mouseenter(function (event) {
        $("#bedroom1-icon2").hide();
        $("#bedroom1-menu2").show();
    });
    $ ("#bedroom1-menu-frame2").mouseleave(function (event) {
        $("#bedroom1-icon2").show();
        $("#bedroom1-menu2").hide();
    });
	
/************** Room Buttons ***********************/
	
	$(".BigButton").click(function(event) {
		var mystring = event.target.id;
		if (mystring == "entrance-button") {
			$("#entrance-lg").show();
		}
	});

	$(".BigButton2").click(function(event) {
		var mystring2 = $(event.target).parent().attr("id");
		$(document.getElementById(mystring2)).hide();
	});
	
	$("#ex1").slider({
		formatter: function(value) {
			return "Current Value: " + value;
		}
	});
	
});

/********************** Mic Icon ************************/

	function micOn() {
		document.getElementById('entrance-ptt').style.color = "red";
	}
	function micOff() {
		document.getElementById('entrance-ptt').style.color = "rgb(61,63,64)";
	}
