
import { createStructuredSelector } from 'reselect'
import { Stack, Text } from '@raid/kit'

import { connect } from 'kunai'
import { Absolute } from '@arc/components'

import { selectors as shipSelectors } from '@ship/core'
import { selectors as battleSelectors } from '@battle/core'

const ActionComponent = ({
  hull,
  fuel,
  block
}) => {
  return (
    <Absolute bottom={0} left={0}>
      hello world
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
