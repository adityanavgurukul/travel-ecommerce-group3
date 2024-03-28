const product = [
	{
		image: "image/bihar2.jpg",
		name:"Bodhgaya",
		type: "Bihar",
		text:"It is famous for being the place where Gautama Buddha is said to have attained enlightenment (Pali: bodhi) under what became known as the Bodhi Tree."
	},
    {
		image: "image/bihar.jpg",
		name:"Glass-Bridge",
		type: "Bihar",
		text:"Glass-bridge:A glass bridge is a type of pedestrian bridge that is made with a glass deck or floor, allowing visitors to see through to the ground or water below."
	},
    {
		image: "image/delhi.jpg",
		name:"India-Gate",
		type: "Delhi",
		text:"India Gate is a historic monument located in New Delhi, India's capital.It was designed to pay tribute to the soldiers who bravely battled during the First World War."
	},
    {
		image: "image/delhi2.jpg",
		name:"Lotus-temple",
		type: "Delhi",
		text:"The Lotus Temple is one of the seven Baha'i House of Worship present around the world. Known for its stunning white petal lotus architecture, iy is one of the most visited establishments in the world."
	},
    {
		image: "image/pune.jpg",
		name:"Aga-Khan Palace",
		type: "Pune",
		text:"The Aga Khan Palace was built by Sultan Muhammed Shah Aga Khan III in the city of Pune, India. The palace was an act of charity by the spiritual leader of the Nizari Ismaili Muslims."
	},
    {
		image: "image/pune2.jpg",
		name:"Swami-Narayana Temple",
		type: "Pune",
		text:"Mandir is set upon 140 Carved Pillars. It also has about 109 Beautiful Toran with 10,269 Carved Sculpture and Deities which is Representing the Heritage of Maharashtra and India."
	},

    {
		image: "image/banglore2.png",
		name:"Banglore Palace",
		type: "Banglore",
		text:"The majestic Bangalore palace is a royal palace known for its architecture with beautiful carvings both inside and outside. It is owned by the Mysore Royal family."
	},
    {
		image: "image/banglore.png",
		name:"Cubbon Park",
		type: "Banglore",
		text:"The Cubbon Park has a history of over 100 years. It was established in the year 1870 by Sri John Meade, the then acting Commissioner of Mysore."
	},
  {
		image: "image/up.avif",
		name:"Taz-Mahal",
		type: "Uttar pradesh",
		text:"The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor,Mumtaz Mahal."
	},
  {
		image: "image/up2.avif",
		name:"Banaras-Ghat",
		type: "Uttar pradesh",
		text:"Hindu mythology considers the ghat to be the place of birth of Agni, the God of Fire. A Shiva temple stands here partially submerged in Ganga and is believed to be so heavy that it caused the ghat to collapse into the river."
	},
  {
		image: "image/mp2.jpg",
		name:"Pachmarhi",
		type: "Madhya pradesh",
		text:"Pachmarhi is the only hill station and is the highest point in Madhya Pradesh. Pachmarhi is also often known as 'Satpura ki Rani' or the Queen of the Satpura Range. Situated at an altitude of 1,067 metres."
	},
  {
		image: "image/mp.jpg",
		name:"Bhedaghat",
		type: "Madhya pradesh",
		text:"Bhedaghat is known for the Dhuandar Falls a huge cascade of water that falls from a height of 98 feet. Boating in Bhedaghat especially during the moonlit night would surely make up for an unforgettable experience. "
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
		var { image, type, text ,name} = item;
		return (
			`<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
					<p>${name}</p>
                    <p id = 'type'>${type}</p>
					<p id = 'text'>${text}</p>
                </div>
            </div>`
		)
	}).join('')
};

