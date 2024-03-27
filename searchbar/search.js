const product = [
	{
		image: "image/bihar2.jpg",
		rating: 4.5,
		type: "bihar",
	},
    {
		image: "image/bihar.jpg",
		rating: 3.8,
		type: "bihar"
	},
    {
		image: "image/delhi.jpg",
		rating: 4.0,
		type: "delhi"
	},
    {
		image: "image/delhi2.jpg",
		rating: 3.8,
		type: "delhi"
	},
    {
		image: "image/pune.jpg",
		rating: 3.6,
		type: "pune"
	},
    {
		image: "image/pune2.jpg",
		rating: 3.9,
		type: "pune"
	},

    {
		image: "image/banglore2.png",
		rating: 3.8,
		type: "banglore"
	},
    {
		image: "image/banglore.png",
		rating: 3.5,
		type: "banglore"
	},
  {
		image: "image/up.avif",
		rating: 3.8,
		type: "Uttar pradesh"
	},
  {
		image: "image/up2.avif",
		rating: 3.6,
		type: "Uttar pradesh"
	},
  {
		image: "image/mp.jpg",
		rating: 4.2,
		type: "Madhya pradesh"
	},
  {
		image: "image/mp2.jpg",
		rating: 4.8,
		type: "Madhya pradesh"
	},

]


document.getElementById('searchBar').addEventListener('keyup', (e) => {

	const searchData = e.target.value.toLowerCase();

	if (searchData === 'bihar') {
		const shirtData = product.filter(item => item.type.toLowerCase() === 'bihar');
		displayItem(shirtData);
	} else if (searchData === 'delhi') {
		const tshirtData = product.filter(item => item.type.toLowerCase() === 'delhi');
		displayItem(tshirtData);
	} else if (searchData === 'pune') {
		const jeansData = product.filter(item => item.type.toLowerCase() === 'pune');
		displayItem(jeansData);
	} else if (searchData === 'banglore') {
		const lowerData = product.filter(item => item.type.toLowerCase() === 'banglore');
		displayItem(lowerData);
	} else if (searchData === 'madhya pradesh') {
		const lowerData = product.filter(item => item.type.toLowerCase() === 'madhya pradesh');
		displayItem(lowerData);
	} else if (searchData === 'uttar pradesh') {
		const lowerData = product.filter(item => item.type.toLowerCase() === 'uttar pradesh');
		displayItem(lowerData);
	}
});


const displayItem = (items) => {
	document.getElementById('root').innerHTML = items.map((item) => {
		var { image, rating, price } = item;
		return (
			`<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>Rating: ${rating}</p>
                </div>
            </div>`
		)
	}).join('')
};

