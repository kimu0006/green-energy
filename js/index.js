
// Load your images on page-load
function preloader() {
    const imagesPaths = [
        "img/img-1.jpg",
        "img/img-2.jpeg",
        "img/img-3.jpeg"
    ];
    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }
    
    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);

 
// get references
let $dc = document.getElementById('dynamic-content');

// Nodelist
var nodeList = document.querySelectorAll("button");

    // Get all buttons in a NODE LIST of buttons (array like structure) */
    const data = {
        partial1: {
            heading: 'Community Solar',
            imageURL: 'img/img-1.jpg',
            imageAlt: 'picture of community solar',
            bodyText: 'A community solar project, or solar garden, is a collection of solar panels whose energy is shared by multiple houses. The solar garden would power each home’s water, heat and electricitywhile the entire community would split the lower energy costs. They can be implemented by a few or multiple individuals within a community. Community solar projects  have benefited many lower-income communities in places like Denver, Colorado. Plus, they’re growing in popularity. It’s expected in America for 50 percent of the solar energy market to come from solar communities in the next few years. As we moveforward, solar energy makes sense.'
        },
        partial2: {
            heading: 'Tax Credits',
            imageURL: 'img/img-2.jpg',
            imageAlt: 'picture of tax credits',
            bodyText: 'Providing tax credits to those who invest in and produce renewable energy sources would generate a willingness to transition to energy efficient resources like solar and wind power.With the money saved by tax credits, developers and investors would see their investments paid off.'
        },
        partial3: {
            heading: 'Declining Costs of Wind Power',
            imageURL: 'img/img-3.jpg',
            imageAlt: 'picture related to wind power',
            bodyText: 'Like the declining costs of solar power, the cost of wind power has decreased by 90 percent since the 1980s. With declining costs comes more incentive to invest, and communities have come together to build wind farms to power local businesses. By operating off the power of small wind farms, communities who suffer from high energy costs can work together for a better future.'
        }
    };

    const markup = {
            cs: `<h2>${data.partial1.heading}</h2>
                 <img src="${data.partial1.imageURL}" alt="${data.partial1.imageAlt}"> 
                 <p>${data.partial1.bodyText}</p>`,

            tc: `<h2>${data.partial2.heading}</h2>
                <img src ="${data.partial2.imageURL}" alt="${data.partial2.imageALT}">
                <p>${data.partial2.bodyText}</p>`,

            wind: `<h2>${data.partial3.heading}</h2>
                  <img src ="${data.partial3.imageURL}" alt="${data.partial3.imageALT}">
                  <p>${data.partial3.bodyText}</p>`,

    };

    // initial Page markup
    $dc.innerHTML = markup.cs; 

   function handleClick(ev){
       // moving the id-attribute to the curenty clicked button
       let currentButton = ev.target;

       for (let i = 0; i < nodeList.length; i++) {

        if (nodeList[i].hasAttribute('id')) {

            nodeList[i].removeAttribute('id');
        }
    }

    currentButton.setAttribute('id', 'active-button');

        if (ev.target == nodeList[0] ) {
            $dc.innerHTML = markup.cs
        } 

        if (ev.target == nodeList[1] ) {
            $dc.innerHTML = markup.tc
        } 

        if (ev.target == nodeList[2] ) {
            $dc.innerHTML = markup.wind
        }    
   }

  //registering items for click event-------------------
for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].addEventListener('click', handleSelection);
};
   
   


   




