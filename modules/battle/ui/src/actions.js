
import { createStructuredSelector } from 'reselect'
import { ButtonGroup, Button } from '@raid/kit'

import { connect, emit } from 'kunai'
import { Absolute } from '@arc/components'

import { selectors as shipSelectors } from '@ship/core'
import { selectors as battleSelectors, actions } from '@battle/core'

const onAttack = () => {
  emit(actions.turnAction, {
    component: 'attack'
  })
}
const onBlock = () => {
  emit(actions.turnAction, {
    component: 'block'
  })
}

const ActionComponent = ({
  hull,
  fuel,
  block
}) => {
  return (
    <Absolute bottom={0} left={0} p={6}>
      <ButtonGroup>
        <Button onClick={onAttack}>Attack</Button>
        <Button onClick={onBlock}>Block</Button>
      </ButtonGroup>
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
