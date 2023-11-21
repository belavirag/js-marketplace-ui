import { createElementHelper } from "../domutils.js";

/**
 * 
 * @param {Object}      card - The ad card
 * @param {HTMLElement} card.target
 * @param {string}      card.title
 * @param {string}      card.description
 * @param {string}      card.image
 * @param {string}      card.contact 
 */
export const render = ({ target, title, description, image, contact }) => {
    const mainDiv = createElementHelper("div", "", ["col", "mb-4"]);
    const cardDiv = createElementHelper("div", "", ["card"]);
    mainDiv.appendChild(cardDiv);
    const img = createElementHelper("img");
    img.src = image;
    img.alt = title;
    cardDiv.appendChild(img);

    const cardBodyDiv = createElementHelper("div", "", ["card-body"]);
    const cardTitle = createElementHelper("h5", title, ["card-title"]);
    cardBodyDiv.appendChild(cardTitle);
    const cardText = createElementHelper("p", description, ["card-text"]);
    cardBodyDiv.appendChild(cardText);
    const cardButton = createElementHelper("button", "Details", ["btn", "btn-primary"]);
    const contactDetails = createElementHelper("p", contact, ["card-text"]);
    contactDetails.hidden = true;
    cardBodyDiv.appendChild(contactDetails);

    cardButton.addEventListener('click', (e) => {
        const infoElem = e.target.parentElement.children;
        const info = infoElem[infoElem.length - 2];

        info.hidden = !info.hidden;
        e.target.innerText = info.hidden ? "Details" : "Hide";
    });
    cardBodyDiv.appendChild(cardButton);

    cardDiv.appendChild(cardBodyDiv);
    target.appendChild(mainDiv);
    
}