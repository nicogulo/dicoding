const english = "English";
const indonesia = "Indonesia";
const japan = "Japan";

const sayHello = (language) => {
  switch (language) {
    case english:
      return "Hello! How are you?";
    case indonesia:
      return "Hallo! Apa kabar?";
    case japan:
      return "Konnichiwa! Ogenkidesuka?";
    default:
      return "Hello! ";
  }
};
console.log(sayHello(indonesia));
