$(document).ready(function() {

	//GLOBAL VARIABLES//
	console.log('Welcome to console');
	var xMark = '<img src="images/Xmark.png" alt="delete" class="deleteMark">'
	var vMark = '<img src="images/Vmark.png" alt="check" class="checkMark">'


	// Sortable list Feature
	$('#listItems').sortable();
	

	// Item Capture and Post //
	
	$('#addButton').click(dataCap);


	function dataCap() {
		var item = $('#addBox').val();
		var block = '<p class="exampleItem">' + item + xMark + vMark + '</p>';
		$('#listItems').prepend(block);
		
		//Adding Animation
		$('#listItems p:first-child')
        .css('opacity', "0")
        .animate(
            { opacity: "1" },
            { queue: true, duration: 'fast' }
        )
     	console.log('Data Post');
	};

	
	// Item Cross Off //
	
	$(document).on("click", ".checkMark", function(){
    $(this).closest('.exampleItem').toggleClass('strike');
    console.log('Strike');
    });

	// Item Delete //

	$(document).on("click", ".deleteMark", function(){
    $(this).closest('p').fadeOut(300);
    console.log('Delete');
	});


});	



/* 
/////////////////Extra Code - Ignore This////////////////////

$('#listItems').sortable({//axis:   'y',
                             //containment: 'parent',
                             //revert: 50,
                             //tolerance: 'pointer',
                             //cursor: 'move',

    });

*/