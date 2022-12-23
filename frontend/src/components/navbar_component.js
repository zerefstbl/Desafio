import { Navbar } from 'reactstrap';

import NewOrderModal from './new_order_modal_component';

const NavbarComponent = () => {
  return (
    <Navbar style={{backgroundColor: '#009ee2'}}>
      <img src="./log-refera.webp" width={80} alt=''/>
      <NewOrderModal />
    </Navbar>
  )
}

export default NavbarComponent;