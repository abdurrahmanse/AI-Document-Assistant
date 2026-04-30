import { cn } from '@/utils'
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BarChart3,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  Check,
  Clock3,
  Code2,
  CodeXml,
  ExternalLink,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  MessageSquareText,
  Phone,
  Rocket,
  Sparkles,
  Target,
  Trophy,
  Users,
  X,
  type LucideIcon,
} from 'lucide-react'

export type IconName =
  | 'arrowRight'
  | 'arrowDown'
  | 'arrowUp'
  | 'book'
  | 'briefcase'
  | 'brain'
  | 'chart'
  | 'check'
  | 'code'
  | 'clock'
  | 'external'
  | 'github'
  | 'layers'
  | 'linkedin'
  | 'mail'
  | 'mapPin'
  | 'menu'
  | 'message'
  | 'phone'
  | 'rocket'
  | 'sparkles'
  | 'target'
  | 'trophy'
  | 'twitter'
  | 'users'
  | 'x'

const iconMap: Record<IconName, LucideIcon> = {
  arrowRight: ArrowRight,
  arrowDown: ArrowDown,
  arrowUp: ArrowUp,
  book: BookOpen,
  briefcase: BriefcaseBusiness,
  brain: Brain,
  chart: BarChart3,
  check: Check,
  code: Code2,
  clock: Clock3,
  external: ExternalLink,
  github: CodeXml,
  layers: Layers3,
  linkedin: Users,
  mail: Mail,
  mapPin: MapPin,
  menu: Menu,
  message: MessageSquare,
  phone: Phone,
  rocket: Rocket,
  sparkles: Sparkles,
  target: Target,
  trophy: Trophy,
  twitter: MessageSquareText,
  users: Users,
  x: X,
}

interface SiteIconProps {
  name: IconName
  className?: string
}

export function SiteIcon({ name, className }: SiteIconProps) {
  const Icon = iconMap[name]

  return <Icon className={cn('h-5 w-5 shrink-0', className)} strokeWidth={1.9} />
}
