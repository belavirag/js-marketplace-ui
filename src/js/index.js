import { render } from "./components/card.js";
import { filterAds } from "./sampledata.js";

const renderAll = () => {
    const target = document.getElementById("ads");
    target.innerHTML = '';

    filterAds().forEach(ad => {
        render({ target, ...ad });
    });
}

renderAll();