
/*
<div class="col mb-4">
          <div class="card">
            <img src="https://dummyimage.com/600x400/000/fff.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
*/

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
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("col", "mb-4");
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    mainDiv.appendChild(cardDiv);
    const img = document.createElement("img");
    img.src = image;
    img.alt = title;
    cardDiv.appendChild(img);

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.innerText = title;
    cardTitle.classList.add("card-title");
    cardBodyDiv.appendChild(cardTitle);
    const cardText = document.createElement("p");
    cardText.innerText = description;
    cardText.classList.add("card-text");
    cardBodyDiv.appendChild(cardText);
    const cardButton = document.createElement("button");
    cardButton.innerText = "Details";
    cardButton.classList.add("btn", "btn-primary");

    const contactDetails = document.createElement("p");
    contactDetails.classList.add("card-text");
    contactDetails.innerText = contact;
    contactDetails.hidden = true;
    cardBodyDiv.appendChild(contactDetails);

    cardButton.addEventListener('click', (e) => {
        const info = e.target.parentElement.children[2];
        info.hidden = !info.hidden;
        
        if (info.hidden) {
            e.target.innerText = "Details";
        } else {
            e.target.innerText = "Hide";
        }
        
    });
    cardBodyDiv.appendChild(cardButton);


    cardDiv.appendChild(cardBodyDiv);
    target.appendChild(mainDiv);
    
}