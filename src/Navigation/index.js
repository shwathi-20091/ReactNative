import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { AuthNavigation } from './AuthNavigation'
import { AppNavigation } from './AppNavigation'

const SwitchNavigator = createSwitchNavigator(
    {
      Auth: AuthNavigation,
      App: AppNavigation
    },
    {
      initialRouteName: 'Auth'
    }
  )
  export const AppContainer = createAppContainer(SwitchNavigator)