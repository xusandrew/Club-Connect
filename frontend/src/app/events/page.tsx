import Component from './[category]/page'

export default function Page({
  searchParams,
}: {
  searchParams?: {
    category?: string
  }
}) {
  return <Component params={searchParams} />
}
