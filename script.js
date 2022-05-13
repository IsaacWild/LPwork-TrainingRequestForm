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
    const form = document.createElement('form')
    // not sure how to add attributes for form tag




    return {pageContainer}
})();
