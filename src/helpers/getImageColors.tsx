import ImageColors from "react-native-image-colors"


export const getImageColors = async ( uri: string) => {
  const result = await ImageColors.getColors(uri, {})

  let primary
  let secondary
  
  switch (result.platform) {
    case 'android':
      // android result properties
      primary = result.dominant
      secondary = result.average
      break
    case 'ios':
      // iOS result properties
      primary = result.primary
      secondary = result.secondary
      break
    default:
      throw new Error('Unexpected platform key')
  }

  return [primary, secondary ]
}
