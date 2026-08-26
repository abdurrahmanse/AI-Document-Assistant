import * as React from "react"
import { type JSX } from "react"
import { cn } from "@workspace/ui/lib/utils"

/**
 * Container — the single source of truth for page and section width.
 *
 * Variants match the widths used across the website, so every page and
 * section can express its layout with one consistent primitive instead of
 * hand-written Tailwind classes.
 *
 * - `default` → max-w-7xl with responsive padding (header, footer, dashboard main,
 *   top-level marketing sections)
 * - `narrow` → max-w-4xl for prose-heavy content (legal pages, interactive demo,
 *   features hero, timeline wrapper, trust checklist)
 * - `prose` → max-w-3xl for medium text (pricing/how-it-works/security heroes,
 *   FAQ, status page, timeline hero)
 * - `compact` → max-w-2xl for tight prose (docs hero, error views)
 * - `form` → max-w-md for single-column forms (auth pages, contact form)
 * - `fluid` → max-w-7xl with no horizontal padding (admin/app feature wrappers
 *   that already handle their own grid padding)
 */
export type ContainerSize =
  | "default"
  | "narrow"
  | "prose"
  | "compact"
  | "form"
  | "fluid"
  | "dashboard"

const sizeStyles: Record<ContainerSize, string> = {
  default: "max-w-7xl px-4 md:px-8 lg:px-12",
  narrow: "max-w-4xl px-4",
  prose: "max-w-3xl px-4",
  compact: "max-w-2xl px-4",
  form: "max-w-md",
  fluid: "max-w-7xl",
  dashboard: "max-w-7xl px-4 py-8 space-y-8",
}

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Width and padding preset. Defaults to `"default"`, the canonical
   * 7xl / responsive-padding wrapper.
   */
  size?: ContainerSize
  /**
   * Render as a different element. Defaults to `"div"`. Common choices:
   * `"main"`, `"section"`, `"header"`, `"footer"`.
   */
  as?: keyof JSX.IntrinsicElements
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "default", as = "div", ...props }, ref) => {
    const Component = as as React.ElementType
    return (
      <Component
        ref={ref}
        className={cn("mx-auto w-full", sizeStyles[size], className)}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"

export { Container }
