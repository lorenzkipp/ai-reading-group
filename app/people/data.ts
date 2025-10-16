// app/people/data.ts
export type Person = {
  name: string
  role?: string
  affiliation?: string
  url?: string
  email?: string
}

export const organizers: Person[] = [
  {
    name: 'Karan Mishra',
    affiliation: 'Paris School of Economics',
    url: 'https://sites.google.com/view/karanmishra/home',
    email: 'karan.mishra [at] psemail [dot] eu',
  },
  {
    name: 'Stan Zytynski',
    affiliation: 'Paris School of Economics',
    email: 'stanislaw.zytynski [at] psemail [dot] eu',
  },
  {
    name: 'Lorenz Kipp',
    affiliation: 'Sciences Po',
    url: 'https://lorenzkipp.github.io/',
    email: 'lorenz.kipp [at] sciencespo [dot] fr',
  },
]


export const members: Person[] = []
