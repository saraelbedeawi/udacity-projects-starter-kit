import handleSubmit from './js/formHandler'

import './styles/style.scss'
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("submit-id").addEventListener("click", function() 
    {
       handleSubmit();
      });
    // TODO: get the button for submit
    // TODO: add event listener to it when the click to call handleSubmit function
})
export { handleSubmit }
