import { SUIDeskNavbar } from "./Desktop"
import { SUIMobileNavbar } from "./mobile"


export const SUINavbar = ({menuItemColor, menuItemHoverColor}) => {
  return (
     <div>
        <SUIDeskNavbar menuItemColor={menuItemColor} menuItemHoverColor={menuItemHoverColor}/>
        <SUIMobileNavbar menuItemColor={menuItemColor} menuItemHoverColor={menuItemHoverColor}/>
     </div>
  )
}
 