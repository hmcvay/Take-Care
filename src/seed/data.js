import {v4 as uuid} from 'uuid';

export const posts = [
  {
    id: uuid(),
    title: 'Need Boots!',
    location: 'Sullivan\'s Gulch: Holladay & 25th',
    time: 'May 12, 2022 5:29:18 PM',
    description: 'Mutual PDX is collecting as many pairs of durable, warm, new, or gently used boots as possible for our unhoused neighbors! We will be out collecting donations until late evening May 15, down on the stretch of Holladay between 23rd and 28th',
    is_met: true,
    is_urgent: 'This post is urgent!'
  },
  {
    id: uuid(),
    title: 'ISO Fridge asap!',
    location: 'Cully: 73rd Alberta & NE Roselawn',
    time: 'May 14, 2022 1:04:42 PM',
    description: 'PDX Free Fridge is in urgent need of replacement fridge at our Cully location! Please bring any WORKING fridge you can to our spot on 73rd between Alberta and NE Roselawn. We\'ll be out all day moving perishables out and organizing what we can.',
    is_met: false,
    is_urgent: 'This post is urgent!'
  },
  {
    id: uuid(),
    title: 'ISO: Rain Gear',
    location: 'PDX / Laurelhurst',
    time: 'May 15, 2022, 11:37:02 AM',
    description: 'In need of rain gear: rain-fly for standard two-person tent / size M waterproof jacket / large tarp.',
    is_met: false,
    is_urgent: 'This post is urgent!'
  },
  {
    id: uuid(),
    title: 'Giving Children\'s Clothes',
    location: 'NE pdx - 42nd & Going',
    time: 'May 17, 2022 9:54:22 AM',
    description: 'Have two boxes of children\'s clothes sizes 2T - 14 curbside off NE Going Street and 42nd.',
    is_met: false,
    is_urgent: ''
  },
  {
    id: uuid(),
    title: 'Looking for working Lawnmower',
    location: 'SE Foster/Powell',
    time: 'May 18, 2022 3:12:52 PM',
    description: 'Trying to get my elderly neighbor a working mower so I can help with the lawn. We are at Foster/Powell NW corner near Kern Park yellow house on 67th.',
    is_met: false,
    is_urgent: ''
  },
];