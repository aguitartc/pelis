'use strict';

let deferredInstallPrompt = null;
const installButton = document.getElementById('btn_install');
installButton.addEventListener('click', installPWA);
//evento especial
window.addEventListener('beforeInstallpromt', saveBeforeInstallPromptEvent);

function  saveBeforeInstallPromptEvent(evt){
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}

function installPWA (evt){
    deferredInstallPrompt.prompt();
    evt.src.setAttribute('hidden', true);
    deferredInstallPrompt.userChoice.then((choice)=>{
        if(choice.outcome === "accepted"){
            console.log("aceptado");
        }
        {
            console.log("No aceptado");
        }
        deferredInstallPrompt = null;
    })
}
window.addEventListener('appinstalled',logAppInstalled);

function  logAppInstalled(evt)
{
    console.log("App Pelis instalada");
}
