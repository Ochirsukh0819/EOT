const Neg = document.getElementById('Ehnii_version')
const SagsniiHeseg = document.getElementById('Sagsnii_heseg')
const HurgeltiinHeseg = document.getElementById('Hurgeltiin_heseg')
const Urgeljluuleh_button = document.getElementById('Urgeljluuleh_button')
const TulburiinHeseg = document.getElementById('Tulburiin_heseg')
const Tulburiin_butsah = document.getElementById('Tulburiin_butsah')
const circle_two = document.getElementById('Hoyr_circle')
const circle_three = document.getElementById('Hoyr_circle')

Urgeljluuleh_button.disabled = true;
Tulburiin_butsah.disabled = true;
Butsah_button.disabled = true;

Sagsnii_tovch.addEventListener('click', () => {
    /*Sagsnii tovch darah uyed sagsiig blured bolgoj baina */
    const SagsDisabled = 'opacity: 0.7;'
    SagsniiHeseg.style = SagsDisabled
    /* Delivery zurgiig yvuulj baina */
    const HoyrLuu = 'left: 25%;'
    Neg.style = HoyrLuu
    /* Hurgeltiin hesgiin buttong uurchilj baigaa n */
    Urgeljluuleh_button.style = `background-color:#EE3A43;
    color: #FFFFFF;
	border: 1px solid #EE3A43;
	cursor: pointer;
    `
    /* Hurgeltiin hesgiin opacityg uurchilj baigaa n */
    HurgeltiinHeseg.style = 'opacity: 1;'
    /*Sagsnii buttonii style iig solij baina */
    Sagsnii_tovch.style = ` background-color:#FFFFFF;
        border: 1px solid #000000;
        border-radius: #000000;
        cursor: context-menu;
        color: #000000;
    `
    /*Buttonguudiig disable bolgoj baina */
    Sagsnii_tovch.disabled = true;
    Butsah_button.disabled = false;
    Urgeljluuleh_button.disabled = false;
    Tulburiin_butsah.disabled = true;
    /*Circle iin dugaariig todruulj baina */
    circle_two.style = 'color:#FFFFFF;'
})


Urgeljluuleh_button.addEventListener('click', () => {
    /*Hurgeltiin hesgiin opacityg uurchilj baina */
    const HurgeltDisabled = 'opacity: 0.7;'
    HurgeltiinHeseg.style = HurgeltDisabled
   /*Delivery zurgiig zuun tiish yvuulj baina */
    const GuravLuu = 'left: 70%;'
    Neg.style = GuravLuu
    /*Tulbur hesgiin butsah buttong ulaan bolgoj baina */
    Tulburiin_butsah.style = `background-color:#EE3A43;
    color: #FFFFFF;
	border: 1px solid #EE3A43;
	cursor: pointer;`
    /*Tulburiin hesgiin opacityg nemj baina */
    TulburiinHeseg.style = 'opacity: 1;'
    /*Hurgeltiin hesgiin urgeljluuleh buttong tsagaan bolgoj baina */
    Urgeljluuleh_button.style = ` background-color:#FFFFFF;
    border: 1px solid #000000;
    border-radius: #000000;
    cursor: context-menu;
    color: #000000;
    `
    /*Buttonguudiig disable bolgoj baina */
    Sagsnii_tovch.disabled = true;
    Urgeljluuleh_button.disabled = true;
    Butsah_button.disabled = true;
    Tulburiin_butsah.disabled = false;
})


Tulburiin_butsah.addEventListener('click', () => {
    /*Tulburiin hesgiin opacityg blured bolgoh */
    TulburiinHeseg.style = 'opacity: 0.7;'
    /*Hurgeltiin hesgiig blured bish bolgoh */
    HurgeltiinHeseg.style = 'opacity: 1;'
    /*Hurgeltiin hesgiin urgeljluuleh buttong ulaan bolgoh */
    Urgeljluuleh_button.style = `    background-color:#EE3A43;
    color: #FFFFFF;
	border: 1px solid #EE3A43;
	cursor: pointer;`
    /*Delivery zurgiig 2ruu avaachij baina */
    const HoyrLuu = 'left: 25%;'
    Neg.style = HoyrLuu
    /* Tulburiin butsah buttong tsagaan bolgoh*/
    Tulburiin_butsah.style = `background-color:#FFFFFF;
    border: 1px solid #000000;
    border-radius: #000000;
    cursor: context-menu;
    color: #000000;`
    /*Buttonguudiig disable bolgoj baina */
    Sagsnii_tovch.disabled = true;
    Butsah_button.disabled = false;
    Urgeljluuleh_button.disabled = false;
    Tulburiin_butsah.disabled = true;
})


Butsah_button.addEventListener('click', () => {
    /*Sagsnii hesgiig todruulah */
    const SagsDisabled = 'opacity: 1;'
    SagsniiHeseg.style = SagsDisabled
    /*Hurgeltiin hesgiig blured bolgoh */
    HurgeltiinHeseg.style = 'opacity: 0.7;'
    /*Hurgeltiin hesgiin urgeljluuleh buttong tsagaan bolgoh*/
    Urgeljluuleh_button.style = `background-color:#FFFFFF;
    border: 1px solid #000000;
    border-radius: #000000;
    cursor: context-menu;
    color: #000000;`
    /*Delivery zurgiig 1ruu avaachij baina*/
    const HoyrLuu = 'left: 10%;'
    Neg.style = HoyrLuu
    /*Sagsnii tovchiig ulaan bolgoj baina */
    Sagsnii_tovch.style = `background-color:#EE3A43;
    color: #FFFFFF;
	border: 1px solid #EE3A43;
	cursor: pointer;`
    /*Buttonguudiig disable bolgoj baina */
    Sagsnii_tovch.disabled = false;
    Butsah_button.disabled = true;
    Urgeljluuleh_button.disabled = true;
    Tulburiin_butsah.disabled = true;
    /*Process iin circle iin textiig ulaan bolgoj arilgaj baina */
    circle_two.style = 'color:#EE3A43;'
})