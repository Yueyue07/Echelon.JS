var aboutUs = {};

aboutUs.compileTemplate = function() {
  $.get('templates/aboutTemplate.handelbars',function(data){
    aboutUs.template = Handlebars.compile(data);
    console.log('hello');
  }).done(aboutUs.fetchJSON);
};

aboutUs.fetchJSON = function() {
  console.log('fetchJSON1');
  $.getJSON('json/profiles.json',function(data){
      console.log('fetchJSON2');
    data.forEach(function(ele, index, array){
      console.log('fetchJSON');
      var profile = aboutUs.template(ele);
      $('#profiles').append(profile);
    });
  });
};

aboutUs.profileShow = function() {
  // $('button').on('click',function(event){
  //   console.log('try');
    // $(this + ':parent').hide();
    // $(this)('hidden').show();
    $('.hidden').hide();
  $('button').on('click',function(){
    console.log($(this).parent());
    $(this).parent().hide();
    console.log($(this).parent().next());
    $(this).parent().next().show();
    //$(this).next().show();


  });
  // });
};

$(function(){
  aboutUs.compileTemplate();
});

$(document).ajaxComplete(function(){
  aboutUs.profileShow();
});

// var dec1 = document.getElementById('dec1');
// var agenta = document.getElementById('agenta');
// var agent1 = document.getElementById('agent1');
//
// var dec2 = document.getElementById('dec2');
// var agentb = document.getElementById('agentb');
// var agent2 = document.getElementById('agent2');
//
// var dec3 = document.getElementById('dec3');
// var agentc = document.getElementById('agentc');
// var agent3 = document.getElementById('agent3');
//
// var dec4 = document.getElementById('dec4');
// var agentd = document.getElementById('agentd');
// var agent4 = document.getElementById('agent4');
//
// dec1.addEventListener('click', function(e) {
//   event.preventDefault();
//   agent1.className="hidden";
//   agenta.className="visible";
// });
//
// dec2.addEventListener('click', function(e) {
//   event.preventDefault();
//   agent2.className="hidden";
//   agentb.className="visible";
// });
//
// dec3.addEventListener('click', function(e) {
//   event.preventDefault();
//   agent3.className="hidden";
//   agentc.className="visible";
// });
//
// dec4.addEventListener('click', function(e) {
//   event.preventDefault();
//   agent4.className="hidden";
//   agentd.className="visible";
// });
