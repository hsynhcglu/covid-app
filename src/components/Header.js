import Logo from "./Logo";
import {useState} from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";


const Header = ({activeTitle, onMenuChange}) => {
    const [_activeTitle, setActiveTitle] = useState(activeTitle)
    const [menuItems] = useState(
        [{
            title: "Ülkelere Göre Corone Değerleri",
            value: 1
        },
        {
            title: "Kayde Geçmiş Tüm Corona Değerleri",
            value: 2
        },
        {
            title: "Kıtalara Göre Corone Değerleri",
            value: 3
        }
        ]
    )
    return (
        <nav className="bg-gray-800 border-gray-200 px-2 py-2.5 ">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Logo/>
                <div className="w-auto block">
                    <ul className="flex flex-row  mt-4 font-semibold text-xs space-x-8 mt-0">
                        {menuItems.map((item) => {
                            return (
                                <MenuItem key={item.title} active={item.title === _activeTitle} onClick={(title) => {
                                    setActiveTitle(title)
                                    onMenuChange(item.value)
                                }} title={item.title}/>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
Header.propTypes = {
    activeTitle: PropTypes.string,
    onMenuChange: PropTypes.func,
}
Header.defaultProps = {
    activeTitle: 'Ülkelere Göre Corone Değerleri',
    onMenuChange: () => null,
}
export default Header