import React from 'react'

import { PlansList } from './index'

const planTypes = [
  {
    title: 'CURATORS FAVOURITES',
    subtitle: 'Find out the favourite objects and exhibits from our curators',
    path: '/plan/curators-favourites',
    backgroundUrl: 'http://www.portlandmuseum.org/sites/default/files/styles/event/public/images/event/curator%20talk%202.jpg?itok=UrfPqfla&c=bf08209399645ad66178460f75f54cb1',
  },
  {
    title: 'PEOPLES CHOICE',
    subtitle: 'Get the top choices of our visitors',
    path: '/plan/peoples-choice',
    backgroundUrl: 'http://media.npr.org/assets/img/2016/02/22/hollywood-edit_custom-9545e04d76b5cf2c2c987937fe6afe8d8a859a44-s900-c85.jpg',
  },
  {
    title: 'WHAT\'S NEW?',
    path: '/plan/whats-new',
    subtitle: 'Find out what is new in Te papa',
    backgroundUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Color_icon_green.svg/1024px-Color_icon_green.svg.png',
  },
  {
    title: 'CHOOSE YOUR OWN ADVENTURE',
    subtitle: 'Tell us what you love and we will make a custom tour just for you!',
    path: '/plan/choose-your-own-adventure',
    backgroundUrl: 'https://www.nerdfitness.com/wp-content/uploads/2016/07/9468151425_1ca4b21cb0_b.jpg',
  },
  {
    title: 'WHAT PEOPLE ARE TALKING ABOUT',
    subtitle: 'Check out what objects, art and exhibitions people are talking about on social media',
    path: '/plan/whats-hot',
    backgroundUrl: 'https://www.digitalgov.gov/files/2015/04/featured-301-x-212-Social-Network-Rach27-iStock-Thinkstock-457041031.jpg',
  },
]


const PlansRoute = () => {
  return (
    <PlansList plans={planTypes} />
  )
}

export default PlansRoute
