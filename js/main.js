$('.beInvolved').on('click', function() {
  $('.landingPage').fadeOut();
  // $('.appBar').show();
  $('.appBody').show();
  // $('.bottomTabs').show();
});

var hideAll = function() {
  $('.explore').slideUp();
  $('.viewDrive').slideUp();
  $('.createDrive').slideUp();
  $('.myDrives').slideUp();
  $('.myPledges').slideUp();
}

$('.appHome').on('click', function() {
  hideAll();
  // $('.explore').slideDown();
  // $('.appTitle').text('Vision Rescue Projects');

  // if ($('.bottomTabs').is(':hidden')) {
    // $('.bottomTabs').show();
  // }
  $('.landingPage').show();
});

$('.listItem').on('click', function() {
  hideAll();
  $('.viewDrive').slideDown();
});

//TABS
$('.tabExplore').on('click', function() {
  hideAll();
  $(this).parent().find('div').removeClass('tabActive');
  $(this).addClass('tabActive');
  $('.explore').slideDown();
  $('.appTitle').text('Vision Rescue Projects');
});

$('.tabCreate').on('click', function() {
  hideAll();
  $(this).parent().find('div').removeClass('tabActive');
  $(this).addClass('tabActive');
  $('.createDrive').slideDown();
  $('.appTitle').text('Create a Drive');
  $('.bottomTabs').hide();
  $('.createDetails').show();
  $('.createDriveHeader').text('Step 1 of 3');
  $('.createDriveHeader').show();
  $('.createDriveHeaderSubtext').text('Details');
  $('.createDriveHeaderSubtext').show();
});

$('.tabDrives').on('click', function() {
  hideAll();
  $(this).parent().find('div').removeClass('tabActive');
  $(this).addClass('tabActive');
  $('.myDrives').slideDown();
  $('.appTitle').text('My Drives');
});

$('.tabPledges').on('click', function() {
  hideAll();
  $(this).parent().find('div').removeClass('tabActive');
  $(this).addClass('tabActive');
  $('.myPledges').slideDown();
  $('.appTitle').text('My Pledges');
});

$('.btnToRequirements').on('click', function() {
  $('.createDetails').hide();
  $('.uploadPicture').hide();
  $('.createRequirements').show();

  $('.createDriveHeaderSubtext').text('Step 2 of 3');
  $('.createDriveHeader').text('Requirements');
});

$('.btnToDetails').on('click', function() {
  $('.uploadPicture').hide();
  $('.createRequirements').hide();
  $('.createDetails').show();

  $('.createDriveHeaderSubtext').text('Step 1 of 3');
  $('.createDriveHeader').text('Details');
});

$('.btnToUpload').on('click', function() {
  $('.createRequirements').hide();
  $('.createDetails').hide();
  $('.uploadPicture').show();

  $('.createDriveHeaderSubtext').text('Step 3 of 3');
  $('.createDriveHeader').text('Upload Poster');
});

$('.btnFinish').on('click', function() {
  $('.createRequirements').hide();
  $('.createDetails').hide();
  $('.uploadPicture').hide();
  $('.submitSuccess').show();

  $('.createDriveHeaderSubtext').hide();
  $('.createDriveHeader').hide();
});

$('.btnPledge').on('click', function() {
  $('.viewDrive').hide();
  $('.pledgeSuccess').show();
});

$('.btnDone').on('click', function() {
  $('.submitSuccess').hide();
  $('.pledgeSuccess').hide();
  hideAll();
  $('.explore').slideDown();
  $('.appTitle').text('Vision Rescue Projects');

  if ($('.bottomTabs').is(':hidden')) {
    $('.bottomTabs').show();
  }
});

var reqCt = 1;

$('.addRequirement').on('click', function() {
  reqCt++;
  $('.requirementList').append(
    "<div class='requirement'>"
      +"<div class='label'>"+reqCt+"</div>"
      +"<div class='pad'></div>"
      +"<div class='name'>"
        +"<input class='textBox' placeholder='Name'>"
      +"</div>"
      +"<div class='pad'></div>"
      +"<div class='amount'>"
        +"<input class='textBox' placeholder='Amt'>"
      +"</div>"
      +"</div>"
    );
})
