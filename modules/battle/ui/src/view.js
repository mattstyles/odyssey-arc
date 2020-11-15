
import { createStructuredSelector } from 'reselect'
import {
  View, Stack,
  ButtonGroup, Button
} from '@raid/kit'

import { Link, routes } from '@arc/router'
import { connect, emit } from 'kunai'
import { actions } from '@ship/core'

import { Info } from './info'
import { Actions } from './actions'

const viewSelector = createStructuredSelector({
  foo: state => 'Battle tech operational'
})

export const BattleView = connect(
  viewSelector,
  ({ foo, hull }) => {
    return (
      <View isFlex>
        <Stack row tight>
          <Link route={routes.home}>Home</Link>
          <ButtonGroup>
            <Button onClick={event => emit(actions.changeHull, -4)}>Damage Hull</Button>
          </ButtonGroup>
        </Stack>
        <View isFlex position='relative'>
          <Info />
          <Actions />
        </View>
      </View>
    )
  }
)
