import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen014028Navigator from '../features/CopyOfBlankScreen014028/navigator';
import BlankScreen014027Navigator from '../features/BlankScreen014027/navigator';
import BlankScreen014025Navigator from '../features/BlankScreen014025/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen014028: { screen: CopyOfBlankScreen014028Navigator },
BlankScreen014027: { screen: BlankScreen014027Navigator },
BlankScreen014025: { screen: BlankScreen014025Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
