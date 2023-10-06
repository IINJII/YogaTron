let imageContainer = document.querySelector('#yoga-image-container');
let obj = [
    {
        img: "./image/Cat Pose.jpeg",
        attr: "Cat Pose",
        emoji: '&#128049'
    },
    {
        img: "./image/Eagle Pose.jpeg",
        attr: "Eagle Pose",
        emoji: '&#129413'
    },
    {
        img: "./image/Happy Baby Pose.jpeg",
        attr: "Happy Baby Pose",
        emoji: '&#127868'
    },
    {
        img: "./image/Seal Pose.jpeg",
        attr: "Seal Pose",
        emoji: '&#128031'
    },
    {
        img: "./image/Snake Pose.jpeg",
        attr: "Snake Pose",
        emoji: '&#128013'
    },
]
let nextBtn = document.querySelector('#next-btn')
let submit = document.querySelector('#submit-btn');
let input = document.getElementsByTagName('input');
let modalContent = document.querySelector('.custom-modal-content')
let modalContainer = document.querySelector('.custom-modal-container')
let hint = document.querySelector('#hint-container')

let i = 0;
let img = document.createElement('img');
img.src = obj[i].img;
img.height = '400'
img.width = '400'
img.alt = obj[i].attr;
imageContainer.appendChild(img);
modalContent.innerHTML = obj[i].emoji

hint.addEventListener('click', (e) => {
    modalContainer.style.display = 'block'
})

window.addEventListener('click', (e) => {
    if(e.target === modalContainer)
    {
        modalContainer.style.display = 'none'
    }
})


nextBtn.addEventListener('click', (e) => {
    i++;
    if(i == obj.length-1)
    {
        nextBtn.style.display = 'none'
        return;
    }
    imageContainer.innerHTML = ''
    img = document.createElement('img');
    img.src = obj[i].img
    img.height = '400'
    img.width = '400'
    img.alt = obj[i].attr
    imageContainer.appendChild(img)
    modalContent.innerHTML = obj[i].emoji
    document.body.style.backgroundColor = 'white'
    input[0].value = '';
})


submit.addEventListener('click', (e) => {
    console.log(img.alt, input[0].value)
    if(input[0].value.toLowerCase() == img.alt.toLowerCase())
    {
        document.body.style.backgroundColor = '#87fa4d';
    }
    else
    {
        document.body.style.backgroundColor = 'red'
    }
})