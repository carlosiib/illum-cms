import { Box } from '@chakra-ui/react'

import { PricingPlanCard } from '@/columns'

export default function PricingPlanSection({ page, ...grid }) {

  if (!grid) return null

  return (
    <Box py={12} >
      <Box maxW="7xl" mx="auto" padding={'0 1rem'} className='price-cards-container'>
        {
          grid.columns.map((column) => (
            <PricingPlanCard
              key={column.id}
              {...{ ...column }}
            />
          ))
        }
      </Box>
    </Box>
  )
}
