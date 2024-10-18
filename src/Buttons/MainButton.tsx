import { FC, ReactElement } from 'react'

interface IMainButtonProps {
    size: string
    color: string
    icon: ReactElement
}

const MainButton: FC<IMainButtonProps> = ({ icon, size, color }) => {
    const defaultIconProps = {
        size: size === 'big' ? '100px' : 'large',
        color: color === 'default' ? 'blue' : 'grey',
    }
    const newIconProps = {
        ...defaultIconProps,
        ...icon.props,
    }
    return <button></button>
}

export default MainButton
