// this function gets pictures from instagram and displays them on the webpage

let API = 'https://www.instagram.com/jonathanjimenez6799/?__a=1';
// https://www.instagram.com/jonathanjimenez6799/?hl=es-la

getInstaPictures();

async function getInstaPictures() {
  const response = await fetch(API);
  const jsonData = await response.json();
  // console.log(jsonData);
  const pictures = jsonData.graphql.user.edge_owner_to_timeline_media.edges;
  // console.log(pictures);
  for (let i = 0; i < pictures.length; i++) {
    let img = document.createElement('img');
    img.src = pictures[i].node.display_url;
    document.body.appendChild(img);
  }
}

// this function moves the flashlight 

document.addEventListener('mousemove', update);

function update(e) {
  let x = e.clientX;
  let y = e.clientY;

  // sets --cursor variables that we use in the CSS to display flashlight
  document.documentElement.style.setProperty('--cursorX', x + 'px');
  document.documentElement.style.setProperty('--cursorY', y + 'px');
}
