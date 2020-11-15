
import { createStructuredSelector } from 'reselect'
import {
  View, Stack, Text
} from '@raid/kit'

import { Link, routes } from '@arc/router'
import { connect } from 'kunai'

const viewSelector = createStructuredSelector({
  foo: state => 'foo'
})

export const HomeView = connect(
  viewSelector,
  ({ foo }) => {
    return (
      <View>
        <Stack row>
          <Link route={routes.home}>Home</Link>
        </Stack>
        <Stack>
          <Text>{foo}</Text>
        </Stack>
      </View>
    )
  }
)
