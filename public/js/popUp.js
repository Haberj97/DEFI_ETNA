
const bodySelected = document.querySelector('body');

document.querySelector(".createNewPost").addEventListener('click', setNewCreationForm)

function setSmokeScreen(){
    let newSmokeScreen = document.createElement('div');
    newSmokeScreen.className = 'smokeScreen';
    bodySelected.appendChild(newSmokeScreen);
    let newCloseButton = document.createElement('button');
    newCloseButton.innerHTML = 'Close';
    newCloseButton.className = 'closeButton';
    newCloseButton.setAttribute('onclick',"location.reload()");
    bodySelected.appendChild(newCloseButton);
}


function setNewCreationForm(){
    setSmokeScreen();
    let newCreationForm = document.createElement('div')
    newCreationForm.className = 'creationForm';
    bodySelected.appendChild(newCreationForm);

    let creationForm = document.querySelector('.creationForm') 

    let title = document.createElement('h1')
    title.className ='formTitle';
    title.innerText='Create a new post'
    creationForm.appendChild(title);

    let createFormulaire = document.createElement('form');
    createFormulaire.method = 'POST';
    createFormulaire.className = 'form';
    createFormulaire.action = '/index/create';      
    let formulaire = document.querySelector('.form')
    createFormulaire.innerHTML = `
    <label for="firstName">First Name</label>
    <input name="firstName" placeholder="First Name" required />
    <label for="lastName">Last Name</label>
    <input name="lastName" placeholder="Last name" required />
    <label for="service">Service</label>
    <select name="service" >
        <option value="Service pédagogique" selected>Service pédagogique</option>
        <option value="Service administratif">Service administratif</option>
        <option value="Service des admissions">Service des admissions</option>
        <option value="BLU">BLU</option>
        <option value="Studio">Studio</option>
        <option value="RH et Office Management">RH et Office Management</option>
    </select>
    <label for="pictureUrl">Login</label>
    <input name="pictureUrl" type="text" placeholder="Login" required />
    <label for="mail">E-mail</label>
    <input name="mail" type="email" placeholder="Email" required />
    <label for="phone">Phone Number</label>
    <input type="tel" pattern="[+]{1}[0-9]{2}[0-9]{9}" name="phone" placeholder="Phone Number" required />
    <label for="hrNote">Hr Note</label>
    <textarea name="hrNote" max-rows=3 max-cols=3 placeholder="RH note"/>
    `
    creationForm.appendChild(createFormulaire);

    var newButton = document.createElement('button');
    newButton.innerText = 'Submit';
    newButton.type = "submit";
    document.querySelector('.form').appendChild(newButton);

}




// setTimeout(function(){
//     setSmokeScreen();
//     setCookiePopUp();
//     popGenaration();
// },2000);

// bodySelected.createElement('button').innerHTML = 'TESTBUTTON'.setAttribute('onclick',)
// function popGenaration()
// {
//             let accepted = getCookie("cookie");
//             if (accepted !== "accepted")
//             {
//                 document.querySelector(".smokeScreen").classList.add("active");
//                 document.querySelector(".cookiePopUp").classList.add("active");
//             }
//             else
//             {
//               document.querySelector(".unsetCookie").classList.add("active");
//             }
// }

// function setSmokeScreen()
// {
//     let newSmokeScreen = document.createElement('div');
//     newSmokeScreen.className = 'smokeScreen';
//     bodySelected.appendChild(newSmokeScreen);    
// }

// function setCookiePopUp()
// {
    
//     let newPopUp = document.createElement('div');
//     newPopUp.className = 'NewPostPopUp';
//     bodySelected.appendChild(newPopUp);
    
//     let newPopUpTitle = document.createElement('h2');
//     newPopUpTitle.className = 'popUpTitle';
//     newPopUpTitle.innerHTML = 'Cookies policy'
//     document.querySelector('.NewPostPopUp').appendChild(newPopUpTitle);

//     let newPopUpContent = document.createElement('p');
//     newPopUpContent.className = 'popUpContent';
//     newPopUpContent.innerText = 'With your agreement, we and our partners use cookies or similar technologies to store, access, and process personal data like your visit on this website. You can withdraw your consent or object to data processing based on legitimate interest at any time by clicking on "Learn More" or in our Privacy Policy on this website. We and our partners do the following data processing: Personalised ads and content, ad and content measurement, audience insights and product development, Store and/or access information on a device \n'
//     document.querySelector('.NewPostPopUp').appendChild(newPopUpContent);

//     let consentButton = document.createElement('button');
//     consentButton.className = 'consentButton';
//     consentButton.innerHTML = "Accept";
//     consentButton.type = "submit";
//     consentButton.name = "Accept";
//     consentButton.setAttribute('onclick','accepted();');
//     document.querySelector('.NewPostPopUp').appendChild(consentButton);
    
//     let closeButton = document.createElement('button');
//     closeButton.className = 'consentButton';
//     closeButton.setAttribute('onclick','closePopUp();');
//     closeButton.type = "submit";
//     closeButton.name = 'refuse';
//     closeButton.innerHTML = "Refuse";
//     document.querySelector('.NewPostPopUp').appendChild(closeButton);

//     iHaveChangeOfMindAboutCookies = document.createElement('button');
//     iHaveChangeOfMindAboutCookies.className = 'unsetCookie';
//     iHaveChangeOfMindAboutCookies.innerHTML = "i want to change my choice about cookies";
//     iHaveChangeOfMindAboutCookies.setAttribute('onclick','unsetCookies();');
//     bodySelected.appendChild(iHaveChangeOfMindAboutCookies);

//     document.querySelector(".unsetCookie").classList.remove("active");
// }

// function accepted()
// {
//     document.querySelector(".smokeScreen").classList.remove("active");
//     document.querySelector(".NewPostPopUp").classList.remove("active");
//     document.querySelector(".unsetCookie").classList.add("active");    
// }
// function closePopUp()
// {
//     document.querySelector(".smokeScreen").classList.remove("active");
//     document.querySelector(".NewPostPopUp").classList.remove("active");
// }

// function unsetCookies()
// {
//     document.querySelector(".smokeScreen").classList.add("active");
//     document.querySelector(".NewPostPopUp").classList.add("active");
//     document.querySelector(".unsetCookie").classList.remove("active");

// }