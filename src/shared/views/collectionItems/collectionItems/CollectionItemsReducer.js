import { createSelector } from 'reselect'
import _sortBy from 'lodash/sortBy'

const collectionItemState = {
  collectionItems: {
    HNT3APBUNY: {
      id: 'HNT3APBUNY',
      title: 'USS George Washington (CVN-73)',
      image: {
        id: 'HNT3APBUNY-img',
        url: 'http://images.fineartamerica.com/images-medium-large/aircraft-carrier-uss-george-washington-stocktrek-images.jpg',
        alt: 'Aircrat Carrier',
      },
      shortDesc: 'USS George Washington (CVN-73) is a United States Navy nuclear-powered aircraft carrier ("supercarrier"), the sixth carrier in the Nimitz class and the fourth US Navy ship named after George Washington, the first president of the United States. She was built by Newport News Shipbuilding and was commissioned on 4 July 1992.',
      fullDesc: [
        {
          sectionid: '1',
          sectionTitle: 'Description',
          section: 'George Washington (commonly known as GW) is 1,092 ft (333 m) long, 257 ft (78 m) wide and 244 feet (74 m) high. The super carrier can accommodate approximately 90 aircraft and has a flight deck 4.5 acres (18,000 m²) in size, using four elevators that are 3,880 ft² (360 m²) each to move planes between the flight deck and the hangar bay. With a combat load, GW displaces almost 97,000 long tons (99,000 t) and can accommodate 6,250 crewmembers. Her four distilling units can make 400,000 U.S. gallons (1,500,000 L) of potable water a day; the food service divisions serve 18,000 meals per day. There are over 2,500 compartments on board requiring 2,520 refrigeration tons (8.6 MW) of air conditioning capacity (enough to cool over 2,000 homes).',
        },
        {
          sectionid: '2',
          sectionTitle: 'History',
          section: 'The contract for George Washington was awarded to Newport News Shipbuilding on 27 December 1982. The keel was laid on 25 August 1986. The ship was christened on 21 July 1990 by First Lady Barbara Bush, and was commissioned at Naval Station Norfolk on 4 July 1992. In 1993, following a fleet reorganization, the Cruiser-Destroyer Group 2 staff went aboard a new flagship, George Washington. In 1994 the group was under the command of Rear Admiral Alexander Krekich. The group participated in the 2000 NATO Exercise Destined Glory, Operation Joint Endeavor, Operation Deny Flight, Operation Southern Watch, and Operation Vigilant Resolve.[3] After 2001 the group took part in Operation Enduring Freedom and Operation Iraqi Freedom. In 1997 Commander Cruiser-Destroyer Group 2, Rear Admiral Michael Mullen, led the group on deployment from George Washington.',
        },
      ],
      links: [{ title: 'Wikipedia - CVN74', url: 'https://en.wikipedia.org/wiki/USS_George_Washington_(CVN-73)' }],
      type: 'Vehicle',
      subType: 'Military',
      classifications: ['Vehicle', 'Military', 'Aircraft', 'Ship', 'Aircrat Carrier'],
      location: {
        id: 'tp25',
        museum: 'Te Papa',
        building: 'Te Papa',
        floor: '2',
        room: '5',
      },
      exhibition: 'Military future',
      assets: {
        deepzoom: ['http://www.gigapan.com/embeds/1bOtzzlDMTU/'],
        models3d: ['http://sketchfab.com/models/16e5e1fdeff3434e89dba4f6b140601a/embed'],
        images: ['https://i.ytimg.com/vi/7iVUrSKH9QU/maxresdefault.jpg', 'http://navaltoday.com/wp-content/uploads/2015/09/USS-George-Washington-Prepares-for-Southern-Seas-2015.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/c7/USS_George_Washington_(CVN_73)_arrives_at_Fleet_Activities_Yokosuka,_Japan.jpg', 'https://s-media-cache-ak0.pinimg.com/originals/eb/19/c1/eb19c10b4e9568c4838106c6bce5c97d.jpg'], // eslint-disable-line
        chat: 'HNT3APBUNY-chat',
      },
    },
    APYPEBMF6X: {
      id: 'APYPEBMF6X',
      title: 'Portrait Of Paul Hugot',
      image: {
        id: 'APYPEBMF6X-img',
        url: 'https://uploads3.wikiart.org/images/gustave-caillebotte/portrait-of-paul-hugot.jpg',
        alt: 'Protrait of Pail Hugot',
      },
      shortDesc: 'Impressionist painting of Paul Hugot. Painted in 1878.',
      fullDesc: [
        {
          sectionid: '1',
          sectionTitle: 'Gustave Caillebotte',
          section: 'Gustave Caillebotte (19 August 1848 – 21 February 1894) was a French painter, member and patron of the artists known as Impressionists, although he painted in a much more realistic manner than many other artists in the group. Caillebotte was noted for his early interest in photography as an art form.',
        },
        {
          sectionid: '2',
          sectionTitle: 'Impressionism',
          section: 'Impressionism is a 19th-century art movement that originated with a group of Paris-based artists whose independent exhibitions brought them to prominence during the 1870s and 1880s. Impressionist painting characteristics include relatively small, thin, yet visible brush strokes, open composition, emphasis on accurate depiction of light in its changing qualities (often accentuating the effects of the passage of time), ordinary subject matter, inclusion of movement as a crucial element of human perception and experience, and unusual visual angles.',
        },
      ],
      links: [{ title: 'Wikipedia -  Gustave Caillebotte', url: 'https://en.wikipedia.org/wiki/Gustave_Caillebotte' }, { title: 'Wikipedia - Impressionism', url: 'https://en.wikipedia.org/wiki/Impressionism' }],
      type: 'Painting',
      subType: 'Impressionism',
      classifications: ['Painting', 'Impressionism', 'Paul Hugot', 'Gustave Caillebotte', '1878', 'Oil', 'canvas', 'portrait'],
      location: {
        id: 'tp12',
        museum: 'Te Papa',
        building: 'Te Papa',
        floor: '1',
        room: '2',
      },
      exhibition: 'Awesome Art',
      assets: {
        deepzoom: ['http://www.gigapan.com/embeds/Nn-IU96I7s8/'],
        models3d: ['http://sketchfab.com/models/c1c17aaf51474295b55db6eabc92763e/embed'],
        chat: 'APYPEBMF6X-chat',
      },
    },
    CWVSA3MEVN: {
      id: 'CWVSA3MEVN',
      title: 'Unnamed Patagonian titanosaur',
      image: {
        id: 'CWVSA3MEVN-img',
        url: 'http://66.media.tumblr.com/2810ddff1324de41dd8b22d71c917d93/tumblr_inline_o11aulyr5Q1qh595v_500.jpg',
        alt: 'Titanosaur Skeleton',
      },
      shortDesc: 'An unnamed titanosaur species, found in the Patagonia region of Argentina in 2014, has been estimated to have been 40 m (130 ft) long and 20 m (65 ft) tall, with a weight of 77 tonnes.[1] This makes it comparable to the next largest titanosaur, Puertasaurus (which weighed 73-83 tonnes[2][3]), and thus one of the largest land animals in Earth\'s history. The discovery was announced on 16 May 2014. The remains were initially discovered in 2011 by a farm laborer, in the desert near La Flecha, about 250 km west of Trelew.[4] Excavation was done by palaeontologists from the Museum of Paleontology Egidio Feruglio. The lead scientists on the excavation were Jose Luis Carballido and Diego Pol, with partial funding from The Jurassic Foundation. Seven partial skeletons, consisting of approximately 150 bones, were uncovered, and described as in remarkable condition .',
      fullDesc: [
        {
          sectionid: '1',
          sectionTitle: 'What is a Titanosaur',
          section: 'Titanosaurs (members of the group Titanosauria) were a diverse group of sauropod dinosaurs, which included Saltasaurus and Isisaurus. When the extinction event at the end of the Cretaceous period occurred, they were the last surviving group of long necked dinosaurs. It includes some of the heaviest creatures ever to walk the earth, such as Argentinosaurus and Puertasaurus, which are estimated to have weighed up to 90 tonnes (89 long tons; 99 short tons). The group\'s name refers to the much earlier discovery Titanosaurus, a now dubious genus named for the mythological Titans of Ancient Greece. Together with the brachiosaurids and relatives, titanosaurs make up the larger clade Titanosauriformes.',
        },
      ],
      links: [{ title: 'Wikipedia on discovery', url: 'https://en.wikipedia.org/wiki/Unnamed_Patagonian_titanosaur_(2014)' }, { title: 'Wikipedia - Titanosaur', url: 'https://en.wikipedia.org/wiki/Titanosaur' }],
      type: 'Painting',
      subType: 'Impressionism',
      classifications: ['Dinosaur', 'Titanosaur', 'Bones', 'Fossil', 'Patagonia'],
      location: {
        id: 'tp41',
        museum: 'Te Papa',
        building: 'Te Papa',
        floor: '4',
        room: '1',
      },
      exhibition: 'Extreme past',
      assets: {
        deepzoom: ['http://www.gigapan.com/embeds/zZ_uvV_lSaQ/'],
        models3d: ['http://sketchfab.com/models/641feb1a485b492c8de31e84ff89ad64/embed'],
        chat: 'CWVSA3MEVN-chat',
      },
    },
  },
  defaultOrder: ['APYPEBMF6X', 'CWVSA3MEVN', 'HNT3APBUNY'],
}

export const CollectionItemsReducer = (state = collectionItemState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

// Selectors
const getCollectionItems = (state) => state.collectionItems
const getDefaultOrder = (state) => state.defaultOrder
const getSecondParam = (state, param) => param

export const getOrderedByTitle = createSelector(
  [getCollectionItems, getDefaultOrder, getSecondParam],
  (collectionItems, defaultOrder, orderedBy) => {
    if (orderedBy === 'default') return defaultOrder

    // Options 1
    // const listOfObjects = Object.keys(collectionItems).map(id => collectionItems[id])
    // const sortedListOfObjects = _sortBy(listOfObjects, 'title')
    // const sortedList = []
    // sortedListOfObjects.forEach((item) => sortedList.push(item.id))

    // Faster option, assumes we have a list of all items already.
    const sortedObjects = _sortBy(defaultOrder, (id) => collectionItems[id][orderedBy])

    return sortedObjects
  }
)
