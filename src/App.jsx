import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputFirst from './components/InputFirst'
import PresentationBox from './components/PresentationBox'



const FFcharacters = [
  {
    name:"Tidus",
    age:17,
    weapon:"sword",
    description :"Tidus se voit transporté 1000 ans dans le futur dans le monde de Spira, suite à l'attaque d'une entité nommée Sin. Il y rencontre Yuna, une jeune Invokeur dont il devient l'un des gardiens.",
    Img:'https://www.supersoluce.com/sites/default/files/logo1/000-image-illu-final-fantasy-10-tidus-2.jpg'
  },

  {
    name:"Yuna",
    color:"purple",
    age:17,
    weapon:"scepter",
    description :"una décide de devenir Invokeur et d'accomplir son pèlerinage afin de détruire Sin. Au cours de son voyage, elle rencontre Tidus, et tous deux finiront par détruire Sin au prix d'un lourd sacrifice.",
    Img:"https://www.supersoluce.com/sites/default/files/logo1/000-image-illu-final-fantasy-10-yuna-2.jpg"
  },

  {
    name:"Wakka",
    age:17,
    weapon:"ball",
    description :"Capitaine et entraineur de l'équipe de blitzball des Besaid Aurochs, il abandonne son équipe après le tournoi de Luca pour devenir le gardien de Yuna et la suivre dans son pèlerinage.",
    Img:"https://www.supersoluce.com/sites/default/files/logo1/000-image-illu-final-fantasy-10-wakka-2.jpg"
  },

  {
    name:"Rikku",
    age:15,
    weapon:"daggers",
    description :"Fille du chef des Al Bheds et cousine de Yuna, elle devient la gardienne de celle-ci lors de son pèlerinage.",
    Img:"https://www.supersoluce.com/sites/default/files/logo1/000-image-illu-final-fantasy-10-rikku-2.jpg"
  },

  {
    name:"Auron",
    age:35,
    weapon:"sword",
    description :"Auron est un homme qui fait preuve d'un sang-froid irréprochable durant la totalité de l'histoire, il se montre peu bavard et implacable sur le plan du Pèlerinage de Yuna, il ne veut en rien l'arrêter et est déterminé à vaincre Sin aux côtés de l'Invokeur et de ses Gardiens.",
    Img:"https://www.supersoluce.com/sites/default/files/logo1/000-image-illu-final-fantasy-10-auron-2.jpg"
  },

  {
    name:"Lulu",
    age:22,
    weapon:"Magic",
    description:"Lulu est un personnage jouable dans Final Fantasy X et un personnage non-jouable dans Final Fantasy X-2. Anciennement fiancée à Chappu, le frère de Wakka, jusqu'à ce qu'il meure, elle est désormais la gardienne de Yuna qu'elle considère comme sa sœur",
    Img:"https://www.supersoluce.com/sites/default/files/logo1/000-image-illu-final-fantasy-10-lulu-2.jpg"
  },

  {
    name:"Kimahri",
    age:25,
    weapon:"Spear",
    description:"Membre de la tribu des Ronsos, il est taciturne, à cause de la honte d'avoir eu sa corne brisée par un autre Ronso. Protecteur de Yuna depuis son enfance, il devient un Gardien pendant son pèlerinage.",
    Img:"https://www.supersoluce.com/sites/default/files/logo1/000-image-illu-final-fantasy-10-kimahri-ronso-2.jpg"
  },

  {
    name:"Seymour",
    age:28,
    weapon:"scepter",
    description:"Seymour Guado est un antagoniste dans le jeu Final Fantasy X. Il est temporairement jouable durant un combat contre Ghi pendant l'opération Mi'ihen. Il est le fils de lord Jyscal, un Guado.",
    Img:"https://www.pngkit.com/png/detail/64-645551_ffx-seymour-art-seymour-final-fantasy.png"
  },

]

function App() {
 
  return (
    <>  
      <InputFirst/>
      <div className='allboxes'>
        <PresentationBox FFcharacters={FFcharacters}/>
      </div>
    </>
  )
}

export default App
