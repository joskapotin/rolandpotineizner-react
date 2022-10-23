import QuoteSvg from "../svg/quote-svg"

type QuoteProps = {
  children: React.ReactNode
}

function Quote({ children }: QuoteProps) {
  return (
    <blockquote className="mx-auto max-w-md text-justify text-gray-600">
      <i className="mx-auto mb-3 block h-12 w-12 text-gray-400">
        <QuoteSvg />
      </i>
      {children}
    </blockquote>
  )
}
export default Quote
