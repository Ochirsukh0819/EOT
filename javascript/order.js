const Neg = document.getElementById("Ehnii_version");
const SagsniiHeseg = document.getElementById("Sagsnii_heseg");
const HurgeltiinHeseg = document.getElementById("Hurgeltiin_heseg");
const Urgeljluuleh_button = document.getElementById("Urgeljluuleh_button");
const TulburiinHeseg = document.getElementById("Tulburiin_heseg");
const Tulburiin_butsah = document.getElementById("Tulburiin_butsah");
const circle_two = document.getElementById("Hoyr_circle");
const circle_three = document.getElementById("Gurav_circle");
const Sags_gargah = document.getElementById("cart");
const Qpay = document.getElementById("Qpay");
const Applepay = document.getElementById("ApplePay");
const CreditCard = document.getElementById("CreditCard");
const cart = document.getElementById("cart");
const Butsah_button = document.getElementById("Butsah_button")

Urgeljluuleh_button.addEventListener("click", () => {
  /*Hurgeltiin hesgiin opacityg uurchilj baina */
  HurgeltiinHeseg.style = "opacity: 0.7";
  /*Delivery zurgiig zuun tiish yvuulj baina */
  const GuravLuu = "left: 70%;";
  Neg.style = GuravLuu;
  /*Tulbur hesgiin butsah buttong ulaan bolgoj baina */
  Tulburiin_butsah.style = `background-color:#EE3A43;
    color: #FFFFFF;
	border: 1px solid #EE3A43;
	cursor: pointer;`;
  /*Tulburiin hesgiin opacityg nemj baina */
  TulburiinHeseg.style = "opacity: 1;";
  /*Hurgeltiin hesgiin urgeljluuleh buttong tsagaan bolgoj baina */
  Urgeljluuleh_button.style = ` background-color:#FFFFFF;
    border: 1px solid #000000;
    border-radius: #000000;
    cursor: context-menu;
    color: #000000;
    `;
  Qpay.enableAlert = true
});

Tulburiin_butsah.addEventListener("click", () => {
  /*Tulburiin hesgiin opacityg blured bolgoh */
  TulburiinHeseg.style = "opacity: 0.7;";
  /*Hurgeltiin hesgiig blured bish bolgoh */
  HurgeltiinHeseg.style = "opacity: 1;";
  /*Hurgeltiin hesgiin urgeljluuleh buttong ulaan bolgoh */
  Urgeljluuleh_button.style = `    background-color:#EE3A43;
    color: #FFFFFF;
	border: 1px solid #EE3A43;
	cursor: pointer;`;
  /*Delivery zurgiig 2ruu avaachij baina */
  const HoyrLuu = "left: 25%;";
  Neg.style = HoyrLuu;
  /* Tulburiin butsah buttong tsagaan bolgoh*/
  Tulburiin_butsah.style = `background-color:#FFFFFF;
    border: 1px solid #000000;
    border-radius: #000000;
    cursor: context-menu;
    color: #000000;`;
});

Qpay.addEventListener('click', () =>
{
  alert("Таны төлбөр амжилттай хийгдлээ!");
})

Applepay.addEventListener('click', () =>
{
  alert("Таны төлбөр амжилттай хийгдлээ!");
})

CreditCard.addEventListener('click', () =>
{
  alert("Таны төлбөр амжилттай хийгдлээ!");
})

document.addEventListener("DOMContentLoaded", function() {
  // Get the reference to the web component
  var myComponent = document.querySelector("ph-cart_container");
  const Sagsnii_tovch = document.getElementById("Sagsnii_tovch");
  const SagsniiHeseg = document.getElementById("Sagsnii_heseg");

  // Access the button element and get its id attribute
  var button = myComponent.querySelector("#Sagsnii_tovch");
  var id = button.getAttribute("id");
  button.addEventListener("click", () => {
    console.log(id); // Output the id attribute value
    
  
    SagsniiHeseg.style =  "opacity: 0.7;";
    const HoyrLuu = "left: 25%;";
    Neg.style = HoyrLuu;

    button.style = ` background-color:#FFFFFF;
    border: 1px solid #000000;
    border-radius: #000000;
    cursor: context-menu;
    color: #000000;
    `;
    Urgeljluuleh_button.style = `background-color:#EE3A43;
        color: #FFFFFF;
        border: 1px solid #EE3A43;
        cursor: pointer;
          `;
    /* Hurgeltiin hesgiin opacityg uurchilj baigaa n */
    HurgeltiinHeseg.style = "opacity: 1;";
    /*Circle iin dugaariig todruulj baina */
    circle_two.style = "color:#FFFFFF;";
  });

  Butsah_button.addEventListener("click", () => {
    /*Sagsnii hesgiig todruulah */
    // const SagsDisabled = "opacity: 1;";
    SagsniiHeseg.style = "opacity: 1";
    /*Hurgeltiin hesgiig blured bolgoh */
    HurgeltiinHeseg.style = "opacity: 0.7";
    /*Hurgeltiin hesgiin urgeljluuleh buttong tsagaan bolgoh*/
    Urgeljluuleh_button.style = `background-color:#FFFFFF;
      border: 1px solid #000000;
      border-radius: #000000;
      cursor: context-menu;
      color: #000000;`;
    /*Delivery zurgiig 1ruu avaachij baina*/
    const HoyrLuu = "left: 10%;";
    Neg.style = HoyrLuu;
    /*Sagsnii tovchiig ulaan bolgoj baina */
    Sagsnii_tovch.style = `background-color:#EE3A43;
      color: #FFFFFF;
    border: 1px solid #EE3A43;
    cursor: pointer;`;
    /*Process iin circle iin textiig ulaan bolgoj arilgaj baina */
    circle_two.style = "color:#EE3A43;";
  });
});