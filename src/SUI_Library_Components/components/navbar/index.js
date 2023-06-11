import { SUIDeskNavbar } from "./Desktop"
import { SUIMobileNavbar } from "./mobile"


export const SUINavbar = ({ className, menuItemColor, menuItemHoverColor, bgColor }) => {
   return (
      <div>
         <SUIDeskNavbar className={className} menuItemColor={menuItemColor} menuItemHoverColor={menuItemHoverColor} DesktopBgColor={bgColor} />
         <SUIMobileNavbar className={className} menuItemColor={menuItemColor} menuItemHoverColor={menuItemHoverColor} MobileBgColor={bgColor} />
      </div>
   )
}
