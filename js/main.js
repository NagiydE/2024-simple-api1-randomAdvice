
document.querySelector('#button').addEventListener('click', getAdvice)
function getAdvice() {

    const url = `https://api.adviceslip.com/advice`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            

            console.log(data.slip.advice)
            
            document.querySelector('h2').textContent = data.slip.advice

        })
        .catch(err => {
            console.error(`error: ${err}`)
        })

}