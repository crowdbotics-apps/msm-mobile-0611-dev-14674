import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen014032Navigator from '../features/CopyOfBlankScreen014032/navigator';
import BlankScreen014031Navigator from '../features/BlankScreen014031/navigator';
import BlankScreen014029Navigator from '../features/BlankScreen014029/navigator';
import BlankScreen014027Navigator from '../features/BlankScreen014027/navigator';
import BlankScreen014025Navigator from '../features/BlankScreen014025/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen014032: { screen: CopyOfBlankScreen014032Navigator },
BlankScreen014031: { screen: BlankScreen014031Navigator },
BlankScreen014029: { screen: BlankScreen014029Navigator },
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
