import React from "react";
import { Button } from '../../../ui-kit/Button/Button';

// interface ILayoutProps {
//   children: React.ReactNode;
// }

export const Layout = () => {
  return (
    <div className="layout">
      <Button 
        variant="primary"
        size="medium"
        disabled={false}
        hover={true}
        children='Default' disableStyle={""} hoverStyle={""} activeStyle={""}        
      />
    </div>
  )
};

export default Layout;
