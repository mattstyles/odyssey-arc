
import { createStructuredSelector } from 'reselect'
import { Flex, ButtonGroup, Button, Spacer } from '@raid/kit'

import { connect, emit } from 'kunai'
import { Absolute } from '@arc/components'

import { selectors as shipSelectors } from '@ship/core'
import { selectors as battleSelectors, actions } from '@battle/core'

const onAttack = () => {
  emit(actions.turnAction, {
    componentID: 'attack'
  })
}
const onBlock = () => {
  emit(actions.turnAction, {
    componentID: 'block'
  })
}

const onEndTurn = () => {
  emit(actions.turnEnd)
}

const ActionComponent = ({
  hull,
  fuel,
  block
}) => {
  return (
    <Absolute bottom={0} left={0} p={6}>
      <Flex row>
        <ButtonGroup>
          <Button onClick={onAttack}>Attack</Button>
          <Button onClick={onBlock}>Block</Button>
        </ButtonGroup>
        <Spacer px={4} />
        <Button variant='outline' onClick={onEndTurn}>End Turn</Button>
      </Flex>
    </Absolute>
  )
}

const actionSelector = createStructuredSelector({
  hull: shipSelectors.getHull,
  fuel: shipSelectors.getFuel,
  block: battleSelectors.getTurnBlock
})

export const Actions = connect(
  actionSelector,
  ActionComponent
)
