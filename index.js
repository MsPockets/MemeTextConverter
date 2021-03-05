function spongebob(str)  {
  let message = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      message.push(str[i])
    } else if (i % 2 === 1) {
      message.push(str[i].toUpperCase())
    } else {
      message.push(str[i].toLowerCase())
    }
  }
  document.querySelector('.spongebobtext').innerHTML= message.join('')
}

function onSubmit(e) {
  const input = document.querySelector('.message')
  const text = input.value
  spongebob(text)
}