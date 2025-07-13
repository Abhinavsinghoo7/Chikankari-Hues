import { SVGProps } from 'react'

interface SVGIconProps extends SVGProps<SVGSVGElement> {
  src: string
}

export default function SVGIcon({ src, ...props }: SVGIconProps) {
  return (
    <svg {...props}>
      <use href={`${src}#icon`} />
    </svg>
  )
}