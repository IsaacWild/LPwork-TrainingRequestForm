const pageLoadMain = (() => {
    const pageContainer = document.querySelector('.pageContainer')

    //page Header
    const headerContainer = document.createElement('div')
    headerContainer.classList.add('headerContainer')
    pageContainer.appendChild(headerContainer)
    const headerText = document.createElement('p')
    headerText.textContent = 'Welcome to the fake LP Wiki'
    headerText.classList.add('headerText')
    headerContainer.appendChild(headerText)

    //page form
    const formContainer = document.createElement('div')
    const fieldset = document.createElement('fieldset')
    pageContainer.appendChild(formContainer)
    formContainer,appendChild(fieldset)
    // not sure how to add attributes for form tag - going to use inputs instead no form tags... for now
    const formTitle = document.createElement('p')
    formTitle.textContent = 'Training Request Form'
    formTitle.classList.add('formTitle')
    fieldset.appendChild(formTitle)




    return {pageContainer}
})();
