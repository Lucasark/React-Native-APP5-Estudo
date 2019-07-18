import CenaCliente from './CenaCliente';
import CenaPrincipal from './CenaPrincipal';

import { createAppContainer, createStackNavigator } from 'react-navigation';


const Routes = createAppContainer(
  createStackNavigator({
    Principal: {
      screen: CenaPrincipal,
      navigationOption : {
        header : null
      },
    },
    Cliente: CenaCliente,
  })
);

export default Routes;