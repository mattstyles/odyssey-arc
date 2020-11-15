
import { addBase } from '@arc/storybook'

import { View, Text } from '@raid/kit'
import { Loading, LoadModal } from './loading'

export default {
  title: 'Loading',
  decorators: [addBase()]
}

export const LoadingStory = () => {
  return (
    <View>
      <Loading />
    </View>
  )
}
LoadingStory.storyName = 'Loading'

export const LoadModalStory = () => {
  return (
    <View>
      <Text>Some text in the page</Text>
      <LoadModal />
    </View>
  )
}
LoadModalStory.storyName = 'LoadModal'
