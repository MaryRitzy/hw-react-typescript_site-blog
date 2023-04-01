import DropDownMenu from 'components/DropDownMenu/DropDownMenu'

import MenuItem from './MenuItem'
type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <DropDownMenu />
        </>
    )
}
export default Menu
