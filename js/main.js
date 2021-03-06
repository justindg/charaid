$('.pw').on('keyup', function() {
  var val = $('.pw').val();
  if (val=="4567") {
    $('.pass').fadeOut(100);
  } else {

  }
});

$('.beInvolved').on('click', function() {
  $('.landingPage').fadeOut();
  // $('.appBar').show();
  $('.appBody').show();
  $('.explore').show();
  $('.appTitle').text('Vision Rescue Projects');
  // $('.bottomTabs').show();
});

var hideAll = function() {
  // $('.appBody').hide();
  $('.explore').hide();
  $('.viewDrive').hide();
  $('.createDrive').hide();
  $('.myDrives').hide();
  $('.myPledges').hide();
}

$('.appHome').on('click', function() {
  hideAll();
  $('.appBody').hide();
  $('.landingPage').fadeIn();
  $('.bottomTabs > div').removeClass('tabActive');
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
  // $('.bottomTabs').hide();
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
  $('.appTitle').text('My Commitments');
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
  $('.createDrive').hide();
  $('.explore').show();
  $('.bottomTabs > div').removeClass('tabActive');
  $('.tabExplore').addClass('tabActive');

  //addToExplorePage
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
  // reqCt++;
  // $('.requirementList').append(
  //   "<div class='requirement'>"
  //     +"<div class='label'>"+reqCt+"</div>"
  //     +"<div class='pad'></div>"
  //     +"<div class='name'>"
  //       +"<input class='textBox' placeholder='Name'>"
  //     +"</div>"
  //     +"<div class='pad'></div>"
  //     +"<div class='amount'>"
  //       +"<input class='textBox' placeholder='Amt'>"
  //     +"</div>"
  //     +"</div>"
  //   );

  $('.createModal').show();
})

$('.btnContribute').on('click', function (){
  $('.pledgeModal').show();
});


$("#category").on("change",function(){
  var val = $(this).val();

  //clear all;

  if (val === "donate") {
    $('#dd_donate').show();
  } else if (val === "volunteer") {
    $('#dd_volunteer').show();
  }
});

$("#dd_volunteer").on("change",function(){
  var val = $(this).val();

  if (val != "") {
    $('#dd_volunteer_amt').show();
  }
});

$("#dd_donate").on("change",function(){
  var val = $(this).val();

  if (val != "") {
    $('#dd_donate_amt').show();
  }
});

$(".modal-cancel").on("click", function() {
  $('.modal').hide();
});

var data = {
  category: "",
  type: "",
  amount: 0
};

var resetModal = function() {
  $('.category > div').removeClass('selected');
  $('.skill > div').removeClass('selected');
  $('.time > div').removeClass('selected');
  $('.type > div').removeClass('selected');
  $('.amount > .val').val("");
  $('.amount').hide();
  $('.time').hide();
  $('.volunteer_container').hide();
  $('.donate_container').hide();
  $('.modal-ok').hide();

  data = {
    category: "",
    type: "",
    amount: ""
  };
};

$('.category > div').on('click', function() {
  resetModal();
  // $('.category > div').removeClass('selected');
  $(this).addClass('selected');

  data.category = $(this).find('.cat').text();

  if (data.category === 'Donate') {
    $('.donate_container').fadeIn(100);
  } else if (data.category === 'Volunteer') {
    $('.volunteer_container').fadeIn(100);
  }
});

$('.skill > .item').on('click', function() {
  $('.skill > .item').removeClass('selected');
  $(this).addClass('selected');
  data.type = $('.skill').find('.selected').text();
  $('.time').fadeIn(100);
});

$('.type > .item').on('click', function() {
  $('.type > .item').removeClass('selected');
  $(this).addClass('selected');
  data.type = $('.type').find('.selected').text();
  $('.amount').fadeIn(100);
});

$('.amount > .val').on('keyup', function() {
  data.amount = $('.val').val();
  if (data.amount > 0) {
    $('.modal-ok').fadeIn(100);
  } else {
    $('.modal-ok').hide();
  }
});

$('.time > .item').on('click', function() {
  $('.time > .item').removeClass('selected');
  $(this).addClass('selected');
  data.amount = $('.time').find('.selected').text();
  $('.modal-ok').fadeIn(100);
});

$('.modal-ok-pledge').on('click', function () {
  //add to event page
  if($('.myContributions').text() === "-") {
    $('.myContributions').text("");
    console.log('ads');
  }

  var row = "<div class='col-cat'>"+ data.type +"</div>" + "<div class='col-amt'>"+ data.amount +"</div>";
  $('.myContributions').append(row);

  $('.myPledgesItem').append(row);
  $('.pledgeEmpty').hide();
  $('.pledgeKAD').show();
  $('.appTitle').text('Vision Rescue Projects');

  resetModal();
  $('.modal').hide();
  $(".viewLogs").slideDown().delay(1000).slideUp();
});

$('.pledgeKAD').on('click', function() {
  $('.myPledges').hide();
  $('.viewDrive').fadeIn(100);

  $('.tabPledges').removeClass('tabActive');
  $('.tabExplore').addClass('tabActive');
  $('.appTitle').text('Vision Rescue Projects');
});

$('.pledgeEmpty').on('click', function() {
  $('.myPledges').hide();
  $('.explore').fadeIn(100);

  $('.tabPledges').removeClass('tabActive');
  $('.tabExplore').addClass('tabActive');
  $('.appTitle').text('Vision Rescue Projects');
});

$('.skill > .itemInput').on('keyup', function() {
  data.type = $('.skill').find('.itemInput').val();
  if (data.type) {
    $('.time').fadeIn(100);
  } else {
    $('.time').hide();
  }
});

$('.type > .itemInput').on('keyup', function() {
  data.type = $('.type').find('.itemInput').val();
  if (data.type) {
    $('.amount').fadeIn(100);
  } else {
    $('.amount').hide();
  }
});

$('.amount > .itemInput').on('keyup', function() {
  data.amount = $(this).val();
  if (data.amount > 0) {
    $('.modal-ok').fadeIn(100);
  } else {
    $('.modal-ok').hide();
  }
});

$('.time > .itemInput').on('keyup', function() {
  data.amount = $(this).val();
  if (data.amount > 0) {
    $('.modal-ok').fadeIn(100);
  } else {
    $('.modal-ok').hide();
  }
});



$('.modal-ok-create').on('click', function() {
  console.log(data);

  var requirement = "<div class='requirement'><div class='req-category'>"+ data.category +"</div><div class='req-skill'>"+ data.type +"</div><div class='req-time'>"+ data.amount +"</div></div>";

  $('.requirementList').append(requirement);
  $('.modal').hide();
});
