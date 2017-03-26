var slideContent, slideShow, slideCounter, // used intentionaly instead of i 
    slideContentLength, slideShowRunner,
    //variables below are for the buttons
    contentButtons, contentContents, //the content that is displayed when buttons are clicked
    contentContainer, //gets content fron contentContents 
    contentButtonContainer, // buttons go here 
    contentCounter, //used intentionally instead of k
    contentButtonClass //used to get the class of a content button
;

//make the array of content
slideContent = [
	"<div class=\"slide\"><figure><img src=\"images/slides01-windmill.jpg\" alt=\"windmill\"><figcaption><p>Clean energy has been around a long time</p></figcaption></figure></div>", "<div class=\"slide\"><figure><img src=\"images/slides02-solar-wind.jpg\" alt=\"solar and wind\"><figcaption><p>Renewable energy sources are cleaner than fossil fuels.</p></figcaption></figure></div>", 
	"<div class=\"slide\"><figure><img src=\"images/slides03-tidal.jpg\" alt=\"tidal\"><figcaption><p>Tidal power is an under utilized resource.</p></figcaption></figure></div>", 
	"<div class=\"slide\"><figure><img src=\"images/slides04-hydro.jpg\" alt=\"hydro\"><figcaption><p>Clean does't necessarily mean environmentally friendly.</p></figcaption></figure></div>", "<div class=\"slide\"><figure><img src=\"images/slides05-biomass.jpg\" alt=\"biomass\"><figcaption><p>Biomass is an untapped resource</p></figcaption></figure></div>"
	];

//find out the length of the slideshow array so I know when to begin the loop again
slideContentLength = slideContent.length;

//set where the content will go when it passes through the loop
slideShow = document.getElementById("slide-show");

//have some content ready when the page loads
slideShow.innerHTML = slideContent[0];

//start slideCounter at 1 (not 0) because I want to skip the initial slide above
slideCounter = 1;

function slideTransition() {
    if (slideCounter <= slideContentLength) {
        //loop through the slideContent array here
        slideShow.innerHTML = slideContent[slideCounter];
        //increment the slideCounter
        slideCounter += 1;
        if (slideCounter === slideContentLength) {
            //reset slideCounter to 0 once the end of the array is reached
            slideCounter = 0;
        }
    }
}

//run the function and set an interval
slideShowRunner = setInterval(slideTransition, 6000); //transition duration has to match animation in CSS

//set up the changing with buttons
contentButtons = [
	"<button id=\"button-01\" class=\"active\"><span>Seize Power</span></button>", 
	"<button id=\"button-02\"><span>Increase Wages</span></button>", 
	"<button id=\"button-03\"><span>Building Codes</span></button>"
	];

contentContents = [
	"<img src=\"images/content01-nationalize.jpg\" alt=\"protest sign held aloft\"><p><strong>Seize power: </strong>As long as the best profit margins come from fossil fuels, there is no incentive to make clean energy affordable for the average household. If people depend on your oil, you have a permanent customer. This stands in the way of developing clean energy policy because in a capitalist world, profit will always come first. We could get around this by seizing control of the energy sector and making it a public asset. This would require a global effort as any country who has tried in the past gets crushed by the World Bank and the IMF.</p>", 
	"<img src=\"images/content02-wages.jpg\" alt=\"factory workers in China\"><p><strong>Increase wages: </strong>The side of the \"make green energy affordable\" equation that is always overlooked is the income side. If something is too expensive, it needs to get cheaper or you need more money. Adjusted for inflation, wages for all but the richest have been stagnate or dropping for decades. On top of that, employment stability is not what it used to be. Many people are working casual, part-time or on contract. Stabilizing the workforce and implementing things like a guaranteed basic income would not only make green energy affordable, but housing, food and education as well.</p>", 
	"<img src=\"images/content03-building.jpg\" alt=\"house with slar panels on roof\"><p><strong>Improve building codes: </strong>We could legislate that all new buildings be built with carbon neutral materials and are equipped with the latest energy efficient technology. This has been proposed in the past. Industry leaders have said that such regulations would cause the price to rise as the cost was passed on to consumers. Several economists state that this rarely happens. Businesses carefully calculate the optimum price for everything so they can keep prices as high as they can get away with. Implementing such building codes would not increase housing costs, but would likely cut into developers profits.</p>"
	];

contentContainer = document.getElementById("content-container");

contentButtonContainer = document.getElementById("content-buttons");
for (var i = 0; i < contentButtons.length; i += 1) {
    contentButtonContainer.innerHTML += contentButtons[i];
}

function buttonListener(ev) {
    contentButtonClass = document.getElementsByClassName("active");
    for (var c = 0; c < contentButtonClass.length; c += 1) {
        contentButtonClass[c].removeAttribute("class");
    }
    if (ev.target.id === "button-01") {
        ev.target.setAttribute("class", "active");
        contentContainer.innerHTML = contentContents[0];
    }
    if (ev.target.id === "button-02") {
        ev.target.setAttribute("class", "active");
        contentContainer.innerHTML = contentContents[1];
    }
    if (ev.target.id === "button-03") {
        ev.target.setAttribute("class", "active");
        contentContainer.innerHTML = contentContents[2];
    }
}

var targetButtons = document.querySelectorAll("button");

for (contentCounter = 0; contentCounter < contentButtons.length; contentCounter += 1) {
    targetButtons[contentCounter].addEventListener("click", buttonListener, false);
}