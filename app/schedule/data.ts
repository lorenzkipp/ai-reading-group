// app/schedule/data.ts

export type Meeting = {
  date: string // '2025-10-07' (ISO)
  time?: string // '17:00–18:30'
  room?: string // 'Seminar Room A'
  topic: string
  presenter?: string
  links?: { label: string; href: string }[]
  note?: string
}

// example seed data — edit freely
export const schedule: Meeting[] = [
  {
    date: '2025-10-16',
    time: '17:00–18:00',
    room: 'PSE, Room R1-16',
    topic: 'Introductory Meeting',
    presenter: '',
    links: [{ label: 'Slides', href: '/week-1-slides.pdf' }],
  },
  {
    date: '2025-10-30',
    time: '17:00–18:00',
    room: 'Sciences Po, Room TBC',
    topic: 'Meeting 1',
    presenter: '',
    links: [
      {label: 'Paper 1', href: 'https://academic.oup.com/qje/article/138/3/1349/7076890'}, 
      {label: 'Paper 2', href: 'https://www.aeaweb.org/articles?id=10.1257/jep.33.2.3'}],
  },
]
