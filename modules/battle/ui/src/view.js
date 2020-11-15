
import { createStructuredSelector } from 'reselect'
import {
  View, Stack,
  ButtonGroup, Button,
  Text
} from '@raid/kit'

import { Link, routes } from '@arc/router'
import { connect, emit } from 'kunai'
import { selectors, actions } from '@ship/core'

const viewSelector = createStructuredSelector({
  foo: state => 'Battle tech operational',
  hull: selectors.getHull
})

export const BattleView = connect(
  viewSelector,
  ({ foo, hull }) => {
    return (
      <View>
        <Stack row>
          <Link route={routes.home}>Home</Link>
          <ButtonGroup>
            <Button onClick={event => emit(actions.changeHull, -4)}>Damage Hull</Button>
          </ButtonGroup>
        </Stack>
        <Stack>
          <Text>{foo}</Text>
          <Text>{`${hull[0]}:${hull[1]}`}</Text>
        </Stack>
      </View>
    )
  }
)
