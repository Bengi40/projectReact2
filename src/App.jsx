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
    Img:'https://upload.wikimedia.org/wikibooks/en/e/eb/Tidus_FFX.png'
  },

  {
    name:"Yuna",
    color:"purple",
    age:17,
    weapon:"scepter",
    description :"una décide de devenir Invokeur et d'accomplir son pèlerinage afin de détruire Sin. Au cours de son voyage, elle rencontre Tidus, et tous deux finiront par détruire Sin au prix d'un lourd sacrifice.",
    Img:"https://static.wikia.nocookie.net/finalfantasy/images/0/0a/Yuna-FFX.jpg"
  },

  {
    name:"Wakka",
    age:17,
    weapon:"ball",
    description :"Capitaine et entraineur de l'équipe de blitzball des Besaid Aurochs, il abandonne son équipe après le tournoi de Luca pour devenir le gardien de Yuna et la suivre dans son pèlerinage.",
    Img:"https://static.wikia.nocookie.net/finalfantasy/images/2/20/Wakka_Art.jpg"
  },

  {
    name:"Rikku",
    age:15,
    weapon:"daggers",
    description :"Fille du chef des Al Bheds et cousine de Yuna, elle devient la gardienne de celle-ci lors de son pèlerinage.",
    Img:"https://static.wikia.nocookie.net/finalfantasy/images/7/71/Rikku_Art.jpg"
  },

  {
    name:"Auron",
    age:35,
    weapon:"sword",
    information :"Auron est un homme qui fait preuve d'un sang-froid irréprochable durant la totalité de l'histoire, il se montre peu bavard et implacable sur le plan du Pèlerinage de Yuna, il ne veut en rien l'arrêter et est déterminé à vaincre Sin aux côtés de l'Invokeur et de ses Gardiens.",
    Img:"https://static.wikia.nocookie.net/finalfantasy/images/f/f3/Auron_Art.png"
  },

  {
    name:"Lulu",
    age:22,
    weapon:"Magic",
    informations:"Lulu est un personnage jouable dans Final Fantasy X et un personnage non-jouable dans Final Fantasy X-2. Anciennement fiancée à Chappu, le frère de Wakka, jusqu'à ce qu'il meure, elle est désormais la gardienne de Yuna qu'elle considère comme sa sœur",
    Img:"https://finalfantasy.fandom.com/fr/wiki/Lulu?file=Lulu_Art.jpg"
  },

  {
    name:"Kimahri",
    age:25,
    weapon:"Spear",
    informations:"Membre de la tribu des Ronsos, il est taciturne, à cause de la honte d'avoir eu sa corne brisée par un autre Ronso. Protecteur de Yuna depuis son enfance, il devient un Gardien pendant son pèlerinage.",
    Img:"https://static.wikia.nocookie.net/finalfantasy/images/0/00/Kimahri_Ronso_artwork.jpg/"
  },

  {
    name:"Seymour",
    age:28,
    weapon:"scepter",
    informations:"Seymour Guado est un antagoniste dans le jeu Final Fantasy X. Il est temporairement jouable durant un combat contre Ghi pendant l'opération Mi'ihen. Il est le fils de lord Jyscal, un Guado.",
    Img:"https://static.wikia.nocookie.net/finalfantasy/images/0/0f/Seymour_Guado_artwork.jpg"
  },

]

function App() {
 
  return (
    <>
      <InputFirst/>
      <PresentationBox FFcharacters={FFcharacters}/>
    </>
  )
}

export default App
