import { Fragment, useState } from 'react';

import NavHeader from './NavHeader';
import SideNav from './SideNav';

function Navigation({ onClick: clickToAddEvent, onClick2, onClick3 }) {
  const [toggle, setToggle] = useState('');
  const onClick = (name) => setToggle(toggle === name ? '' : name);

  return (
    <Fragment>
      <SideNav />
      <NavHeader />
    </Fragment>
  );
}

export default Navigation;
