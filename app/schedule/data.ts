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
    time: '17:00–18:30',
    room: 'Room TBC',
    topic: 'Introductory Meeting',
    presenter: '',
    // links: [{ label: 'Paper', href: 'https://example.com' }],
  },
]
