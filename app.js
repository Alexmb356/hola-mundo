
const ticketPrice = 200
const discountOption = new Map()
discountOption.set('estudiante', 0.8)
discountOption.set('trainee', 0.5)
discountOption.set('junior', 0.15)

const qtyElement = document.getElementById('cantidad')
const categoryElement = document.getElementById('categoria')
const priceElement = document.getElementById('pagar')
const buyTicketsFormElement = document.getElementById('formulario')

buyTicketsFormElement.addEventListener('submit',
    (event) => {
        event.preventDefault()
        if (!buyTicketsFormElement.checkValidity()) {
            event.stopPropagation();
            buyTicketsFormElement.classList.add('was-validated')
        } else if (discountOption.has(categoryElement.value)) {
            const priceWithDiscount = ticketPrice * (1 - discountOption.get(categoryElement.value)).toPrecision(3)
            priceElement.value = "Total a Pagar: $ " + (qtyElement.value * priceWithDiscount)
            console.log(priceElement)
        }
    }
)

buyTicketsFormElement.addEventListener('reset',
    () => {
        buyTicketsFormElement.classList.remove('was-validated')
    }
)




