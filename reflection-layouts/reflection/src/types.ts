export type ActivityBarItem = {
  namespace: string
  render: () => JSX.Element
  meta: {
    placement: 'top' | 'bottom'
    order?: number
    hidden?: boolean
  }
}
