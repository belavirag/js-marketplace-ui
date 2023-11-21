/**
 * @param {string} type
 * @param {string} innerText 
 * @param {string[]} classList 
 * 
 */
export const createElementHelper = (type, innerText = "", classList = []) => {
    const elem = document.createElement(type);
    elem.innerText = innerText;
    classList.forEach(cls => elem.classList.add(cls));

    return elem;
}