import { BadgeLabel } from '../../types'

export const Badge = ({ title, count, color }: BadgeLabel) => {
    return (
        <span className={`d-flex justify-content-around badge bg-${color} p-2 gap-3`}>
            {title}: {count}
        </span>
    )
}
