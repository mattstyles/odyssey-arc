
import { createStructuredSelector } from 'reselect'
import { Stack, Text } from '@raid/kit'

import { connect } from 'kunai'
import { Absolute } from '@arc/components'

import { selectors as battleSelectors } from '@battle/core'

const EnemyComponent = ({
  hull
}) => {
  return (
    <Absolute top={0} right={0}>
      <Stack>
        <Text>Enemy:</Text>
        <Text>{`Hull ${hull[0]}:${hull[1]}`}</Text>
      </Stack>
    </Absolute>
  )
}

const enemySelector = createStructuredSelector({
  hull: battleSelectors.getEnemyHull
})

export const Enemy = connect(
  enemySelector,
  EnemyComponent
)
