import { Image, useColorScheme, useWindowDimensions } from 'react-native'

// images
import DarkLogo from '../assets/img/logo_dark.png'
import LightLogo from '../assets/img/logo_light.png'

const ThemedLogo = () => {
  const colorScheme = useColorScheme()
  const { width } = useWindowDimensions()
  
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
  <Image
  source={logo}
  style={{
    width: width * 0.8,
    height: width * 0.8,
    resizeMode: 'contain',
    alignSelf: 'center',
  }}
/>

  )
}

export default ThemedLogo