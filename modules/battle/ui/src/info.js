
import { createStructuredSelector } from 'reselect'
import { Stack, Text } from '@raid/kit'

import { connect } from 'kunai'
import { Absolute } from '@arc/components'

import { selectors as shipSelectors } from '@ship/core'
import { selectors as battleSelectors } from '@battle/core'

const InfoComponent = ({
  hull,
  fuel,
  block,
  power
}) => {
  return (
    <Absolute top={0} left={0}>
      <Stack>
        <Text>{`Hull ${hull[0]}:${hull[1]}`}</Text>
        <Text>{`Fuel ${fuel}`}</Text>
        <Text>Turn:</Text>
        <Stack ml={4}>
          <Text>{`Power ${power[0]}:${power[1]}`}</Text>
          <Text>{`Block ${block}`}</Text>
        </Stack>
      </Stack>
    </Absolute>
  )
}

const infoSelector = createStructuredSelector({
  hull: shipSelectors.getHull,
  fuel: shipSelectors.getFuel,
  block: battleSelectors.getTurnBlock,
  power: battleSelectors.getTurnPower
})

export const Info = connect(
  infoSelector,
  InfoComponent
)
