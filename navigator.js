import { createStackNavigator } from 'react-navigation'

import Home from './home'
import Profile from './profile'

export default createStackNavigator({
  home: Home,
  profile: Profile
},
{
  headerMode: 'none'
})

