$('#spooky-button-1').click((e) => {
  $('body').toggleClass('black');
})

$('#spooky-button-2').click((e) => {
  $('.container').append('<img class="dsp" src="/assets/img/dsp.png" width=300>')  
})

$('#spooky-button-3').click((e) => {
  axios.get('localhost:3000/davidspumpkins')
    .then(result => {
      console.log(result)
    })
})