import { classNames } from '../../core/helpers/class-names'

export interface GridRowProps extends React.HTMLAttributes<HTMLDivElement> {
  amount: string
} 
const GridRow: React.FC<GridRowProps> = ({ className, amount, ...props }) => (
  <div className={classNames(`grid grid-rows-${amount}`, className)} {...props} />
)

export default GridRow
