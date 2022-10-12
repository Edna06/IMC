export function calculateIMC(weight, height) {
  return (weight / ((height / 100) ** 2)). toFixed(2)
}


// identificando os caracters que forem inseridos como true ou false (consicional)
export function NotANumber(value) {
  return isNaN(value) || value == ""
}
