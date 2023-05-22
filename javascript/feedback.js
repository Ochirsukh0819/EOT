
const feedBtn = document.getElementById('feedbackBtn')
feedBtn.addEventListener('click', async (e)=>{
  e.preventDefault()
    // Get form data
  const email = document.getElementById('email').value;
  const phone = document.getElementsByName('phone')[0].value;
  const message = document.getElementById('message').value;
  const data = {email, phone, message}

  const succ = await fetch('http://localhost:4000/feedback/', {
    method: "POST",
    body: JSON.stringify(data), 
    headers: {
      "Content-Type": "application/json"
    },
  })

  if(succ.ok){
    console.log('success')
  }else(
    console.log('not')
  )
})

