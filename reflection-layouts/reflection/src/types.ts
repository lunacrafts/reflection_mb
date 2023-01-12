export type ActivityBarItem = {
  namespace: string
  render: () => JSX.Element
  meta: {
    placement: 'top' | 'bottom'
    order?: number
    hidden?: boolean
  }
}

export type StatusBarItem = {
  namespace: string
  render: () => JSX.Element
  meta: {
    placement: 'left' | 'right'
    order?: number
    hidden?: boolean
  }
}
